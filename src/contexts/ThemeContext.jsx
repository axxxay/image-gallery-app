import { useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(false)
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider};