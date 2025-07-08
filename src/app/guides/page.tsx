import Link from "next/link";
import { Mountain, MapPin, Users, Star, Phone, Mail, Calendar, Award } from "lucide-react";

export default function GuidesPage() {
    const allGuides = [
        {
            id: 1,
            name: "Thabo Mofolo",
            speciality: "Mountain Adventures",
            rating: 4.9,
            tours: 127,
            experience: "8 years",
            languages: ["Sesotho", "English", "Afrikaans"],
            phone: "+266 5012 3456",
            email: "thabo@lesothotravel.ls",
            location: "Mokhotlong",
            description: "Expert mountaineer and adventure guide specializing in high-altitude treks and rock climbing expeditions across the Drakensberg mountains.",
            expertise: ["Mountain Climbing", "High Altitude Trekking", "Rock Climbing", "Wilderness Survival"],
            image: "/api/placeholder/200/200"
        },
        {
            id: 2,
            name: "Mamello Thabane",
            speciality: "Cultural Tours",
            rating: 4.8,
            tours: 98,
            experience: "6 years",
            languages: ["Sesotho", "English", "Zulu"],
            phone: "+266 5123 4567",
            email: "mamello@lesothotravel.ls",
            location: "Maseru",
            description: "Passionate storyteller and cultural expert who brings Basotho history and traditions to life through immersive cultural experiences.",
            expertise: ["Basotho Culture", "Historical Sites", "Traditional Crafts", "Local Cuisine"],
            image: "/api/placeholder/200/200"
        },
        {
            id: 3,
            name: "Lebohang Mokhele",
            speciality: "Photography Tours",
            rating: 4.7,
            tours: 82,
            experience: "5 years",
            languages: ["Sesotho", "English"],
            phone: "+266 5234 5678",
            email: "lebohang@lesothotravel.ls",
            location: "Thaba-Tseka",
            description: "Professional photographer and guide who knows all the best spots for capturing Lesotho&apos;s stunning landscapes and wildlife.",
            expertise: ["Landscape Photography", "Wildlife Photography", "Sunrise/Sunset Tours", "Photo Editing Workshops"],
            image: "/api/placeholder/200/200"
        },
        {
            id: 4,
            name: "Palesa Sekhobe",
            speciality: "Horseback Adventures",
            rating: 4.9,
            tours: 156,
            experience: "10 years",
            languages: ["Sesotho", "English", "French"],
            phone: "+266 5345 6789",
            email: "palesa@lesothotravel.ls",
            location: "Semonkong",
            description: "Master horsewoman who offers authentic Basotho pony trekking experiences through the most scenic routes in the highlands.",
            expertise: ["Horseback Riding", "Pony Trekking", "Highland Routes", "Equestrian Safety"],
            image: "/api/placeholder/200/200"
        },
        {
            id: 5,
            name: "Tšepo Ramakatsa",
            speciality: "Bird Watching",
            rating: 4.6,
            tours: 73,
            experience: "4 years",
            languages: ["Sesotho", "English"],
            phone: "+266 5456 7890",
            email: "tsepo@lesothotravel.ls",
            location: "Butha-Buthe",
            description: "Ornithologist and nature enthusiast specializing in Lesotho&apos;s unique high-altitude bird species and wetland ecosystems.",
            expertise: ["Bird Identification", "Wetland Ecosystems", "Nature Conservation", "Endemic Species"],
            image: "/api/placeholder/200/200"
        },
        {
            id: 6,
            name: "Nthabiseng Moloi",
            speciality: "Family Adventures",
            rating: 4.8,
            tours: 112,
            experience: "7 years",
            languages: ["Sesotho", "English", "Portuguese"],
            phone: "+266 5567 8901",
            email: "nthabiseng@lesothotravel.ls",
            location: "Mafeteng",
            description: "Family-friendly guide who creates memorable experiences for visitors of all ages, specializing in safe and educational tours.",
            expertise: ["Family Tours", "Educational Activities", "Child Safety", "Interactive Learning"],
            image: "/api/placeholder/200/200"
        }
    ];

    const specialities = [
        "All Specialities",
        "Mountain Adventures",
        "Cultural Tours",
        "Photography Tours",
        "Horseback Adventures",
        "Bird Watching",
        "Family Adventures"
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center space-x-2">
                            <Mountain className="h-8 w-8 text-blue-600" />
                            <Link href="/" className="text-2xl font-bold text-gray-900">LesothoTravel</Link>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <Link href="/packages" className="text-gray-700 hover:text-blue-600">Packages</Link>
                            <Link href="/guides" className="text-blue-600 font-medium">Tour Guides</Link>
                            <Link href="/destinations" className="text-gray-700 hover:text-blue-600">Destinations</Link>
                            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Meet Our Expert Tour Guides
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Our local guides are passionate experts who will share their deep knowledge of Lesotho&apos;s culture,
                            history, and natural wonders to make your journey unforgettable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {specialities.map((speciality) => (
                            <button
                                key={speciality}
                                className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                            >
                                {speciality}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guides Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allGuides.map((guide) => (
                            <div key={guide.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                {/* Guide Image */}
                                <div className="h-64 bg-gray-200 flex items-center justify-center">
                                    <Users className="h-16 w-16 text-gray-400" />
                                </div>

                                {/* Guide Info */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold text-gray-900">{guide.name}</h3>
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                            <span className="ml-1 text-sm font-medium text-gray-700">{guide.rating}</span>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            {guide.speciality}
                                        </span>
                                    </div>

                                    <div className="flex items-center text-gray-600 mb-2">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        <span className="text-sm">{guide.location}</span>
                                    </div>

                                    <div className="flex items-center text-gray-600 mb-2">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        <span className="text-sm">{guide.experience} experience</span>
                                    </div>

                                    <div className="flex items-center text-gray-600 mb-4">
                                        <Award className="h-4 w-4 mr-2" />
                                        <span className="text-sm">{guide.tours} tours completed</span>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {guide.description}
                                    </p>

                                    {/* Languages */}
                                    <div className="mb-4">
                                        <p className="text-xs font-medium text-gray-700 mb-1">Languages:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {guide.languages.map((lang) => (
                                                <span key={lang} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                                    {lang}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Expertise */}
                                    <div className="mb-4">
                                        <p className="text-xs font-medium text-gray-700 mb-1">Expertise:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {guide.expertise.slice(0, 2).map((skill) => (
                                                <span key={skill} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                                    {skill}
                                                </span>
                                            ))}
                                            {guide.expertise.length > 2 && (
                                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                    +{guide.expertise.length - 2} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Contact Actions */}
                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                            View Profile
                                        </button>
                                        <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                            <Phone className="h-4 w-4 text-gray-600" />
                                        </button>
                                        <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                            <Mail className="h-4 w-4 text-gray-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Ready to Explore Lesotho?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Book a tour with one of our expert guides and discover the magic of the Kingdom in the Sky
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/packages" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Browse Packages
                        </Link>
                        <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Mountain className="h-6 w-6" />
                                <span className="text-xl font-bold">LesothoTravel</span>
                            </div>
                            <p className="text-gray-400">
                                Your gateway to discovering the beautiful Kingdom of Lesotho
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/packages" className="hover:text-white">Travel Packages</Link></li>
                                <li><Link href="/guides" className="hover:text-white">Tour Guides</Link></li>
                                <li><Link href="/destinations" className="hover:text-white">Destinations</Link></li>
                                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Phone: +266 2231 2345</li>
                                <li>Email: info@lesothotravel.ls</li>
                                <li>Address: Maseru, Lesotho</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 LesothoTravel. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
