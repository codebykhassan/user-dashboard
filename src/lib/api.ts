import { User, CreateUserData } from '@/types/user';

const API_BASE = 'https://jsonplaceholder.typicode.com';

export async function getUsers(): Promise<User[]> {
    try {
        const response = await fetch(`${API_BASE}/users`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch users: ${response.status} ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to load users');
    }
}

export async function getUser(id: string): Promise<User> {
    try {
        const response = await fetch(`${API_BASE}/users/${id}`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`User with ID ${id} not found.`);
            }
            throw new Error(`Failed to fetch user: ${response.status} ${response.statusText}`);
        }

        const user = await response.json();

        
        if (!user || !user.id) {
            throw new Error(`User with ID ${id} not found.`);
        }

        return user;
    } catch (error) {
        console.error('Error fetching user:', error);

        
        if (error instanceof Error && error.message.includes('not found')) {
            throw error;
        }

        throw new Error(`Failed to load user with ID ${id}`);
    }
}

export async function createUser(userData: CreateUserData): Promise<User> {
    try {
        const response = await fetch(`${API_BASE}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error(`Failed to create user: ${response.status} ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user');
    }
}