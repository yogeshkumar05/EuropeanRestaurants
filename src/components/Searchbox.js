import React from 'react';
import CONSTS from '../utils/consts';
import {PropTypes} from 'prop-types';

const Searchbox = (props) => {
    const {sortOrder, onSortClick, changeHandler, value, searchHandler, keyUpHandler} = props;
    let sortIcon = 'fa-sort';
    if(sortOrder === 'asc') {
        sortIcon = 'fa-sort-asc';
    } else if(sortOrder === 'desc'){
        sortIcon = 'fa-sort-desc';
    }
    return(
        <div className='search-container'>
            <i className="fa fa-search" onClick={searchHandler}></i>
            <input value={value} onKeyUp = {keyUpHandler} onChange={changeHandler} type='text' placeholder={CONSTS.SEARCH_PLACEHOLDER}/>
            <i title={CONSTS.SORT_INFO} className={"fa "+ sortIcon} onClick={onSortClick}></i>
        </div>
    )
}
export default Searchbox;

Searchbox.propTypes = {
    sortOrder: PropTypes.string,
    onSortClick: PropTypes.func
}