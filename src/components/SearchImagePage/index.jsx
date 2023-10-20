import ImageList from "../ImageList"
import Banner from "../Banner"
import NavBar from "../NavBar"
import SearchImageList from "../SearchImageList"
import { SearchContext } from "../../contexts/SearchContext"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import './style.css'



const SearchImagePage = () => {
    const { isSearched } = useContext(SearchContext);
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`${theme && "main-background-dark"} main-background`}>
            <NavBar/>
            {
                isSearched ? (<SearchImageList />) : 
                (
                    <>
                    <Banner />
                    <ImageList />
                    </>
                )
            }
        </div>
    )
}

export default SearchImagePage