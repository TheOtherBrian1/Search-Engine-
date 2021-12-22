import React from 'react';
import { Link } from 'react-router-dom';
import {useDarkModeContext} from '../Context';

export default function Navbar(){
    const {darkMode, setDarkMode} = useDarkModeContext();

    return(
        <div className = "mb-10 p-2 px-10 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className = "flex justify-between items-center space-x-5 w-screen">
                <Link to = '/'>
                    <p className= 'text-2xl bg-purple-400 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
                        Dona
                    </p>
                </Link>
                <button 
                    className = 'text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg'
                    onClick = {()=>setDarkMode(!darkMode)}
                >
                    {
                        darkMode? 'Light 💡':'Dark 🌙'
                    }
                </button>
            </div>
        </div>
    )
}