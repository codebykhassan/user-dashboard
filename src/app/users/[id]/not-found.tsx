import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                User Not Found
            </h1>
            <p style={{
                color: '#666',
                marginBottom: '2rem',
                fontSize: '1.1rem'
            }}>
                The user you&apos;re looking for doesn&apos;t exist.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link href="/users" className="btn btn-primary">
                    ← Back to Users
                </Link>
                <Link href="/users/1" className="btn btn-outline">
                    View User 1
                </Link>
            </div>
        </div>
    );
}