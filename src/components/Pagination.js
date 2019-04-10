import React from 'react';

const Pagination = (props) => {
    const { clickHandler, activePage, nextHandler, prevHandler, startIndex} = props;

    const paginationUI = [];
    for(let i = 1; i<=10; i++) {
        const style = activePage === startIndex+i ? 'active': '';
        paginationUI.push(<div key={startIndex +i} className={style} onClick={() => clickHandler(startIndex+i)} page={startIndex +i}>{startIndex+i}</div>)
    }
    
    return(
        <div className="pagination">
  <div className='prev' onClick={prevHandler}>&laquo;</div>
  {paginationUI}
  <div className='next' onClick={nextHandler}>&raquo;</div>
</div>
    )
}
export default Pagination;