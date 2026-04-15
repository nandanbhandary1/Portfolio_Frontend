from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr, Field, validator
import uuid


class ContactMessage(BaseModel):
    """Model for contact form messages"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=1, max_length=2000)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    is_read: bool = False
    ip_address: Optional[str] = None

    @validator('name', 'subject', 'message')
    def strip_whitespace(cls, v):
        """Strip leading/trailing whitespace"""
        if isinstance(v, str):
            return v.strip()
        return v

    class Config:
        json_schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "john@example.com",
                "subject": "Project Inquiry",
                "message": "Hi, I'd like to discuss a potential project with you."
            }
        }


class ContactMessageCreate(BaseModel):
    """Schema for creating a contact message"""
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=1, max_length=2000)

    @validator('name', 'subject', 'message')
    def strip_whitespace(cls, v):
        """Strip leading/trailing whitespace"""
        if isinstance(v, str):
            v = v.strip()
            if not v:
                raise ValueError('Field cannot be empty or contain only whitespace')
            return v
        return v

    class Config:
        json_schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "john@example.com",
                "subject": "Project Inquiry",
                "message": "Hi, I'd like to discuss a potential project with you."
            }
        }


class ContactMessageResponse(BaseModel):
    """Response schema for contact message operations"""
    success: bool
    message: str


class ContactMessageList(BaseModel):
    """Schema for listing contact messages"""
    success: bool
    messages: list
    total: int