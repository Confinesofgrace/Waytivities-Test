import { MdOutlineSearch } from "react-icons/md";

function Search () {
    return(
        <div id="search">
            <input id="search" type="search" placeholder="Search..."></input>
            <MdOutlineSearch size={20}/>

        </div>

    );

}

export default Search;