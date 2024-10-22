import React, { useCallback, useMemo } from 'react';
import './layout.css'
import Section from '../Section/Column';
import { Ticket, User } from '../../interfaces';

function Layout({ gridData, grouping, userIdToData }: { gridData: Record<string, Ticket[]>, grouping: string, userIdToData: Record<string, User> }) {
    const keys: string[] = useMemo(() => Object.keys(gridData), [gridData]);

    return (
        <div className='grid'>
            {keys.map((k: string) => <Section key={k} tickets={gridData[k] as Ticket[]} grouping={grouping} groupBy={k} userIdToData={userIdToData} />)}
        </div>
    );
}

export default Layout;
