
import styles from './styles/SearchSection.module.css'


const SearchSection = ({handleSearch, setText}) =>{
   
    const textChange = ({target}) =>{
        setText(target.value)
    }

    return (
        <div className = {styles.left}>

            <form>
                <input id = "searchBar" type = 'text' onChange={textChange}></input>
            </form>
            <button id = 'searchButton' onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchSection;