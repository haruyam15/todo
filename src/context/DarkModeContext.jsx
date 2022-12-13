import { createContext, useState, useEffect, useContext } from "react";

const DarkModeContext = createContext();

export default function DarkModeProvider({children}){

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) ? JSON.parse(localStorage.getItem('darkMode')) : false);

    const darkModeToggle = () => {
        setDarkMode((mode)=> !mode);
    }

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        if(darkMode){
            document.documentElement.classList.add('darkMode')
        }else{
            document.documentElement.classList.remove('darkMode')
        }
        
    }, [darkMode]);


    const data = {
        darkMode,
        darkModeToggle
    };


    return(
        <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
    )
};


export const useDarkMode = () => useContext(DarkModeContext);
