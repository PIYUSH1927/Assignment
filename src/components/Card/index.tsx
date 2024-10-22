import React from 'react';
import './card.css';
import UserIcon from '../UserIcon';
import { Ticket, User } from '../../interfaces';
import { getPriorityIcon, getStatusIcon } from '../../utils/helper';

function Card({
  ticket,
  userData,
  hideStatusIcon,
  hideProfileIcon,
  hidePriorityIcon 
}: {
  ticket: Ticket;
  userData: User;
  hideStatusIcon: boolean;
  hideProfileIcon: boolean;
  hidePriorityIcon: boolean; 
}) {

  const priorityLabel = (() => {
    switch (ticket.priority) {
      case 0: return 'No priority';
      case 1: return 'Low';
      case 2: return 'Medium';
      case 3: return 'High';
      case 4: return 'Urgent';
      default: return ''; 
    }
  })();

  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {hideProfileIcon ? null : <UserIcon name={userData.name} available={userData.available} />}
      </div>
      <div className='middle-container'>
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
        {!hidePriorityIcon && (
          <div className='more-icon-container'>
            {getPriorityIcon(priorityLabel)}
          </div>
        )}
        {ticket.tag.map((t: string) => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'></div>
            <div className='tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
