"use client"

import type React from "react"

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import emailjs from '@emailjs/browser';

import {
    Users,
    BookOpen,
    MessageSquare,
    Code,
    Shield,
    BarChart3,
    Clock,
    Bell,
    Fingerprint,
    Smartphone,
    CheckCircle,
    ArrowRight,
    Globe,
    Menu,
    AlertCircle,
} from "lucide-react"
import Link from "next/link"
import {useState} from "react"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"

export default function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
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

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // Phone number validation regex (supports various formats)
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$|^[+]?[(]?[\d\s\-$$$$]{10,}$/

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({...prev, [field]: value}))

        // Clear validation error when user starts typing
        if (validationErrors[field]) {
            setValidationErrors((prev) => ({...prev, [field]: ""}))
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

        // Validate form before submission
        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)
        setSubmitMessage("")

        try {
            const result = await emailjs.send(
                'service_1yclonp',
                'template_aj4w40m',
                {
                    orgName: formData.organizationName,
                    address: formData.address,
                    email: formData.email,
                    phone: formData.contactNumber,
                    pointOfContact: formData.pointOfContact,
                },
                't9YuU-FfQEc3pXb3i'
            )

            setIsSubmitted(true)
            setSubmitMessage("Your request has been sent successfully to support@globalschoolportal.com")

            // Reset form after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false)
                setIsDialogOpen(false)
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


    const handleLinkClick = (href: string) => {
        setIsMenuOpen(false)
        // Small delay to allow dropdown to close before scrolling
        setTimeout(() => {
            const element = document.querySelector(href)
            if (element) {
                const headerHeight = 80 // Account for sticky header
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerHeight

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                })
            }
        }, 150)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden">
            {/* Header */}
            <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div
                                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Globe className="w-4 h-4 sm:w-6 sm:h-6 text-white"/>
                            </div>
                            <div>
                                <h1 className="text-lg sm:text-xl font-bold text-gray-900">Global School Portal</h1>
                                {/*<p className="text-xs text-gray-500 hidden sm:block">IntegraSphere Platform</p>*/}
                            </div>
                        </div>
                        <nav className="flex items-center space-x-3 sm:space-x-6">
                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center space-x-6">
                                <Link
                                    href="#features"
                                    className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    Features
                                </Link>
                                <Link
                                    href="#modules"
                                    className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    Modules
                                </Link>
                                <button
                                    onClick={() => setIsDialogOpen(true)}
                                    className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    Contact
                                </button>
                            </div>

                            {/* Mobile Navigation */}
                            <div className="md:hidden">
                                <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="sm" className="p-2">
                                            <Menu className="w-5 h-5"/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-48">
                                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                            <button onClick={() => handleLinkClick("#features")}
                                                    className="w-full text-left cursor-pointer">
                                                Features
                                            </button>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                            <button onClick={() => handleLinkClick("#modules")}
                                                    className="w-full text-left cursor-pointer">
                                                Modules
                                            </button>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                            <button
                                                onClick={() => {
                                                    setIsMenuOpen(false)
                                                    setIsDialogOpen(true)
                                                }}
                                                className="w-full text-left cursor-pointer"
                                            >
                                                Contact
                                            </button>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-12 sm:py-16 lg:py-20 px-4">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs sm:text-sm">
                        Complete School Management Solution
                    </Badge>
                    <h1 className="font-arial text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                        Unified platform for school management, coding education, and student-parent engagement.<br/>
                        <span
                            className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Global School Portal
            </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                        A unified platform that streamlines school administration, enhances parent-teacher
                        communication, and
                        provides innovative learning tools including drag-and-drop coding and community features.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <Button size="lg" className="w-full sm:w-auto">
                                    Request Demo
                                </Button>
                            </DialogTrigger>
                        </Dialog>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                            <Link href="#features">Explore Features</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Everything Your School Needs
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                            From attendance tracking to coding education, we provide comprehensive tools for modern
                            education
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <Fingerprint className="w-6 h-6 text-blue-600"/>
                                </div>
                                <CardTitle>Real Time Attendance</CardTitle>
                                <CardDescription>Advanced attendance system with real-time tracking and
                                    alerts</CardDescription>
                            </CardHeader>
                        </Card>

                        <Link href={"https://pydrag.vercel.app//"} target="_blank">
                            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div
                                        className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                        <Code className="w-6 h-6 text-green-600"/>
                                    </div>
                                    <CardTitle>PyDrag Coding Platform </CardTitle>
                                    <CardDescription>
                                        Interactive drag-and-drop coding platform for students to learn programming
                                        visually
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>

                        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div
                                    className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                    <MessageSquare className="w-6 h-6 text-purple-600"/>
                                </div>
                                <CardTitle>GoGether Community</CardTitle>
                                <CardDescription>
                                    Collaborative platform where students connect, ask questions, and teachers provide
                                    guidance
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div
                                    className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                    <Bell className="w-6 h-6 text-orange-600"/>
                                </div>
                                <CardTitle>Real-time Updates</CardTitle>
                                <CardDescription>
                                    Instant notifications to parents about attendance, grades, and school activities
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Product Modules */}
            <section id="modules" className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Comprehensive School Management Modules
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                            Integrated modules designed to handle every aspect of school operations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* School Management Module */}
                        <Link href={"https://master.globalschoolportal.com/login"} target={"_blank"}>
                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <div
                                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <BookOpen className="w-8 h-8 text-white"/>
                                </div>
                                <CardTitle className="text-xl">School Management</CardTitle>
                                <CardDescription>Complete academic and administrative control</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        <span className="text-sm">Academic Reports & Analytics</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        <span className="text-sm">Attendance Tracking</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        <span className="text-sm">Parent-Teacher Communication </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        <span className="text-sm">Leave Applications</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        <span className="text-sm">{"Fee and Payment System"}</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        </Link>

                        {/* Learning & Community Module */}
                        <Link href={"https://pydrag.vercel.app"} target={"_blank"}>
                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <div
                                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                                    <Users className="w-8 h-8 text-white"/>
                                </div>
                                <CardTitle className="text-xl">Learning & Community</CardTitle>
                                <CardDescription>Interactive learning and collaboration tools</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        <span className="text-sm">PyDrag Coding Platform</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        <span className="text-sm">GoGether Community Hub</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        <span className="text-sm">Student Doubt Resolution</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        <span className="text-sm">Video & Image Sharing</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        <span className="text-sm">Peer-to-Peer Learning</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        </Link>

                        {/* Administration Module */}
                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <div
                                    className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                                    <Shield className="w-8 h-8 text-white"/>
                                </div>
                                <CardTitle className="text-xl">Administration</CardTitle>
                                <CardDescription>Secure and efficient school operations</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        <span className="text-sm">Role-based Access Control</span>
                                    </li>

                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        <span className="text-sm">Data Analytics & Reports</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        <span className="text-sm">Cloud-based Infrastructure</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        <span className="text-sm">24/7 System Monitoring</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        <span className="text-sm">{"User Management"}</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Global School Portal?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-blue-600"/>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Time Efficient</h3>
                            <p className="text-gray-600">Automate routine tasks and focus on what matters most -
                                education</p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Smartphone className="w-8 h-8 text-green-600"/>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Mobile First</h3>
                            <p className="text-gray-600">Access everything from anywhere with our responsive mobile
                                platform</p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BarChart3 className="w-8 h-8 text-purple-600"/>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Data Driven</h3>
                            <p className="text-gray-600">Make informed decisions with comprehensive analytics and
                                reporting</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                        Ready to Transform Your School?
                    </h2>
                    <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                        Join hundreds of schools already using Global School Portal to streamline operations and enhance
                        education
                    </p>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto mx-4">
                                Get Started Today <ArrowRight className="w-4 h-4 ml-2"/>
                            </Button>
                        </DialogTrigger>
                    </Dialog>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div
                                    className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                    <Globe className="w-5 h-5 text-white"/>
                                </div>
                                <span className="font-bold">Global School Portal</span>
                            </div>
                            <p className="text-gray-400 text-sm">Transforming education through innovative technology
                                solutions.</p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <Link href="#features" className="hover:text-white transition-colors">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#modules" className="hover:text-white transition-colors">
                                        Modules
                                    </Link>
                                </li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                        <DialogTrigger asChild>
                                            <button
                                                className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                                                Contact Us
                                            </button>
                                        </DialogTrigger>
                                    </Dialog>
                                </li>
                                <li>
                                    <span>Documentation</span>
                                </li>
                                <li>
                                    <span>Training</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <a
                                    href="mailto:support@globalschoolportal.com"
                                    className="hover:text-blue-400 transition-colors cursor-pointer"
                                >
                                    <li>Email Us</li>
                                </a>

                                <li>
                                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                        <DialogTrigger asChild>
                                            <button
                                                className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                                                Sales & Demo Requests
                                            </button>
                                        </DialogTrigger>
                                    </Dialog>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                        <p>© 2025 Global School Portal. All rights reserved. | One Above All Pvt. Ltd. </p>
                    </div>
                </div>
            </footer>

            {/* Contact Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Request Demo - Global School Portal</DialogTitle>
                        <DialogDescription>
                            Fill out the form below and we'll get back to you with a personalized demo
                        </DialogDescription>
                    </DialogHeader>

                    {isSubmitted ? (
                        <div className="text-center py-8">
                            <div
                                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-green-600"/>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                            <p className="text-gray-600 mb-4">{submitMessage}</p>
                            <p className="text-sm text-gray-500">We'll contact you within 24 hours to schedule your
                                demo.</p>
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
                                        <AlertCircle className="w-4 h-4"/>
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
                                        <AlertCircle className="w-4 h-4"/>
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
                                            <AlertCircle className="w-4 h-4"/>
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
                                            <AlertCircle className="w-4 h-4"/>
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
                                        <AlertCircle className="w-4 h-4"/>
                                        {validationErrors.pointOfContact}
                                    </div>
                                )}
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="text-sm text-blue-800">
                                    <strong>What happens next?</strong> Our team will review your request and contact
                                    you within 24 hours
                                    to schedule a personalized demo of Global School Portal.
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
        </div>
    )
}
