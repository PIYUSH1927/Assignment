import React from 'react';


export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": return <img src="/icons/No-priority.svg" alt="No Priority" width={14} height={14} />
        case "Low": return <img src="/icons/Img - Low Priority.svg" alt="Low Priority" width={14} height={14} />
        case "Medium": return <img src="/icons/Img - Medium Priority.svg" alt="Medium Priority" width={14} height={14} />
        case "High": return <img src="/icons/Img - High Priority.svg" alt="High Priority" width={14} height={14} />
        case "Urgent": return <img src="/icons/SVG - Urgent Priority colour.svg" alt="Urgent Priority" width={14} height={14} />
        default: return <img src="/icons/SVG - Urgent Priority grey.svg" alt="Urgent Priority Grey" width={14} height={14} />
    }
}


export const getStatusIcon = (status: string) => {
    switch (status) {
        case "Backlog": return <img src="/icons/Backlog.svg" alt="Backlog" width={16} height={16} />
        case "Todo": return <img src="/icons/To-do.svg" alt="To-do" width={16} height={16} />
        case "In progress": return <img src="/icons/in-progress.svg" alt="In Progress" width={16} height={16} />
        case "Done": return <img src="/icons/Done.svg" alt="Done" width={16} height={16} />
        case "Canceled": return <img src="/icons/Cancelled.svg" alt="Cancelled" width={16} height={16} />
        default: return <img src="/icons/Cancelled.svg" alt="Cancelled" width={16} height={16} />
    }
}
