from fastapi import APIRouter, HTTPException, Request, status
from motor.motor_asyncio import AsyncIOMotorDatabase
import logging
import os
import asyncio
import smtplib
from email.mime.text import MIMEText
from dotenv import load_dotenv

from models.contact import (
    ContactMessage,
    ContactMessageCreate,
    ContactMessageResponse,
    ContactMessageList
)

# Load environment variables
load_dotenv()

logger = logging.getLogger(__name__)

# Create router
router = APIRouter(prefix="/contact", tags=["contact"])

# Database will be injected
contact_collection = None


def init_contact_routes(database: AsyncIOMotorDatabase):
    global contact_collection
    contact_collection = database.contact_messages


# ✅ EMAIL FUNCTION
def send_email(name, email, subject, message):
    sender = os.getenv("EMAIL_USER")
    password = os.getenv("EMAIL_PASS")
    receiver = os.getenv("EMAIL_FROM")

    msg = MIMEText(f"""
Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
""")

    msg["Subject"] = f"Portfolio Contact: {subject}"
    msg["From"] = sender
    msg["To"] = receiver

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(sender, password)
        server.send_message(msg)


# ✅ ASYNC WRAPPER
async def send_email_async(name, email, subject, message):
    loop = asyncio.get_event_loop()
    await loop.run_in_executor(None, send_email, name, email, subject, message)


# ✅ CONTACT ROUTE
@router.post("", response_model=ContactMessageResponse, status_code=status.HTTP_201_CREATED)
async def create_contact_message(message_data: ContactMessageCreate, request: Request):
    try:
        client_ip = request.client.host if request.client else None

        contact_message = ContactMessage(
            **message_data.dict(),
            ip_address=client_ip
        )

        result = await contact_collection.insert_one(contact_message.dict())

        if result.inserted_id:
            # 🔥 Send email
            try:
                await send_email_async(
                    message_data.name,
                    message_data.email,
                    message_data.subject,
                    message_data.message
                )
            except Exception as e:
                logger.error(f"Email sending failed: {e}")

            return ContactMessageResponse(
                success=True,
                message="Message sent successfully! I'll get back to you soon."
            )

        else:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to save message"
            )

    except Exception as e:
        logger.error(f"Error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Something went wrong"
        )