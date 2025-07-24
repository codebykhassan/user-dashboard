'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUser } from '@/lib/api';
import { CreateUserData } from '@/types/user';
import Button from './ui/Button';
import Input from './ui/Input';
import Card from './ui/Card';

export default function UserForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<CreateUserData>({
        name: '',
        email: '',
        phone: '',
        username: '',
        website: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await createUser(formData);
            alert('User created successfully!');
            router.push('/users');
        } catch (error) {
            console.error(error); 
            alert('Failed to create user');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Card className="max-w-md mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Create New User</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <Input
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <Input
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <Input
                    label="Website (optional)"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                />

                <div className="flex space-x-4 pt-4">
                    <Button type="submit" disabled={loading}>
                        {loading ? 'Creating...' : 'Create User'}
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => router.back()}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </Card>
    );
}