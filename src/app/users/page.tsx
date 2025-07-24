import { getUsers } from '@/lib/api';
import { Mail, Phone, Globe } from 'lucide-react';
import Link from 'next/link';

export default async function UsersPage() {
    try {
        const users = await getUsers();

        return (
            <div>
                <div className="flex flex-between align-center mb-4">
                    <h1 className="text-xl">Users</h1>
                    <Link href="/users/create" className="btn btn-primary">Create New User</Link>
                </div>

                <div className="grid grid-3">
                    {users.map((user) => (
                        <div key={user.id} className="card">
                            <h3 className="text-large mb-1">{user.name}</h3>
                            <p className="mb-2" style={{ color: '#666' }}>@{user.username}</p>

                            <div style={{ marginBottom: '1rem' }}>
                                <div className="user-info">
                                    <Mail className="icon" />
                                    <span>{user.email}</span>
                                </div>
                                <div className="user-info">
                                    <Phone className="icon" />
                                    <span>{user.phone}</span>
                                </div>
                                <div className="user-info">
                                    <Globe className="icon" />
                                    <span>{user.website}</span>
                                </div>
                            </div>

                            <Link
                                href={`/users/${user.id}`}
                                className="btn btn-outline"
                                style={{ textDecoration: 'none' }}
                            >
                                View Details →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch {
        return (
            <div className="text-center">
                <h1 className="text-xl mb-4">Error Loading Users</h1>
                <p className="mb-4" style={{ color: '#666' }}>
                    Sorry, we couldn&apos;t load the users. Please try again later.
                </p>
                <Link href="/" className="btn btn-outline">Go Home</Link>
            </div>
        );
    }
}