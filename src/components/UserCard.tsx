import Link from 'next/link';
import { User } from '@/types/user';
import Card from './ui/Card';
import { Mail, Phone, Globe } from 'lucide-react';

interface UserCardProps {
    user: User;
}

export default function UserCard({ user }: UserCardProps) {
    return (
        <Card className="hover:shadow-lg transition-shadow">
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-600">@{user.username}</p>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span>{user.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>{user.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Globe className="h-4 w-4" />
                        <span>{user.website}</span>
                    </div>
                </div>

                <div className="pt-4">
                    <Link
                        href={`/users/${user.id}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                        View Details →
                    </Link>
                </div>
            </div>
        </Card>
    );
}