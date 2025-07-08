import Link from "next/link";
import { Mountain } from "lucide-react";

interface HeaderProps {
    currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
    const navigation = [
        { name: "Packages", href: "/packages" },
        { name: "Tour Guides", href: "/guides" },
        { name: "Destinations", href: "/destinations" },
        { name: "About", href: "/about" },
    ];

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                    <div className="flex items-center space-x-2">
                        <Mountain className="h-8 w-8 text-blue-600" />
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            LesothoTravel
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`${currentPage === item.href
                                        ? "text-blue-600 font-medium"
                                        : "text-gray-700 hover:text-blue-600"
                                    } transition-colors`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
