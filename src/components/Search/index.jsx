import React from 'react';
import debounce from 'lodash.debounce'
import style from './style.module.scss';
import {CiSearch} from "react-icons/ci";
import {IoMdClose} from "react-icons/io";
import {SearchContext} from "../../App.jsx";


function Search() {
    const {setSearchValue} = React.useContext(SearchContext);
    const inputRef = React.useRef();

    const [searchValueLocal, setSearchValueLocal] = React.useState('')

    const updateSearchInput = React.useCallback(
        debounce((str) => {
            setSearchValue(str)
        }, 1000), []
    )
    const onChangeInput = (event) => {
        setSearchValueLocal(event.target.value)
        updateSearchInput(event.target.value)
    }

    return (
        <div className={style.root}>
            <input
                ref={inputRef}
                value={searchValueLocal}
                onChange={event => onChangeInput(event)}

                className={style.input}
                placeholder="Поиск пиццы ..."/>
            <div className={style.iconSearch}>
                {
                    searchValueLocal === '' ? <CiSearch/> : <IoMdClose onClick={() => {
                        setSearchValueLocal('');
                        setSearchValue('')
                        inputRef.current.focus();
                    }}/>
                }
            </div>
        </div>
    );
}

export default Search;