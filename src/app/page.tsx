import UserCard from './components/UserCard';

async function fetchUser() {
    const res = await fetch('https://randomuser.me/api/');
    
    if (!res.ok) {
        console.error(`Failed to fetch user: ${res.status}`);
        throw new Error(`Failed to fetch user data: ${res.status}`);
    }

    try {
        const data = await res.json();
        return data.results[0];
    } catch (error) {
        console.error("Error parsing JSON", error);
        throw new Error("Failed to parse user data.");
    }
}

export default async function Home() {
    const user = await fetchUser();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <UserCard user={user} />
        </div>
    );
}
