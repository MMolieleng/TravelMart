import Image from "next/image";
import Link from "next/link";
import { Mountain, MapPin, Users, Star } from "lucide-react";

export default function Home() {
  const featuredPackages = [
    {
      id: 1,
      name: "Maletsunyane Falls Adventure",
      location: "Semonkong",
      price: "M850",
      duration: "2 days",
      rating: 4.8,
      image: "/api/placeholder/400/300",
      description: "Experience the breathtaking 192m waterfall and adventure activities"
    },
    {
      id: 2,
      name: "Thaba-Bosiu Cultural Tour",
      location: "Maseru",
      price: "M450",
      duration: "1 day",
      rating: 4.6,
      image: "/api/placeholder/400/300",
      description: "Explore the birthplace of the Basotho nation and King Moshoeshoe's fortress"
    },
    {
      id: 3,
      name: "Sani Pass Mountain Trek",
      location: "Mokhotlong",
      price: "M1200",
      duration: "3 days",
      rating: 4.9,
      image: "/api/placeholder/400/300",
      description: "Conquer the dramatic mountain pass to the highest pub in Africa"
    }
  ];

  const topGuides = [
    {
      id: 1,
      name: "Thabo Mofolo",
      speciality: "Mountain Adventures",
      rating: 4.9,
      tours: 127,
      image: "/api/placeholder/150/150"
    },
    {
      id: 2,
      name: "Mamello Thabane",
      speciality: "Cultural Tours",
      rating: 4.8,
      tours: 98,
      image: "/api/placeholder/150/150"
    },
    {
      id: 3,
      name: "Lebohang Mokhele",
      speciality: "Photography Tours",
      rating: 4.7,
      tours: 82,
      image: "/api/placeholder/150/150"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">LesothoTravel</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/packages" className="text-gray-700 hover:text-blue-600">Packages</Link>
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
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover the Kingdom <br />
              <span className="text-yellow-300">in the Sky</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Experience Lesotho's breathtaking landscapes and rich culture with our expert local guides
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages" className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Explore Packages
              </Link>
              <Link href="/guides" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Meet Our Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Travel Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Carefully curated experiences that showcase the best of Lesotho's natural beauty and cultural heritage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Mountain className="h-16 w-16 text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{pkg.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                      <span className="text-gray-500 text-sm">/{pkg.duration}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Tour Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Tour Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Local experts who know every hidden gem and story that makes Lesotho special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topGuides.map((guide) => (
              <div key={guide.id} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{guide.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{guide.speciality}</p>
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{guide.rating}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{guide.tours} tours</span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Profile
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/guides" className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              See All Tour Guides
            </Link>
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
