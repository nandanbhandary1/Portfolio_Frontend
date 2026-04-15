# Portfolio Backend Integration Contracts

## Overview
This document outlines the API contracts and integration plan for Nandan Bhandary's portfolio website backend.

## Current State (MOCKED)
- **File**: `/app/frontend/src/mock.js`
- **Function**: `submitContactForm()` - Currently mocked, logs to console and returns success after 1s delay
- **Data**: All portfolio data (personal info, skills, projects, experience, education) is hardcoded in mock.js

## Backend Implementation Plan

### 1. MongoDB Models

#### ContactMessage Model
```python
{
    "_id": ObjectId,
    "name": str,
    "email": str,
    "subject": str,
    "message": str,
    "created_at": datetime,
    "is_read": bool (default: False),
    "ip_address": str (optional)
}
```

### 2. API Endpoints

#### POST /api/contact
**Purpose**: Submit contact form message
**Request Body**:
```json
{
    "name": "string (required, max 100)",
    "email": "string (required, valid email)",
    "subject": "string (required, max 200)",
    "message": "string (required, max 2000)"
}
```

**Response Success (201)**:
```json
{
    "success": true,
    "message": "Message sent successfully! I'll get back to you soon."
}
```

**Response Error (400)**:
```json
{
    "success": false,
    "message": "Error message describing the issue"
}
```

**Validation Rules**:
- Name: 1-100 characters
- Email: Valid email format
- Subject: 1-200 characters
- Message: 1-2000 characters

#### GET /api/contact (Optional - Admin only)
**Purpose**: Retrieve all contact messages (for future admin panel)
**Response**:
```json
{
    "success": true,
    "messages": [
        {
            "id": "string",
            "name": "string",
            "email": "string",
            "subject": "string",
            "message": "string",
            "created_at": "ISO datetime",
            "is_read": false
        }
    ]
}
```

### 3. Frontend Integration Changes

#### File: `/app/frontend/src/components/ContactForm.jsx`

**Changes Required**:
1. Replace mock import:
   ```javascript
   // REMOVE: import { submitContactForm } from '../mock';
   // ADD: Use axios to call backend API
   ```

2. Update handleSubmit function:
   ```javascript
   const handleSubmit = async (e) => {
     e.preventDefault();
     setIsSubmitting(true);
     setSubmitStatus(null);

     try {
       const response = await axios.post(`${API}/contact`, formData);
       setSubmitStatus({ 
         type: 'success', 
         message: response.data.message 
       });
       setFormData({ name: '', email: '', subject: '', message: '' });
     } catch (error) {
       setSubmitStatus({
         type: 'error',
         message: error.response?.data?.message || 'Failed to send message. Please try again.'
       });
     } finally {
       setIsSubmitting(false);
     }
   };
   ```

### 4. Backend Implementation Checklist

- [ ] Create MongoDB model for ContactMessage in `/app/backend/models/contact.py`
- [ ] Create Pydantic schemas in `/app/backend/schemas/contact.py`
- [ ] Create contact routes in `/app/backend/routes/contact.py`
- [ ] Register routes in `/app/backend/server.py`
- [ ] Add input validation and error handling
- [ ] Test API endpoints
- [ ] Update frontend to use real API
- [ ] Remove mock function usage from frontend

### 5. Environment Variables
**No new environment variables needed** - Using existing:
- `MONGO_URL` - Already configured
- `DB_NAME` - Already configured

### 6. Testing Checklist

#### Backend Testing:
- [ ] Test POST /api/contact with valid data
- [ ] Test validation errors (invalid email, missing fields, too long strings)
- [ ] Test database storage
- [ ] Test duplicate submissions

#### Frontend Testing:
- [ ] Test form submission success flow
- [ ] Test form submission error handling
- [ ] Test form validation
- [ ] Test UI feedback (loading, success, error states)

### 7. Future Enhancements (Not in current scope)
- Email notifications to nandanbhandary24@gmail.com on new message
- Admin panel to view/manage contact messages
- Rate limiting to prevent spam
- reCAPTCHA integration
- Portfolio content management via admin panel
- Analytics tracking

## Integration Flow

```
User fills contact form → Frontend validates → 
POST /api/contact → Backend validates → 
Store in MongoDB → Return success → 
Show success message → Clear form
```

## Notes
- All portfolio display data (skills, projects, experience) remains static in mock.js for now
- Only contact form functionality will be connected to backend
- Frontend hot-reload is enabled, no restart needed after backend integration
- Backend will need supervisor restart after adding new dependencies
