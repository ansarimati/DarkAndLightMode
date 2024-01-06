import { createContext, useContext, useEffect, useState } from "react";

//  creating context
export const ThemeContext = createContext();

// using context
export const useTheme = () => {
    return useContext(ThemeContext);
}


// creating context provider
const ThemeProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode((prevState) => !prevState)
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [isDarkMode])

    const theme = isDarkMode ? "dark" : "light";

    return (
        <ThemeContext.Provider value={{theme, toggleMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;