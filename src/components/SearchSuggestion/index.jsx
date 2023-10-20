import './style.css'
import {GoArrowUpLeft} from 'react-icons/go'

const SearchSuggestion = props => {
  const {suggestionItem, onArrowClicked} = props
  const {suggestion} = suggestionItem
  const onClickChange = () => {
    onArrowClicked(suggestion)
  }
  return (
    <li className="list-item" onClick={onClickChange}>
      <p className="desc">{suggestion}</p>
      <div>
        <GoArrowUpLeft className="arrow" />
      </div>
    </li>
  )
}

export default SearchSuggestion
