import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mountain, Users, Award, Globe, Heart, Shield } from "lucide-react";

export default function AboutPage() {
    const stats = [
        { number: "500+", label: "Happy Travelers" },
        { number: "15+", label: "Expert Guides" },
        { number: "8", label: "Years Experience" },
        { number: "25+", label: "Destinations" }
    ];

    const values = [
        {
            icon: Heart,
            title: "Authentic Experiences",
            description: "We provide genuine cultural encounters that respect and celebrate Basotho traditions while creating meaningful connections."
        },
        {
            icon: Shield,
            title: "Safety First",
            description: "Your safety is our top priority. All our guides are certified and our equipment meets international safety standards."
        },
        {
            icon: Globe,
            title: "Sustainable Tourism",
            description: "We practice responsible tourism that benefits local communities and preserves Lesotho&apos;s natural environment for future generations."
        },
        {
            icon: Award,
            title: "Excellence in Service",
            description: "Our commitment to exceptional service has earned us recognition as one of Lesotho&apos;s premier tour operators."
        }
    ];

    const team = [
        {
            name: "Mohale Thabane",
            role: "Founder & CEO",
            experience: "12 years",
            description: "Born and raised in Maseru, Mohale founded LesothoTravel with a vision to share his homeland&apos;s beauty with the world.",
            speciality: "Business Strategy & Cultural Heritage"
        },
        {
            name: "Lineo Motsoeneng",
            role: "Operations Director",
            experience: "8 years",
            description: "Expert in logistics and safety management, ensuring every tour runs smoothly and safely.",
            speciality: "Operations & Safety Management"
        },
        {
            name: "Retšelisitsoe Molefe",
            role: "Guide Coordinator",
            experience: "10 years",
            description: "Veteran guide who now trains and coordinates our team of expert local guides across all regions.",
            speciality: "Guide Training & Development"
        },
        {
            name: "Mampho Ramokoena",
            role: "Cultural Consultant",
            experience: "15 years",
            description: "Cultural expert and storyteller who ensures authentic representation of Basotho traditions and customs.",
            speciality: "Cultural Education & Heritage"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header currentPage="/about" />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            About LesothoTravel
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            We are passionate locals dedicated to sharing the extraordinary beauty,
                            rich culture, and warm hospitality of the Kingdom in the Sky.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Our Story
                        </h2>
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <p className="mb-6">
                                Founded in 2017 by Mohale Thabane, a Maseru native with an unwavering love for his homeland,
                                LesothoTravel began as a small initiative to share the hidden gems of Lesotho with visitors
                                from around the world. What started as weekend trips with friends has grown into Lesotho&apos;s
                                most trusted travel platform.
                            </p>
                            <p className="mb-6">
                                Growing up in the shadows of the Maloti Mountains, Mohale spent his childhood exploring
                                every valley, learning the stories passed down through generations, and developing a deep
                                appreciation for the unique position Lesotho holds as an island nation completely surrounded
                                by South Africa, yet maintaining its distinct identity and sovereignty.
                            </p>
                            <p>
                                Today, our team of passionate local guides continues this mission, ensuring that every
                                visitor experiences not just the breathtaking landscapes, but also the warmth, wisdom,
                                and rich cultural heritage that makes Lesotho truly special.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our Impact in Numbers
                        </h2>
                        <p className="text-xl text-gray-600">
                            These numbers represent the trust our travelers place in us
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            These principles guide everything we do, from planning your adventure to
                            supporting local communities
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value) => {
                            const IconComponent = value.icon;
                            return (
                                <div key={value.title} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                                    <div className="flex-shrink-0">
                                        <IconComponent className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet Our Leadership Team
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The passionate individuals behind LesothoTravel, each bringing unique expertise
                            and deep love for Lesotho
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {team.map((member) => (
                            <div key={member.name} className="bg-white rounded-lg shadow-lg p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Users className="h-8 w-8 text-gray-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-blue-600 font-medium mb-1">
                                            {member.role}
                                        </p>
                                        <p className="text-sm text-gray-600 mb-3">
                                            {member.experience} of experience
                                        </p>
                                        <p className="text-gray-600 text-sm mb-3">
                                            {member.description}
                                        </p>
                                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            {member.speciality}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
                        <h2 className="text-3xl font-bold mb-4">
                            Our Mission
                        </h2>
                        <p className="text-xl text-blue-100 mb-6">
                            To showcase the extraordinary beauty and rich cultural heritage of Lesotho
                            through authentic, safe, and sustainable travel experiences that benefit
                            both visitors and local communities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/packages" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Start Your Journey
                            </Link>
                            <Link href="/guides" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                                Meet Our Guides
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-xl text-gray-600">
                            Ready to explore Lesotho? We&apos;d love to help plan your adventure.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-gray-600 text-sm">
                                Kingsway Road<br />
                                Maseru 100, Lesotho
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mountain className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                            <p className="text-gray-600 text-sm">
                                +266 2231 2345<br />
                                +266 5012 3456
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                            <p className="text-gray-600 text-sm">
                                info@lesothotravel.ls<br />
                                bookings@lesothotravel.ls
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
