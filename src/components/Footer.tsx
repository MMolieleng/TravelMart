import Link from "next/link";
import { Mountain } from "lucide-react";

export default function Footer() {
    return (
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
                            <li><Link href="/packages" className="hover:text-white transition-colors">Travel Packages</Link></li>
                            <li><Link href="/guides" className="hover:text-white transition-colors">Tour Guides</Link></li>
                            <li><Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
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
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 LesothoTravel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
