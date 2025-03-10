"use client";

import { useState } from "react";

type User = {
    name: { first: string; last: string };
    email: string;
    phone: string;
    location: { country: string; city: string };
    dob: { date: string };
    login: { password: string };
    picture: { large: string };
};

type UserCardProps = {
    user: User;
};

export default function UserCard({ user }: UserCardProps) {
    // Define only these as valid keys.
    const [selectedInfo, setSelectedInfo] = useState<"name" | "email" | "dob" | "location" | "phone" | "password">("name");

    const infoMap = {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        dob: new Date(user.dob.date).toLocaleDateString(),
        location: `${user.location.city}, ${user.location.country}`,
        phone: user.phone,
        password: user.login.password,
    };

    return (
        <div style={{
            width: '400px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px', textAlign: 'center' }}>
                <img 
                    src={user.picture.large} 
                    alt="User Picture" 
                    style={{
                        borderRadius: '50%',
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                        border: '4px solid white',
                        marginTop: '-50px'
                    }} 
                />
            </div>

            <div style={{ textAlign: 'center', padding: '20px' }}>
                <p style={{ color: '#aaa', margin: '5px 0' }}>Hi, My {selectedInfo === 'name' ? 'name' : 'information'} is</p>
                <h2 style={{ margin: '5px 0', fontSize: '24px', fontWeight: 'bold' }}>
                    {infoMap[selectedInfo] ?? "Unknown"}
                </h2>
            </div>

            {/* Icons Section */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                padding: '15px',
                borderTop: '1px solid #eee'
            }}>
                <Icon src="user_3161848.png" active={selectedInfo === "name"} onClick={() => setSelectedInfo("name")} />
                <Icon src="email_2099199.png" active={selectedInfo === "email"} onClick={() => setSelectedInfo("email")} />
                <Icon src="calendar_747310.png" active={selectedInfo === "dob"} onClick={() => setSelectedInfo("dob")} />
                <Icon src="location_9796154.png" active={selectedInfo === "location"} onClick={() => setSelectedInfo("location")} />
                <Icon src="customer-service_1427800.png" active={selectedInfo === "phone"} onClick={() => setSelectedInfo("phone")} />
                <Icon src="lock_3917642.png" active={selectedInfo === "password"} onClick={() => setSelectedInfo("password")} />
            </div>
        </div>
    );
}

type IconProps = {
    src: string;
    active: boolean;
    onClick: () => void;
};

function Icon({ src, active, onClick }: IconProps) {
    return (
        <img 
            src={src} 
            alt="icon" 
            onClick={onClick}
            style={{
                width: '30px',
                height: '30px',
                opacity: active ? 1 : 0.3,
                cursor: 'pointer'
            }} 
        />
    );
}