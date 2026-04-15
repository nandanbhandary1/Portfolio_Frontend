#!/usr/bin/env python3
"""
Backend API Testing for Nandan Bhandary's Portfolio Contact Form
Tests the contact form API endpoints with comprehensive validation
"""

import requests
import json
import sys
from datetime import datetime

# Backend URL from frontend .env
BACKEND_URL = "https://portfolio-showcase-1339.preview.emergentagent.com/api"

def test_post_contact_valid_data():
    """Test POST /api/contact with valid data"""
    print("\n=== Testing POST /api/contact with valid data ===")
    
    url = f"{BACKEND_URL}/contact"
    valid_data = {
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "subject": "Portfolio Inquiry",
        "message": "Hi Nandan, I'm interested in discussing a potential web development project. Your portfolio looks impressive!"
    }
    
    try:
        response = requests.post(url, json=valid_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 201:
            data = response.json()
            if data.get("success") and "message" in data:
                print("✅ POST /api/contact with valid data: PASSED")
                return True
            else:
                print("❌ POST /api/contact: Invalid response structure")
                return False
        else:
            print(f"❌ POST /api/contact: Expected 201, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ POST /api/contact: Request failed - {e}")
        return False

def test_post_contact_missing_fields():
    """Test POST /api/contact with missing required fields"""
    print("\n=== Testing POST /api/contact with missing fields ===")
    
    url = f"{BACKEND_URL}/contact"
    test_cases = [
        {"name": "John", "email": "john@example.com", "subject": "Test"},  # Missing message
        {"email": "john@example.com", "subject": "Test", "message": "Hello"},  # Missing name
        {"name": "John", "subject": "Test", "message": "Hello"},  # Missing email
        {"name": "John", "email": "john@example.com", "message": "Hello"},  # Missing subject
    ]
    
    all_passed = True
    for i, test_data in enumerate(test_cases):
        try:
            response = requests.post(url, json=test_data, timeout=10)
            print(f"Test case {i+1}: Status Code: {response.status_code}")
            
            if response.status_code == 422:
                print(f"✅ Missing field test {i+1}: PASSED")
            else:
                print(f"❌ Missing field test {i+1}: Expected 422, got {response.status_code}")
                print(f"Response: {response.text}")
                all_passed = False
                
        except requests.exceptions.RequestException as e:
            print(f"❌ Missing field test {i+1}: Request failed - {e}")
            all_passed = False
    
    return all_passed

def test_post_contact_invalid_email():
    """Test POST /api/contact with invalid email format"""
    print("\n=== Testing POST /api/contact with invalid email ===")
    
    url = f"{BACKEND_URL}/contact"
    invalid_emails = [
        "invalid-email",
        "test@",
        "@example.com",
        "test..test@example.com",
        "test@example",
    ]
    
    all_passed = True
    for email in invalid_emails:
        test_data = {
            "name": "Test User",
            "email": email,
            "subject": "Test Subject",
            "message": "Test message"
        }
        
        try:
            response = requests.post(url, json=test_data, timeout=10)
            print(f"Invalid email '{email}': Status Code: {response.status_code}")
            
            if response.status_code == 422:
                print(f"✅ Invalid email '{email}': PASSED")
            else:
                print(f"❌ Invalid email '{email}': Expected 422, got {response.status_code}")
                print(f"Response: {response.text}")
                all_passed = False
                
        except requests.exceptions.RequestException as e:
            print(f"❌ Invalid email '{email}': Request failed - {e}")
            all_passed = False
    
    return all_passed

def test_post_contact_empty_strings():
    """Test POST /api/contact with empty strings after trimming"""
    print("\n=== Testing POST /api/contact with empty/whitespace strings ===")
    
    url = f"{BACKEND_URL}/contact"
    test_cases = [
        {"name": "   ", "email": "test@example.com", "subject": "Test", "message": "Hello"},  # Empty name
        {"name": "John", "email": "test@example.com", "subject": "   ", "message": "Hello"},  # Empty subject
        {"name": "John", "email": "test@example.com", "subject": "Test", "message": "   "},  # Empty message
    ]
    
    all_passed = True
    for i, test_data in enumerate(test_cases):
        try:
            response = requests.post(url, json=test_data, timeout=10)
            print(f"Empty string test {i+1}: Status Code: {response.status_code}")
            
            if response.status_code == 422:
                print(f"✅ Empty string test {i+1}: PASSED")
            else:
                print(f"❌ Empty string test {i+1}: Expected 422, got {response.status_code}")
                print(f"Response: {response.text}")
                all_passed = False
                
        except requests.exceptions.RequestException as e:
            print(f"❌ Empty string test {i+1}: Request failed - {e}")
            all_passed = False
    
    return all_passed

def test_get_contact_messages():
    """Test GET /api/contact to list all contact messages"""
    print("\n=== Testing GET /api/contact ===")
    
    url = f"{BACKEND_URL}/contact"
    
    try:
        response = requests.get(url, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "messages" in data and "total" in data:
                print(f"✅ GET /api/contact: PASSED (Found {data['total']} messages)")
                return True
            else:
                print("❌ GET /api/contact: Invalid response structure")
                return False
        else:
            print(f"❌ GET /api/contact: Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ GET /api/contact: Request failed - {e}")
        return False

def test_get_contact_pagination():
    """Test GET /api/contact with pagination parameters"""
    print("\n=== Testing GET /api/contact with pagination ===")
    
    url = f"{BACKEND_URL}/contact"
    
    # Test with skip and limit parameters
    params = {"skip": 0, "limit": 5}
    
    try:
        response = requests.get(url, params=params, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "messages" in data and "total" in data:
                messages_count = len(data["messages"])
                print(f"✅ GET /api/contact with pagination: PASSED (Returned {messages_count} messages)")
                return True
            else:
                print("❌ GET /api/contact with pagination: Invalid response structure")
                return False
        else:
            print(f"❌ GET /api/contact with pagination: Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ GET /api/contact with pagination: Request failed - {e}")
        return False

def test_backend_health():
    """Test if backend is running and accessible"""
    print("\n=== Testing Backend Health ===")
    
    url = f"{BACKEND_URL}/"
    
    try:
        response = requests.get(url, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            print("✅ Backend Health Check: PASSED")
            return True
        else:
            print(f"❌ Backend Health Check: Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Backend Health Check: Request failed - {e}")
        return False

def main():
    """Run all contact form API tests"""
    print("🚀 Starting Contact Form API Tests")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"Test started at: {datetime.now()}")
    
    test_results = []
    
    # Test backend health first
    test_results.append(("Backend Health", test_backend_health()))
    
    # Test POST /api/contact endpoints
    test_results.append(("POST Valid Data", test_post_contact_valid_data()))
    test_results.append(("POST Missing Fields", test_post_contact_missing_fields()))
    test_results.append(("POST Invalid Email", test_post_contact_invalid_email()))
    test_results.append(("POST Empty Strings", test_post_contact_empty_strings()))
    
    # Test GET /api/contact endpoints
    test_results.append(("GET Contact Messages", test_get_contact_messages()))
    test_results.append(("GET Pagination", test_get_contact_pagination()))
    
    # Summary
    print("\n" + "="*60)
    print("📊 TEST SUMMARY")
    print("="*60)
    
    passed = 0
    failed = 0
    
    for test_name, result in test_results:
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name:<25} {status}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal Tests: {len(test_results)}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    if failed == 0:
        print("\n🎉 All tests passed!")
        return 0
    else:
        print(f"\n⚠️  {failed} test(s) failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())