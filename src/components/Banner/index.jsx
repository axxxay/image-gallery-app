import {BiSearch} from 'react-icons/bi'
import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { useState } from 'react';
import SearchSuggestion from '../SearchSuggestion';
import './style.css'


const Banner = () => {
    const { searchTerm, setSearchTerm, setIsSearched, setSearchImagesList, setIsLoading } = useContext(SearchContext);

    const [openSuggestionBox, setOpenSuggestionBox] = useState(false)


    const toggleSuggestionBox = () => {
      setOpenSuggestionBox(!openSuggestionBox)
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
    }

    const SearchImagesApi = async (event) => {
        if (searchTerm !== "" && event.key === 'Enter') {
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

    return (
        <div className='banner-container'>
            <h1 className="banner-heading">Download High Quality Images by creators</h1>
            <p className="banner-desc">Over 2.4 million+ stock Images by our talented community</p>
            <div className='banner-input-con'>
                <BiSearch className='banner-search-icon' />
                <input type='search' className='banner-input-box' value={searchTerm} onClick={toggleSuggestionBox} onKeyDown={SearchImagesApi} onChange={handleInputChange} placeholder='Search high resolution Images, categories, wallpapers' />
            </div>
            { openSuggestionBox && <ul className="banner-suggestion-list">
            {searchResults.map(eachSuggestion => (
            <SearchSuggestion
                suggestionItem={eachSuggestion}
                key={eachSuggestion.id}
                onArrowClicked={onArrowClicked}
            />
            ))}
        </ul>}
        </div>
    )
}

export default Banner