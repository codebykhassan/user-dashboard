import { getUser } from '@/lib/api';
import { Mail, Phone, Globe, MapPin, Building } from 'lucide-react';
import Link from 'next/link';

export default async function UserDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const user = await getUser(id);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="flex flex-between align-center mb-4">
                <div>
                    <h1 className="text-xl">{user.name}</h1>
                    <p style={{ color: '#666' }}>@{user.username}</p>
                </div>
                <Link href="/users" className="btn btn-outline">
                    ← Back to Users
                </Link>
            </div>
            <div className="grid grid-2">
                <div className="card">
                    <h2 className="text-large mb-2">Contact Information</h2>
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
                <div className="card">
                    <h2 className="text-large mb-2">Address</h2>
                    <div className="user-info">
                        <MapPin className="icon" />
                        <div>
                            <p>
                                {user.address.street}, {user.address.suite}
                            </p>
                            <p>
                                {user.address.city} {user.address.zipcode}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ gridColumn: '1 / -1' }}>
                    <h2 className="text-large mb-2">Company</h2>
                    <div className="user-info">
                        <Building className="icon" />
                        <div>
                            <p>
                                <strong>{user.company.name}</strong>
                            </p>
                            <p style={{ fontStyle: 'italic', color: '#666' }}>
                                &quot;{user.company.catchPhrase}&quot;
                            </p>
                            <p style={{ fontSize: '0.9rem', color: '#888' }}>
                                {user.company.bs}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}