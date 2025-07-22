"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Users,
    GraduationCap,
    Heart,
    BookOpen,
    Shield,
    MessageSquare,
    BarChart3,
    CheckCircle,
    Building2,
    UserCheck,
} from "lucide-react"

const systemData = {
    ERP: {
        title: "Enterprise Resource Planning",
        description: "Complete school management and administrative system",
        color: "from-blue-500 to-blue-600",
        roles: {
            Admin: {
                icon: Shield,
                title: "Admin Dashboard",
                description: "Complete administrative control and oversight",
                features: [
                    "Add/manage students, parents, and teachers",
                    "Create/manage class structures and schedules",
                    "Monitor daily attendance dashboard",
                    "Generate report cards and analytics",
                    "Access role-based data for each user type",
                    "Schedule parent-teacher meetings",
                    "Broadcast announcements to specific roles",
                    "Monitor communication flow via GoTogether",
                    "Organize parent-teacher meeting schedules",
                    "Track user engagement and notification delivery",
                ],
            },
            Teacher: {
                icon: GraduationCap,
                title: "Teacher Portal",
                description: "Classroom management and student interaction tools",
                features: [
                    "Manage assigned classes and subjects",
                    "Mark student attendance",
                    "Upload academic reports and grades",
                    "Schedule and track class sessions",
                    "Communicate with parents via chat or group updates",
                    "Post updates, events, and class photos in GoTogether",
                    "Share meeting links, updates, and notices instantly",
                ],
            },
            Parent: {
                icon: Heart,
                title: "Parent Gateway",
                description: "Stay connected with your child's academic journey",
                features: [
                    "View student attendance and report cards",
                    "Receive scheduled meeting invites",
                    "Access performance reports and academic calendars",
                    "Two-way messaging with teachers and school admins",
                    "Receive attendance alerts and academic updates",
                    "Join class groups for updates, photos, and events",
                    "View school-wide notifications on GoTogether app",
                ],
            },
            Student: {
                icon: BookOpen,
                title: "Student Hub",
                description: "Access your academic information and stay updated",
                features: [
                    "View class schedules and assigned teachers",
                    "Access report cards and academic progress",
                    "Real-time attendance logging",
                    "Class/section-based grouping and learning path",
                    "Receive announcements and event updates via GoTogether",
                    "Engage in class group discussions or activity feeds",
                    "Stay updated with school activities and results",
                ],
            },
        },
    },
    CRM: {
        title: "Customer Relationship Management",
        description: "Enhanced communication and relationship management system",
        color: "from-purple-500 to-purple-600",
        roles: {
            Admin: {
                icon: Building2,
                title: "CRM Admin",
                description: "Manage relationships and communication workflows",
                features: [
                    "Manage student and parent relationship data",
                    "Track communication history and interactions",
                    "Monitor engagement metrics and analytics",
                    "Generate relationship reports and insights",
                    "Configure automated communication workflows",
                    "Schedule and manage community events",
                    "Broadcast targeted messages to user segments",
                    "Monitor GoTogether community engagement",
                    "Organize virtual and in-person meetings",
                    "Track user satisfaction and feedback",
                ],
            },
            Teacher: {
                icon: UserCheck,
                title: "Teacher Connect",
                description: "Build stronger relationships with students and parents",
                features: [
                    "Maintain detailed student interaction logs",
                    "Track parent communication preferences",
                    "Schedule personalized check-ins and meetings",
                    "Monitor student engagement patterns",
                    "Send personalized updates to parents",
                    "Create and share community content",
                    "Facilitate group discussions and activities",
                ],
            },
            Parent: {
                icon: MessageSquare,
                title: "Parent Connect",
                description: "Enhanced communication and community engagement",
                features: [
                    "Access comprehensive communication history",
                    "Receive personalized updates and recommendations",
                    "Participate in community discussions and events",
                    "Connect with other parents in your child's class",
                    "Receive proactive notifications and reminders",
                    "Join interest-based parent groups",
                    "Access community resources and support",
                ],
            },
            Student: {
                icon: Users,
                title: "Student Community",
                description: "Connect, collaborate, and engage with peers",
                features: [
                    "Access personalized learning recommendations",
                    "Participate in peer study groups and discussions",
                    "Receive targeted announcements and opportunities",
                    "Connect with classmates and build study networks",
                    "Engage in community challenges and activities",
                    "Access mentorship and support resources",
                    "Track personal engagement and achievements",
                ],
            },
        },
    },
}

export default function ERPCRMDashboard() {
    const [selectedSystem, setSelectedSystem] = useState<"ERP" | "CRM" | null>("ERP")

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-2 sm:p-4 md:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Comprehensive School Management Modules
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        A Unified ERP + CRM Platform: Smart Administration, Connected Classrooms, and Stronger Parent-Teacher Relationships.
                    </p>
                </div>

                {/* System Selection Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-6 sm:mb-8 md:mb-12 px-2 sm:px-0">
                    <Button
                        onClick={() => setSelectedSystem("ERP")}
                        variant={selectedSystem === "ERP" ? "default" : "outline"}
                        size="lg"
                        className={`h-16 sm:h-18 md:h-20 px-4 sm:px-8 md:px-12 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 ${
                            selectedSystem === "ERP"
                                ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg scale-105"
                                : "hover:scale-105 hover:shadow-md"
                        }`}
                    >
                        <Building2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
                        <span className="text-center">
              <span className="block sm:hidden">ERP</span>
              <span className="hidden sm:block">Enterprise Resource Planning (ERP)</span>
            </span>
                    </Button>

                    <Button
                        onClick={() => setSelectedSystem("CRM")}
                        variant={selectedSystem === "CRM" ? "default" : "outline"}
                        size="lg"
                        className={`h-16 sm:h-18 md:h-20 px-4 sm:px-8 md:px-12 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 ${
                            selectedSystem === "CRM"
                                ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-lg scale-105"
                                : "hover:scale-105 hover:shadow-md"
                        }`}
                    >
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
                        <span className="text-center">
              <span className="block sm:hidden">CRM</span>
              <span className="hidden sm:block">Customer Relationship Management (CRM)</span>
            </span>
                    </Button>
                </div>

                {/* System Description */}
                {selectedSystem && (
                    <div className="text-center mb-4 sm:mb-6 md:mb-8 animate-in fade-in duration-500 px-4">
                        <Badge variant="secondary" className="mb-2 sm:mb-4 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2">
                            {systemData[selectedSystem].title}
                        </Badge>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600">{systemData[selectedSystem].description}</p>
                    </div>
                )}

                {/* Role Cards */}
                {selectedSystem && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 animate-in slide-in-from-bottom duration-700 px-2 sm:px-0">
                        {Object.entries(systemData[selectedSystem].roles).map(([role, data]) => {
                            const IconComponent = data.icon
                            return (
                                <Card
                                    key={role}
                                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                                        <div
                                            className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${systemData[selectedSystem].color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto`}
                                        >
                                            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                                        </div>
                                        <CardTitle className="text-lg sm:text-xl text-center">{data.title}</CardTitle>
                                        <CardDescription className="text-center text-xs sm:text-sm leading-relaxed px-1">
                                            {data.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-4 sm:p-6 pt-0">
                                        <ul className="space-y-2 sm:space-y-3">
                                            {data.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                )}

                {/* Call to Action */}
                {!selectedSystem && (
                    <div className="text-center mt-8 sm:mt-12 md:mt-16 px-4">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-2xl mx-auto">
                            <BarChart3 className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Select a System to Get Started
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600">
                                Choose between ERP or CRM to explore the comprehensive features available for each user role in your
                                school management system.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
