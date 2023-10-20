import { useState, createContext } from "react";

const SearchContext = createContext();

const SearchProvider = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearched, setIsSearched] = useState(false);
    const [searchImagesList, setSearchImagesList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm, isSearched, setIsSearched, searchImagesList, setSearchImagesList, setIsLoading, isLoading }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export {SearchContext, SearchProvider};