import {BiSearch} from 'react-icons/bi'
import {RxHamburgerMenu} from 'react-icons/rx'
import { useContext, useState } from 'react';
import Switch from '@mui/material/Switch';
import { SearchContext } from '../../contexts/SearchContext';
import SearchSuggestion from '../SearchSuggestion';
import { ThemeContext } from '../../contexts/ThemeContext';
import './style.css'


const NavBar = () => {
    const { searchTerm, setSearchTerm, setIsSearched, setSearchImagesList, setIsLoading } = useContext(SearchContext);
    const { theme, setTheme } = useContext(ThemeContext)
    const [openSuggestionBox, setOpenSuggestionBox] = useState(false)

    const toggleSuggestionBox = () => {
      setOpenSuggestionBox(!openSuggestionBox)
    }

    const handleTheme = () => {
      setTheme(!theme)
    }

    const suggestionsList = [
        {id: 1, suggestion: 'Animals in the wild'},
        {id: 2, suggestion: 'Animals up close'},
        {id: 3, suggestion: 'Animal portraits'},
        {id: 4, suggestion: 'Animals in zoo'},
        {id: 5, suggestion: 'Cruise ship in ocean'},
        {id: 6, suggestion: 'Air Ballons at night'},
    ]
    
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const onArrowClicked = value => {
      setSearchTerm(value)
      SearchImagesApi()
    }

    const SearchImagesApi = async () => {
        if (searchTerm !== "") {
          setIsLoading(true)
          const apiUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=50`;
          const accessKey = "SR7yDpSzMuVuTllsThtgGi8gJVwLHlYItgqAII7GLEk";
          const options = {
            headers: {
              Authorization: `Client-ID ${accessKey}`,
            },
          };
      
          try {
            const response = await fetch(apiUrl, options);
      
            if (response.ok === true) {
              const data = await response.json();
              setSearchImagesList(data);
              setIsLoading(false);
              setIsSearched(true);
            } else {
              throw new Error("Network response was not ok.");
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
      };

      const searchResults = suggestionsList.filter(eachList =>
        eachList.suggestion.toLowerCase().includes(searchTerm.toLowerCase())
      )

      const label = { inputProps: { 'aria-label': 'Color switch demo' } };

    return (
        <>
        <nav className={`${theme && 'nav-bar-dark'} nav-bar`}>
            <p className={`${theme && "nav-logo-dark"} nav-logo`} onClick={() => setIsSearched(false)}>Image Gallery</p>
            <div className={`${theme && 'nav-input-con-dark'} nav-input-con`}>
                <BiSearch className={`${theme && 'nav-search-icon-dark'} nav-search-icon`} />
                <input type='search' className={`${theme && 'nav-input-box-dark'} nav-input-box`} onClick={toggleSuggestionBox} onKeyDown={SearchImagesApi} value={searchTerm} onChange={handleInputChange} placeholder='Search Images here' />
            </div>
            <ul className='nav-items-list'>
                <li className={`${theme && 'nav-list-item-dark'} nav-list-item`}>Explore</li>
                <li className={`${theme && 'nav-list-item-dark'} nav-list-item`}>Collection</li>
                <li className={`${theme && 'nav-list-item-dark'} nav-list-item`}>Community</li>
            </ul>
            <div className='nav-theme-toggle'>
                <div className='theme-toggle-con'>
                  <label className={`${theme && 'theme-toggle-text-dark'} theme-toggle-text`} htmlFor='toggletheme' >Dark Mode</label>
                  <Switch {...label} size="small" checked={theme} onClick={handleTheme} id='toggletheme' label="some" />
                </div>
            </div>
            <div className='nav-con-mobile'>
                <BiSearch className='nav-search-icon' />
                <RxHamburgerMenu className='nav-search-icon' />
            </div>
        </nav>
        { openSuggestionBox && <ul className="suggestion-list">
          
            {searchResults.map(eachSuggestion => (
            <SearchSuggestion
                suggestionItem={eachSuggestion}
                key={eachSuggestion.id}
                onArrowClicked={onArrowClicked}
            />
            ))}
        </ul>}
        </>
    )
}

export default NavBar