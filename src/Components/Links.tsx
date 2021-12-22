import React from 'react';
import { NavLink } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const links = [
  { url: 'search', text: '🔎 All' },
  { url: 'news', text: '📰 News' },
  { url: 'images', text: '📸 Images' },
  { url: 'videos', text: '📺 Videos' },
];

export default function Links() {
    const location = useLocation();
    return(
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({ url, text }, index) => (
            <NavLink key = {index+text} to={url} className={`${location.pathname === '/'+url && "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"}`}>{text}</NavLink>
            ))}
        </div>
    )
};