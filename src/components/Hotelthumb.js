import React from 'react';
import hotelImg from '../../images/hotel-icon.png';

const Hotelthumb = (props) => {
    const {Name, City, Rating, cuisines} = props;
    let cuisines1 = cuisines.replace('[','').replace(']','');
    let cuisines2 = cuisines1.replace('\'', '').replace('\'', '')
    
    return(
        <div className='hotelthumb-container'>
            <div className='hotel-details-container'>
                <div className='hotel-icon'>
                    <img src={hotelImg}/>
                </div>
                <div className='hotel-details'>
                    <h3 className='hotel-title'>
                        {Name}
                    </h3>
                    <div className='hotel-cuisine'>
                        {cuisines2}
                    </div>
                    <div className='hotel-city'>
                        {City}
                    </div>
                </div>
                <div className='hotel-star-details'>
                    <i className="fa fa-star"/>
                    <div>{Rating}</div>

                </div>
            </div>
            <div className='divider'/>
            <div className='hotel-reviews'>
                {props['Number of Reviews']} Reviews
            </div>
        </div>
    )
}
export default Hotelthumb;