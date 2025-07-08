import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mountain, MapPin, Thermometer, Calendar, Camera, Users } from "lucide-react";

export default function DestinationsPage() {
    const destinations = [
        {
            id: 1,
            name: "Semonkong",
            region: "Maseru District",
            elevation: "2,100m",
            climate: "Highland Temperate",
            bestTime: "Oct - Apr",
            visitors: "15,000/year",
            description: "Home to the spectacular Maletsunyane Falls, Semonkong offers adventure activities and stunning highland scenery.",
            attractions: [
                "Maletsunyane Falls (192m)",
                "Abseiling & Rock Climbing",
                "Highland Villages",
                "Traditional Crafts",
                "Mountain Hiking Trails"
            ],
            activities: ["Abseiling", "Hiking", "Photography", "Cultural Tours"],
            image: "/api/placeholder/500/300"
        },
        {
            id: 2,
            name: "Thaba-Bosiu",
            region: "Maseru District",
            elevation: "1,804m",
            climate: "Temperate",
            bestTime: "Year Round",
            visitors: "25,000/year",
            description: "The birthplace of the Basotho nation and King Moshoeshoe I's mountain fortress, rich in cultural and historical significance.",
            attractions: [
                "King Moshoeshoe's Fortress",
                "Royal Burial Grounds",
                "Cultural Heritage Center",
                "Traditional Architecture",
                "Oral History Presentations"
            ],
            activities: ["Cultural Tours", "History Walks", "Traditional Crafts", "Storytelling"],
            image: "/api/placeholder/500/300"
        },
        {
            id: 3,
            name: "Sani Pass",
            region: "Mokhotlong District",
            elevation: "2,876m",
            climate: "Alpine",
            bestTime: "Nov - Mar",
            visitors: "8,000/year",
            description: "A dramatic mountain pass offering breathtaking views and access to the highest pub in Africa with alpine flora.",
            attractions: [
                "Highest Pub in Africa",
                "Alpine Tundra Flora",
                "Drakensberg Views",
                "Border Post Experience",
                "Mountain Weather Station"
            ],
            activities: ["4x4 Driving", "High Altitude Hiking", "Photography", "Star Gazing"],
            image: "/api/placeholder/500/300"
        },
        {
            id: 4,
            name: "Ts'ehlanyane National Park",
            region: "Butha-Buthe District",
            elevation: "1,940m",
            climate: "Montane",
            bestTime: "Sep - Apr",
            visitors: "12,000/year",
            description: "Lesotho's premier nature reserve featuring diverse ecosystems, endemic flora, and pristine mountain streams.",
            attractions: [
                "Endemic Plant Species",
                "Crystal Clear Streams",
                "Diverse Bird Life",
                "Indigenous Forests",
                "Traditional Huts"
            ],
            activities: ["Nature Walks", "Bird Watching", "Camping", "Stream Fishing"],
            image: "/api/placeholder/500/300"
        },
        {
            id: 5,
            name: "Katse Dam",
            region: "Thaba-Tseka District",
            elevation: "2,075m",
            climate: "Highland Continental",
            bestTime: "Year Round",
            visitors: "20,000/year",
            description: "Africa's second-largest double-curvature arch dam, an engineering marvel within the Highland Water Project.",
            attractions: [
                "Massive Arch Dam",
                "Visitor Information Center",
                "Boat Cruises",
                "Engineering Tours",
                "Highland Scenery"
            ],
            activities: ["Dam Tours", "Boat Cruises", "Photography", "Engineering Education"],
            image: "/api/placeholder/500/300"
        },
        {
            id: 6,
            name: "Mokhotlong Highlands",
            region: "Mokhotlong District",
            elevation: "2,800m+",
            climate: "High Alpine",
            bestTime: "Nov - Mar",
            visitors: "5,000/year",
            description: "Remote highland region offering authentic Basotho culture, traditional herding communities, and pristine wilderness.",
            attractions: [
                "Traditional Herding Culture",
                "Remote Highland Villages",
                "Alpine Grasslands",
                "Shepherds' Huts",
                "Ancient Rock Art"
            ],
            activities: ["Pony Trekking", "Cultural Immersion", "Wilderness Camping", "Traditional Crafts"],
            image: "/api/placeholder/500/300"
        }
    ];

    const regions = [
        "All Regions",
        "Maseru District",
        "Mokhotlong District",
        "Butha-Buthe District",
        "Thaba-Tseka District"
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header currentPage="/destinations" />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Explore Lesotho Destinations
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            From towering waterfalls to ancient cultural sites, discover the diverse landscapes
                            and rich heritage that make Lesotho the &quot;Kingdom in the Sky&quot;.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {regions.map((region) => (
                            <button
                                key={region}
                                className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Destinations Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {destinations.map((destination) => (
                            <div key={destination.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                {/* Destination Image */}
                                <div className="h-64 bg-gray-200 flex items-center justify-center">
                                    <Mountain className="h-16 w-16 text-gray-400" />
                                </div>

                                {/* Destination Info */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{destination.name}</h3>
                                            <div className="flex items-center text-gray-600 mb-2">
                                                <MapPin className="h-4 w-4 mr-1" />
                                                <span className="text-sm">{destination.region}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center text-gray-600 mb-1">
                                                <Mountain className="h-4 w-4 mr-1" />
                                                <span className="text-sm">{destination.elevation}</span>
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <Users className="h-4 w-4 mr-1" />
                                                <span className="text-sm">{destination.visitors}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4">
                                        {destination.description}
                                    </p>

                                    {/* Climate & Best Time */}
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="flex items-center text-gray-600">
                                            <Thermometer className="h-4 w-4 mr-2" />
                                            <span className="text-sm">{destination.climate}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            <span className="text-sm">Best: {destination.bestTime}</span>
                                        </div>
                                    </div>

                                    {/* Main Attractions */}
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-700 mb-2">Main Attractions:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {destination.attractions.slice(0, 3).map((attraction, index) => (
                                                <span key={index} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                                                    {attraction}
                                                </span>
                                            ))}
                                            {destination.attractions.length > 3 && (
                                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                    +{destination.attractions.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Activities */}
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-700 mb-2">Popular Activities:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {destination.activities.map((activity) => (
                                                <span key={activity} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                                    {activity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2 pt-4 border-t border-gray-200">
                                        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                            View Packages
                                        </button>
                                        <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                            <Camera className="h-4 w-4 text-gray-600" />
                                        </button>
                                        <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                            <MapPin className="h-4 w-4 text-gray-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Planning Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Plan Your Lesotho Adventure
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Need help choosing the perfect destinations for your trip? Our local experts can create
                        a customized itinerary based on your interests and travel style.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/packages" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Browse Packages
                        </Link>
                        <Link href="/guides" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                            Find a Guide
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
