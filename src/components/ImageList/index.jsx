import { useState, useEffect, useContext } from "react"
import ImageItem from "../ImageItem"
import './style.css'
import { ThemeContext } from "../../contexts/ThemeContext"


const ImageList = () => {
    const {theme} = useContext(ThemeContext)
    const [imagesList, setImagesList] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const getImagesApi = async () => {
            setLoading(false)
            const apiUrl = "https://api.unsplash.com/photos?per_page=50"
            const accessKey = "SR7yDpSzMuVuTllsThtgGi8gJVwLHlYItgqAII7GLEk"
            const options = {
                headers: {
                  Authorization: `Client-ID ${accessKey}`
                }
              }
            const response = await fetch(apiUrl, options)
            
            if (response.ok === true) {
                const data = await response.json()
                setImagesList(data);
                setLoading(true)
            }
        }
        getImagesApi()
    }, [])

    return (
        <ul className={`${theme && 'image-list-container-dark'} image-list-container`}>
            {
                !loading 
                ? 
                (<div className={`${theme && 'loading-container-dark'} loading-container`}>
                    <img src="/loading-image.gif" alt="loading" className="loading-image" />
                    <h1 className={`${theme && 'loading-text-dark'} loading-text`}>Loading some awesome Images...</h1>
                </div>) 
                :
                loading && imagesList.map(eachItem => <ImageItem key={eachItem.id} imageItem={eachItem} />)
            }
        </ul>
    )
}

export default ImageList