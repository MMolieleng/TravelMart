"use client";

import Link from "next/link";
import { Mountain, MapPin, Users, Star, Clock, Camera, Calendar } from "lucide-react";
import { useState, useMemo } from "react";

export default function PackagesPage() {
    const packages = [
        {
            id: 1,
            name: "Maletsunyane Falls Adventure",
            location: "Semonkong",
            price: "M850",
            originalPrice: "M950",
            duration: "2 days",
            groupSize: "4-8 people",
            rating: 4.8,
            reviews: 124,
            difficulty: "Moderate",
            category: "Adventure",
            image: "/api/placeholder/400/300",
            description: "Experience the breathtaking 192m waterfall, one of the highest single-drop waterfalls in Southern Africa. Includes abseiling, hiking, and cultural village visits.",
            highlights: [
                "192m single-drop waterfall",
                "Abseiling adventure",
                "Local village visit",
                "Traditional Basotho lunch",
                "Professional photography"
            ],
            included: ["Guide", "Equipment", "Meals", "Transport", "Accommodation"],
            bestTime: "Oct - Apr"
        },
        {
            id: 2,
            name: "Thaba-Bosiu Cultural Heritage",
            location: "Maseru",
            price: "M450",
            originalPrice: "M500",
            duration: "1 day",
            groupSize: "2-12 people",
            rating: 4.6,
            reviews: 89,
            difficulty: "Easy",
            category: "Cultural",
            image: "/api/placeholder/400/300",
            description: "Explore the birthplace of the Basotho nation and King Moshoeshoe I's mountain fortress. Learn about Lesotho's rich history and cultural heritage.",
            highlights: [
                "Historic mountain fortress",
                "Basotho cultural center",
                "Traditional crafts workshop",
                "Oral history sessions",
                "Royal burial sites"
            ],
            included: ["Guide", "Entry fees", "Traditional lunch", "Transport"],
            bestTime: "Year round"
        },
        {
            id: 3,
            name: "Sani Pass Mountain Trek",
            location: "Mokhotlong",
            price: "M1200",
            originalPrice: "M1350",
            duration: "3 days",
            groupSize: "4-6 people",
            rating: 4.9,
            reviews: 67,
            difficulty: "Challenging",
            category: "Adventure",
            image: "/api/placeholder/400/300",
            description: "Conquer the dramatic mountain pass to reach the highest pub in Africa. Experience breathtaking alpine scenery and traditional highland culture.",
            highlights: [
                "Highest pub in Africa",
                "Alpine tundra ecosystem",
                "4x4 mountain drive",
                "Highland Basotho villages",
                "Star gazing experience"
            ],
            included: ["Guide", "4x4 Transport", "Accommodation", "All meals", "Equipment"],
            bestTime: "Nov - Mar"
        },
        {
            id: 4,
            name: "Ts'ehlanyane Nature Escape",
            location: "Butha-Buthe",
            price: "M680",
            originalPrice: "M750",
            duration: "2 days",
            groupSize: "3-10 people",
            rating: 4.7,
            reviews: 92,
            difficulty: "Easy",
            category: "Nature",
            image: "/api/placeholder/400/300",
            description: "Discover Lesotho's premier nature reserve with diverse ecosystems, endemic flora, and pristine mountain streams in this peaceful retreat.",
            highlights: [
                "Endemic plant species",
                "Crystal clear streams",
                "Bird watching",
                "Nature photography",
                "Peaceful hiking trails"
            ],
            included: ["Guide", "Park fees", "Accommodation", "Meals", "Binoculars"],
            bestTime: "Sep - Apr"
        },
        {
            id: 5,
            name: "Basotho Pony Trekking",
            location: "Mokhotlong",
            price: "M920",
            originalPrice: "M1000",
            duration: "3 days",
            groupSize: "2-8 people",
            rating: 4.8,
            reviews: 156,
            difficulty: "Moderate",
            category: "Cultural",
            image: "/api/placeholder/400/300",
            description: "Experience the traditional Basotho way of travel on sure-footed mountain ponies through spectacular highland scenery and remote villages.",
            highlights: [
                "Authentic Basotho ponies",
                "Remote highland villages",
                "Traditional herder culture",
                "Mountain passes",
                "Overnight in traditional huts"
            ],
            included: ["Guide", "Pony rental", "Riding equipment", "Accommodation", "All meals"],
            bestTime: "Oct - Apr"
        },
        {
            id: 6,
            name: "Katse Dam & Highlands",
            location: "Thaba-Tseka",
            price: "M750",
            originalPrice: "M850",
            duration: "2 days",
            groupSize: "4-12 people",
            rating: 4.5,
            reviews: 78,
            difficulty: "Easy",
            category: "Family-Friendly",
            image: "/api/placeholder/400/300",
            description: "Visit Africa's second-largest double-curvature arch dam and explore the engineering marvel of the Lesotho Highlands Water Project.",
            highlights: [
                "Second-largest arch dam in Africa",
                "Engineering marvel tour",
                "Scenic boat cruise",
                "Highland landscapes",
                "Hydroelectric facility visit"
            ],
            included: ["Guide", "Boat cruise", "Dam tour", "Transport", "Lunch"],
            bestTime: "Year round"
        }
    ];

    const categories = [
        "All Packages",
        "Adventure",
        "Cultural",
        "Nature",
        "Photography",
        "Family-Friendly"
    ];

    const durations = ["All Durations", "1 Day", "2 Days", "3+ Days"];
    const difficulties = ["All Levels", "Easy", "Moderate", "Challenging"];

    // State for filters
    const [selectedCategory, setSelectedCategory] = useState("All Packages");
    const [selectedDuration, setSelectedDuration] = useState("All Durations");
    const [selectedDifficulty, setSelectedDifficulty] = useState("All Levels");

    // Filtered packages based on selected filters
    const filteredPackages = useMemo(() => {
        return packages.filter(pkg => {
            const categoryMatch = selectedCategory === "All Packages" || pkg.category === selectedCategory;
            const durationMatch = selectedDuration === "All Durations" ||
                (selectedDuration === "1 Day" && pkg.duration === "1 day") ||
                (selectedDuration === "2 Days" && pkg.duration === "2 days") ||
                (selectedDuration === "3+ Days" && (pkg.duration === "3 days" || pkg.duration.includes("3")));
            const difficultyMatch = selectedDifficulty === "All Levels" || pkg.difficulty === selectedDifficulty;

            return categoryMatch && durationMatch && difficultyMatch;
        });
    }, [selectedCategory, selectedDuration, selectedDifficulty]);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center space-x-2">
                            <Mountain className="h-8 w-8 text-blue-600" />
                            <Link href="/" className="text-2xl font-bold text-gray-900">LesothoTravel</Link>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <Link href="/packages" className="text-blue-600 font-medium">Packages</Link>
                            <Link href="/guides" className="text-gray-700 hover:text-blue-600">Tour Guides</Link>
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
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Discover Lesotho Travel Packages
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Carefully crafted experiences that showcase the best of Lesotho's natural beauty,
                            rich culture, and adventure opportunities. From mountain treks to cultural immersions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Category Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        {/* Duration Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                            <select
                                value={selectedDuration}
                                onChange={(e) => setSelectedDuration(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                {durations.map((duration) => (
                                    <option key={duration} value={duration}>{duration}</option>
                                ))}
                            </select>
                        </div>

                        {/* Difficulty Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                            <select
                                value={selectedDifficulty}
                                onChange={(e) => setSelectedDifficulty(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                {difficulties.map((difficulty) => (
                                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <p className="text-gray-600">
                            Showing {filteredPackages.length} of {packages.length} packages
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredPackages.length > 0 ? (
                            filteredPackages.map((pkg) => (
                                <div key={pkg.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    {/* Package Image */}
                                    <div className="h-64 bg-gray-200 flex items-center justify-center relative">
                                        <Mountain className="h-16 w-16 text-gray-400" />
                                        <div className="absolute top-4 right-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${pkg.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                                                pkg.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'
                                                }`}>
                                                {pkg.difficulty}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Package Info */}
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                                                <div className="flex items-center text-gray-600 mb-2">
                                                    <MapPin className="h-4 w-4 mr-1" />
                                                    <span className="text-sm">{pkg.location}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="flex items-center">
                                                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                                    <span className="ml-1 text-sm font-medium text-gray-700">{pkg.rating}</span>
                                                    <span className="ml-1 text-sm text-gray-500">({pkg.reviews})</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                            {pkg.description}
                                        </p>

                                        {/* Package Details */}
                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div className="flex items-center text-gray-600">
                                                <Clock className="h-4 w-4 mr-2" />
                                                <span className="text-sm">{pkg.duration}</span>
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <Users className="h-4 w-4 mr-2" />
                                                <span className="text-sm">{pkg.groupSize}</span>
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <Calendar className="h-4 w-4 mr-2" />
                                                <span className="text-sm">Best: {pkg.bestTime}</span>
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <Camera className="h-4 w-4 mr-2" />
                                                <span className="text-sm">Photo included</span>
                                            </div>
                                        </div>

                                        {/* Highlights */}
                                        <div className="mb-4">
                                            <p className="text-sm font-medium text-gray-700 mb-2">Highlights:</p>
                                            <div className="flex flex-wrap gap-1">
                                                {pkg.highlights.slice(0, 3).map((highlight, index) => (
                                                    <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                                        {highlight}
                                                    </span>
                                                ))}
                                                {pkg.highlights.length > 3 && (
                                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                        +{pkg.highlights.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Pricing and Action */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                                                    {pkg.originalPrice && (
                                                        <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                                                    )}
                                                </div>
                                                <span className="text-sm text-gray-500">per person</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                                    Book Now
                                                </button>
                                                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                                    Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-2 text-center py-12">
                                <Mountain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">No packages found</h3>
                                <p className="text-gray-500">Try adjusting your filters to see more results.</p>
                            </div>
                        )}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                            Load More Packages
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Get Travel Inspiration
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Subscribe to our newsletter for the latest travel packages, tips, and exclusive offers
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Subscribe
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
