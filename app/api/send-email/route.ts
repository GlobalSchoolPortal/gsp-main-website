import { type NextRequest, NextResponse } from "next/server"

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Phone number validation regex (supports various formats)
const phoneRegex = /^[+]?[1-9][\d]{0,15}$|^[+]?[(]?[\d\s\-$$$$]{10,}$/

// Validation function
function validateFormData(data: any) {
  const errors: string[] = []

  if (!data.organizationName || data.organizationName.trim().length < 2) {
    errors.push("Organization name must be at least 2 characters long")
  }

  if (!data.address || data.address.trim().length < 10) {
    errors.push("Address must be at least 10 characters long")
  }

  if (data.contactNumber) {
    const cleanedNumber = data.contactNumber.replace(/\s/g, "");
    if (cleanedNumber.startsWith('+')) {
      if (cleanedNumber.length !== 13) {
        errors.push("Please enter a valid contact number");
      }
    } else if (cleanedNumber.length !== 10) {
      errors.push("Please enter a valid contact number");
    }
  }

  if (!data.contactNumber || !phoneRegex.test(data.contactNumber.replace(/\s/g, "")) || data.contactNumber.length < 10 || data.contactNumber.length > 15) {
    errors.push("Please enter a valid contact number")
  }

  if (!data.email || !emailRegex.test(data.email)) {
    errors.push("Please enter a valid email address")
  }

  if (!data.pointOfContact || data.pointOfContact.trim().length < 2) {
    errors.push("Point of contact name must be at least 2 characters long")
  }

  return errors
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { organizationName, address, contactNumber, email, pointOfContact } = body

    // Validate form data
    const validationErrors = validateFormData(body)
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validationErrors,
        },
        { status: 400 },
      )
    }

    // Email content
    const emailContent = `
Subject: New Enquiry About GSP

Dear Support Team,

We have received a new enquiry for Global School Portal with the following details:

Organization Name: ${organizationName}
Address: ${address}
Contact Number: ${contactNumber}
Email: ${email}
Point of Contact: ${pointOfContact}

Please follow up with this enquiry at your earliest convenience.

Best regards,
Global School Portal System
    `

    // In a real application, you would use a service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - AWS SES
    // - Resend
    // - etc.

    // For demonstration, we'll simulate sending an email
    console.log("Email would be sent to: support@globalschoolportal.com")
    console.log("Email content:", emailContent)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real implementation, you would integrate with an email service:
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'support@globalschoolportal.com',
      subject: 'New Enquiry About GSP',
      text: emailContent
    });
    */

    return NextResponse.json({
      success: true,
      message: "Email sent successfully to support@globalschoolportal.com",
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
