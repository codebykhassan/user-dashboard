'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUser } from '@/lib/api';
import { CreateUserData } from '@/types/user';

export default function CreateUserPage() {
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
            console.error('Error creating user:', error);
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
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div className="text-center mb-4">
                <h1 className="text-xl mb-2">Create New User</h1>
                <p style={{ color: '#666' }}>
                    Fill out the form below to add a new user to the system.
                </p>
            </div>

            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Website (optional)</label>
                        <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="flex gap-2 mt-4">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                        >
                            {loading ? 'Creating...' : 'Create User'}
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline"
                            onClick={() => router.back()}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}