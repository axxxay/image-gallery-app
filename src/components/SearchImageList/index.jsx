import {MdOutlineArrowForwardIos} from 'react-icons/md'
import ImageItem from "../ImageItem"
import { SearchContext } from '../../contexts/SearchContext'
import { useContext } from 'react'
import './style.css'
import { ThemeContext } from '../../contexts/ThemeContext'


const SearchImageList = () => {
    const { isLoading, searchImagesList, searchTerm } = useContext(SearchContext);
    const {theme} = useContext(ThemeContext)
    const {results} = searchImagesList;

    return (
        <>
            <h1 className={`${theme && 'search-image-heading-dark'} search-image-heading`}>{searchTerm}</h1>
            <div className="recommandation-con">
                <ul className="search-recommandation-list">
                    <li className={`${theme && 'recommandation-dark'} recommandation`}>Elephants</li>
                    <li className={`${theme && 'recommandation-dark'} recommandation`}>Tigers</li>
                    <li className={`${theme && 'recommandation-dark'} recommandation`}>Birds</li>
                    <li className={`${theme && 'recommandation-dark'} recommandation`}>Mammals</li>
                    <li className={`${theme && 'recommandation-dark'} recommandation`}>Nature</li>
                    <li className={`${theme && 'recommandation-dark'} recommandation`}>Wallpaper</li>
                    <li className={`${theme && 'recommandation-dark'} recommandation`}>Brown</li>
                    <li className={`${theme && 'recommandation-dark'} recommandation`}>Background</li>
                    <li className={`${theme && 'recommandation-dark'} recommandation`}>Waterfall</li>
                </ul>
                <MdOutlineArrowForwardIos className={`${theme && 'recommandation-dark'} arrow-icon`} />
            </div>
            <ul className="image-list-container">
                {
                    isLoading ?
                    (<div className={`${theme && 'loading-container-dark'} loading-container`}>
                        <img src="/loading-image.gif" alt="loading" className="loading-image" />
                        <h1 className={`${theme && 'loading-text-dark'} loading-text`}>Loading some awesome Images...</h1>
                    </div>) 
                    :
                    !isLoading && results.map(eachItem => <ImageItem key={eachItem.id} imageItem={eachItem} />)
                }
            </ul>
        </>
    )
}

export default SearchImageList