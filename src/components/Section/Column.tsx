import React, { useMemo } from 'react';
import Card from '../Card';
import "./column.css";
import { GrAdd } from 'react-icons/gr';
import { LuMoreHorizontal } from 'react-icons/lu';
import { Ticket, User } from '../../interfaces';
import { getPriorityIcon, getStatusIcon } from '../../utils/helper';
import UserIcon from '../UserIcon';

function Section({ tickets, grouping, groupBy, userIdToData }: { tickets: Ticket[], grouping: string, groupBy: string, userIdToData: Record<string, User> }) {

    const title = useMemo(() => {
        if (grouping === "status") return groupBy;
        if (grouping === "priority") return groupBy;
        if (grouping === "user") {
            // Guard check: ensure userIdToData[groupBy] exists
            const user = userIdToData[groupBy];
            return user ? user.name : "Unknown User";  // Return a fallback string if user is undefined
        }
    }, [grouping, groupBy, userIdToData]);

    const icon = useMemo(() => {
        if (grouping === "status") return getStatusIcon(groupBy);
        if (grouping === "priority") return getPriorityIcon(groupBy);
        if (grouping === "user") {
            // Guard check: ensure userIdToData[groupBy] exists
            const user = userIdToData[groupBy];
            return user ? <UserIcon name={user.name} available={user.available} /> : null;  // Only show icon if user exists
        }
    }, [grouping, groupBy, userIdToData]);

    return (
        <div className='column'>
            <div className='column-header'>
                <div className='column-header-left-container'>
                    {icon}
                    <div className='column-title'>
                        {title}
                        <span className='count'>{tickets.length}</span>
                    </div>
                </div>
                <div className='column-header-right-container'>
                    <GrAdd color="#797d84" size={12} />
                    <LuMoreHorizontal color="#797d84" size={14} />
                </div>
            </div>
            <div className='cards-container'>
                {tickets.map((ticket: Ticket) => (
                    <Card
                        key={ticket.id}
                        ticket={ticket}
                        userData={userIdToData[ticket.userId] || { id: "", name: "Unknown User", available: false }} // Provide fallback userData if undefined
                        hideStatusIcon={grouping === "status"}
                        hideProfileIcon={grouping === "user"}
                        hidePriorityIcon={grouping === "priority"} // Assuming you want to hide priority icon for priority grouping
                    />
                ))}
            </div>
        </div>
    );
}

export default Section;
