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
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export default function StateContextProvider({children}){
    const [queryResults, setQueryResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    async function queryGoogle (url){
        setIsLoading(true);
        console.log(url);
        try{
            const res = await fetch(`${baseUrl}${url}`,{
                "method": "GET",
                "headers": {
                    "x-user-agent": "desktop",
                    "x-proxy-location": "US",
                    "x-rapidapi-host": "google-search3.p.rapidapi.com",
                    'x-rapidapi-key': '82456b7515mshddd2a6360a407b2p1d3726jsn55fa21a1fc37'
                }
            });

            const data = await res.json();
            console.log(`${baseUrl}${url}`);
            console.log(data);
            setQueryResults(data);
            
        }
        catch(err){
            console.log(err, 'an error was called')
            setQueryResults("error")
        }
        setIsLoading(false);
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
    const [darkMode, setDarkMode] = useState(true);

    return (
        <darkModeContext.Provider
            value = {{darkMode, setDarkMode}}
        >
            {children}
        </darkModeContext.Provider>
    )
}

export const useDarkModeContext = ()=>useContext(darkModeContext);

