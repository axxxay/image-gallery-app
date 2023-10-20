import {SlLike} from 'react-icons/sl'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RxCross2} from 'react-icons/rx'
import './style.css'
import ImageModal from '../ImageModal'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

const ImageItem = ({imageItem}) => {
    const {theme} = useContext(ThemeContext)
    const {alt_description, likes, urls, user} = imageItem;
    const {small} = urls;
    const {name, username, profile_image} = user;
    const like = likes > 1000 ? likes/1000 : likes
    return (
        <li className={`${theme && 'image-item-dark'} image-item`}>
            <Popup
                modal
                trigger={
                <button type="button" className="trigger-button">
                    <img src={small} className="image-thumbnail" alt={alt_description} />
                    <div className="user-details-con">
                        <div className="profile-con">
                            <img src={profile_image.medium} className="user-image" alt="user" />
                            <div className="user-name-con">
                                <p className={`${theme && 'name-dark'} name`}>{name}</p>
                                <p className='username'>@{username}</p>
                            </div>
                        </div>
                        <div className='like-con'>
                            <SlLike className={`${theme && 'likes-text-dark'} like-icon`} />
                            <p className={`${theme && 'likes-text-dark'} likes-text`}>{like} {likes > 1000 ? "K" : ""}</p>
                        </div>
                    </div>
                </button>
                }
            >
                {close => (
                    <>
                        <ImageModal imageItem={imageItem} />
                        <button
                        type="button"
                        className="modal-trigger-button"
                        onClick={() => close()}
                        >
                        <RxCross2 className='cross' />
                        </button>
                    </>
                )}
            </Popup>
        </li>
    )
}

export default ImageItem