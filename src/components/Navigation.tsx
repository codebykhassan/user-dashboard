import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="text-xl font-bold text-gray-900">
                            User Dashboard
                        </Link>
                        <div className="flex space-x-4">
                            <Link
                                href="/users"
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Users
                            </Link>
                            <Link
                                href="/users/create"
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Create User
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}