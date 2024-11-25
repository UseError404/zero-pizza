import React from 'react';
import style from './style.module.scss';
import {CiSearch} from "react-icons/ci";
import {IoMdClose} from "react-icons/io";

function Search({searchValue, setSearchValue}) {
    return (
        <div className={style.root}>
            <input
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
                className={style.input}
                placeholder="Поиск пиццы ..."/>
            <div className={style.iconSearch}>
                {
                    searchValue === '' ? <CiSearch/> : <IoMdClose onClick={() => setSearchValue('')}/>
                }
            </div>
        </div>
    );
}

export default Search;