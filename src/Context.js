import React, {createContext, useContext, useState} from 'react';

/*
interface Context {
    queryGoogle?: (url:string)=>void, 
    queryResults?: any[], 
    isLoading?: boolean, 
    searchTerm?: string, 
    setSearchTerm?: (term:string)=>void
}

*/






const StateContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1/search";

export default function StateContextProvider({children}){
    const [queryResults, setQueryResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    async function queryGoogle (url){
        setIsLoading(true);
        try{
            const res = await fetch(`${baseUrl}/${url}`,{
                "method": "GET",
                "headers": {
                    "x-user-agent": "desktop",
                    "x-proxy-location": "US",
                    "x-rapidapi-host": "google-search3.p.rapidapi.com",
                    "x-rapidapi-key": "685b050cb7msh5e89fb0e50cc7b1p19b811jsn5db468c0f762"
                }
            });

            const data = await res.json();
            setQueryResults(data);
        }
        catch(err){
            setQueryResults("error")
        }
    }

    return(
        <StateContext.Provider 
            value={
                {
                    queryGoogle,
                    queryResults, 
                    isLoading, 
                    searchTerm, 
                    setSearchTerm
                }
            }
        >
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);



const darkModeContext = createContext();

export function DarkModeContextProvider({children}){
    const [darkMode, useDarkMode] = useState(true);

    return (
        <darkModeContext.Provider
            value = {{darkMode, useDarkMode}}
        >
            {children}
        </darkModeContext.Provider>
    )
}

export const useDarkModeContext = ()=>useContext(darkModeContext);

