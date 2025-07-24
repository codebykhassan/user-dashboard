import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4">User Management Dashboard</h1>
      <p className="mb-4" style={{ color: '#666', maxWidth: '600px', margin: '0 auto 2rem' }}>
        A simple and clean dashboard to manage users. View user profiles,
        create new users, and explore detailed information.
      </p>

      <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="card">
          <h2 className="text-large mb-2">View Users</h2>
          <p className="mb-4" style={{ color: '#666' }}>
            Browse through all users, view their basic information, and access detailed profiles.
          </p>
          <Link href="/users" className="btn btn-primary">View All Users</Link>
        </div>

        <div className="card">
          <h2 className="text-large mb-2">Create User</h2>
          <p className="mb-4" style={{ color: '#666' }}>
            Add new users to the system with their basic information and contact details.
          </p>
          <Link href="/users/create" className="btn btn-outline">Create New User</Link>
        </div>
      </div>
    </div>
  );
}