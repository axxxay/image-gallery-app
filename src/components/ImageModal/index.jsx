import {SlLike} from 'react-icons/sl'
import 'reactjs-popup/dist/index.css'
import {AiOutlineShareAlt, AiOutlineInstagram, AiOutlineInfoCircle} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import './style.css'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'


const ImageModal = ({imageItem}) => {
    const {theme} = useContext(ThemeContext)
    const {alt_description, likes, urls, user} = imageItem;
    const {name, username, profile_image, instagram_username, twitter_username} = user;
    const like = likes > 1000 ? likes/1000 : likes
    const tagsList = [
        "Animals in the wild", 
        "Animals images & Pictures", 
        "Elephant Images", 
        "Nature Images", 
        "Animals walking", 
        "Natural habitat", 
        "Wild", 
        "Animal pictures", 
        "Animals", 
        "Giant animals", 
        "Forst animals"
    ]

    return (
        <div className={`${theme && 'modal-container-dark'} modal-container`}>
            <img src={urls.regular} className='modal-image' alt={alt_description} />
            <div className='share-down-con'>
                <div className='share-info-con'>
                    <div className='share-button'>
                        <AiOutlineShareAlt className='share-icon' />
                        <span className='share-text'>Share</span>
                    </div>
                    <div className='share-button'>
                        <AiOutlineInfoCircle className='share-icon' />
                        <span className='share-text'>Info</span>
                    </div>
                </div>
                <button type='button' className='download-button'>Download Image</button>
            </div>
            <div className="modal-user-details-con">
                <div className="modal-profile-con">
                    <div style={{display: 'flex', alignItems: 'center', minWidth: '0%'}}>
                    <img src={profile_image.medium} className="modal-user-image" alt="user" />
                    <div className="modal-user-name-con">
                        <h1 className={`${theme && 'modal-name-dark'} modal-name`}>{name}</h1>
                        <p className="modal-username">@{username}</p>
                    </div>
                    <div className='social-media-con'>
                        <AiOutlineInstagram className="social-icon" />
                        <p className='social-id'>/{instagram_username}</p>
                    </div>
                    <div className='social-media-con'>
                        <FiTwitter className="social-icon" />
                        <p className='social-id'>/{twitter_username}</p>
                    </div>
                    </div>
                    <button type='button' className='mobile-download-button'>Download Image</button>
                </div>
                <div className='modal-like-down-con'>
                    <p className='popup-down-text'><span className='span-modal'>1.2K</span> downloads</p>
                    <div className='popup-like-con'>
                        <SlLike className='popup-like-icon' />
                        <p className='popup-likes-text'>{like} {likes > 1000 ? "K" : ""}</p>
                    </div>
                </div>
            </div>
            <div className='mobile-modal-social-down-con'>
                <div className='mobile-social-con'>
                    <div className='mobile-social-media-con'>
                        <AiOutlineInstagram className="social-icon" />
                        <p className='social-id'>/{instagram_username}</p>
                    </div>
                    <div className='mobile-social-media-con'>
                        <FiTwitter className="social-icon" />
                        <p className='social-id'>/{twitter_username}</p>
                    </div>
                </div>
                <div className='mobile-modal-like-down-con'>
                    <p className='popup-down-text'><span className='span-modal'>1.2K</span> downloads</p>
                    <div className='popup-like-con'>
                        <SlLike className='popup-like-icon' />
                        <p className='popup-likes-text'>{like} {likes > 1000 ? "K" : ""}</p>
                    </div>
                </div>
            </div>
            <div className='tags-con'>
                <p className={`${theme && 'related-tags-text-dark'} related-tags-text`}>Related Tags</p>
                <ul className='tags-list'>
                    {tagsList.map(eachItem => (<li key={eachItem} className='tag-item'>{eachItem}</li>))}
                </ul>
            </div>
        </div>
    )
}

export default ImageModal