"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

interface ContactDialogProps {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
}

export default function ContactDialog({ isOpen, onOpenChange }: ContactDialogProps) {
    const [formData, setFormData] = useState({
        organizationName: "",
        address: "",
        contactNumber: "",
        email: "",
        pointOfContact: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [submitMessage, setSubmitMessage] = useState("")
    const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({})

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$|^[+]?[(]?[\d\s\-()]{10,}$/

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        if (validationErrors[field]) {
            setValidationErrors((prev) => ({ ...prev, [field]: "" }))
        }
    }

    const validateField = (field: string, value: string): string => {
        switch (field) {
            case "organizationName":
                if (!value.trim()) return "Organization name is required"
                if (value.trim().length < 2) return "Organization name must be at least 2 characters"
                return ""
            case "address":
                if (!value.trim()) return "Address is required"
                if (value.trim().length < 10) return "Address must be at least 10 characters"
                return ""
            case "contactNumber":
                if (!value.trim()) return "Contact number is required"
                const cleanPhone = value.replace(/\s/g, "")
                if (!phoneRegex.test(cleanPhone)) return "Please enter a valid contact number"
                return ""
            case "email":
                if (!value.trim()) return "Email address is required"
                if (!emailRegex.test(value)) return "Please enter a valid email address"
                return ""
            case "pointOfContact":
                if (!value.trim()) return "Point of contact name is required"
                if (value.trim().length < 2) return "Name must be at least 2 characters"
                return ""
            default:
                return ""
        }
    }

    const validateForm = (): boolean => {
        const errors: { [key: string]: string } = {}
        Object.keys(formData).forEach((field) => {
            const error = validateField(field, formData[field as keyof typeof formData])
            if (error) {
                errors[field] = error
            }
        })
        setValidationErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)
        setSubmitMessage("")

        try {
            await emailjs.send(
                "service_1yclonp",
                "template_aj4w40m",
                {
                    orgName: formData.organizationName,
                    address: formData.address,
                    email: formData.email,
                    phone: formData.contactNumber,
                    pointOfContact: formData.pointOfContact,
                },
                "t9YuU-FfQEc3pXb3i",
            )

            setIsSubmitted(true)
            setSubmitMessage("Your request has been sent successfully to support@globalschoolportal.com")

            setTimeout(() => {
                setIsSubmitted(false)
                onOpenChange(false)
                setSubmitMessage("")
                setValidationErrors({})
                setFormData({
                    organizationName: "",
                    address: "",
                    contactNumber: "",
                    email: "",
                    pointOfContact: "",
                })
            }, 5000)
        } catch (error) {
            console.error("Error sending email:", error)
            setSubmitMessage("An error occurred. Please try again or contact support.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Request Demo - Global School Portal</DialogTitle>
                    <DialogDescription>
                        Fill out the form below and we'll get back to you with a personalized demo
                    </DialogDescription>
                </DialogHeader>
                {isSubmitted ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                        <p className="text-gray-600 mb-4">{submitMessage}</p>
                        <p className="text-sm text-gray-500">We'll contact you within 24 hours to schedule your demo.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="organizationName">Organization Name *</Label>
                            <Input
                                id="organizationName"
                                placeholder="Enter your school/organization name"
                                value={formData.organizationName}
                                onChange={(e) => handleInputChange("organizationName", e.target.value)}
                                className={validationErrors.organizationName ? "border-red-500" : ""}
                                required
                            />
                            {validationErrors.organizationName && (
                                <div className="flex items-center gap-1 text-red-500 text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    {validationErrors.organizationName}
                                </div>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="address">Address *</Label>
                            <Textarea
                                id="address"
                                placeholder="Enter your organization address"
                                value={formData.address}
                                onChange={(e) => handleInputChange("address", e.target.value)}
                                className={validationErrors.address ? "border-red-500" : ""}
                                required
                                rows={3}
                            />
                            {validationErrors.address && (
                                <div className="flex items-center gap-1 text-red-500 text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    {validationErrors.address}
                                </div>
                            )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="contactNumber">Contact Number *</Label>
                                <Input
                                    id="contactNumber"
                                    type="tel"
                                    placeholder="Enter contact number"
                                    value={formData.contactNumber}
                                    onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                                    className={validationErrors.contactNumber ? "border-red-500" : ""}
                                    required
                                />
                                {validationErrors.contactNumber && (
                                    <div className="flex items-center gap-1 text-red-500 text-sm">
                                        <AlertCircle className="w-4 h-4" />
                                        {validationErrors.contactNumber}
                                    </div>
                                )}
                                <p className="text-xs text-gray-500">Format: +1234567890 or (123) 456-7890</p>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter email address"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    className={validationErrors.email ? "border-red-500" : ""}
                                    required
                                />
                                {validationErrors.email && (
                                    <div className="flex items-center gap-1 text-red-500 text-sm">
                                        <AlertCircle className="w-4 h-4" />
                                        {validationErrors.email}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="pointOfContact">Point of Contact Name *</Label>
                            <Input
                                id="pointOfContact"
                                placeholder="Enter contact person name"
                                value={formData.pointOfContact}
                                onChange={(e) => handleInputChange("pointOfContact", e.target.value)}
                                className={validationErrors.pointOfContact ? "border-red-500" : ""}
                                required
                            />
                            {validationErrors.pointOfContact && (
                                <div className="flex items-center gap-1 text-red-500 text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    {validationErrors.pointOfContact}
                                </div>
                            )}
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-sm text-blue-800">
                                <strong>What happens next?</strong> Our team will review your request and contact you within 24 hours to
                                schedule a personalized demo of Global School Portal.
                            </p>
                        </div>
                        {submitMessage && !isSubmitted && (
                            <div className="bg-red-50 p-4 rounded-lg">
                                <p className="text-sm text-red-800">{submitMessage}</p>
                            </div>
                        )}
                        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                            {isSubmitting ? "Sending Request..." : "Submit Request"}
                        </Button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    )
}
