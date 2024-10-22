import React from 'react';
import './usericon.css';

const colors = [
    "#4CAF50", // Green
    "#FF5722", // Orange
    "#9C27B0", // Purple
    "#E91E63", // Pink
    "#FF9800", // Amber
    "#607D8B", // Grey
];

function UserIcon({ name, available }: { name: string, available: boolean }) {
    const text = React.useMemo(() => {
        return name.split(" ").map((item: string) => item[0]).join("");
    }, [name]);

  
    const getBackgroundColor = (name: string) => {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
 
        const colorIndex = Math.abs(hash) % colors.length;
        return colors[colorIndex];
    };

    const backgroundColor = getBackgroundColor(name);

    return (
        <div className='usericon-container' style={{ backgroundColor }}>
            <div className='usericon-text'>{text}</div>
            <div className={`user-status ${available ? "available" : ""}`}></div>
        </div>
    );
}

export default UserIcon;