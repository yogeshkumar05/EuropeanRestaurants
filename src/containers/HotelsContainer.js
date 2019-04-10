import React, {Component} from 'react';
import Searchbox from '../components/Searchbox';
import Hotelthumg from '../components/Hotelthumb';
import Pagination from '../components/Pagination';
import {searchByMultiParams, sortRestaurants} from '../utils/helpers';
import {PropTypes} from 'prop-types';

export default class HotelsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            sortOrder: 'none',
            startIndex: 0,
            searchValue: '',
            hotelData: this.props.hotelData
        }
    }

    pageClickHandler = (page) => {
        this.setState({activePage: page});
    }

    sortClickHandler = () =>{
        let sort = 'asc';

        // none -> desc -> asc
        const sortMap = {
            'asc': 'none',
            'desc': 'asc',
            'none': 'desc'
        }
        sort = sortMap[this.state.sortOrder];
        this.setState({sortOrder: sort});
        const sortedData = sortRestaurants(sort, this.props.hotelData);
        this.setState({hotelData: sortedData});
    }

    nextArrowClickHandler = () => {
        const startIndex = this.state.startIndex +10;
        this.setState({startIndex, activePage: startIndex+1});
    }

    prevArrowClickHandler = () => {
        const startIndex = this.state.startIndex;
        if(startIndex>0) {
            const startIndex = this.state.startIndex - 9;
            this.setState({startIndex, activePage: startIndex});
        }
    }

    searchHandler = () => {
        const filteredHotels = searchByMultiParams(this.state.searchValue, this.props.hotelData);
        this.setState({hotelData:filteredHotels, activePage:1});
    }

    searchChangeHandler = (e) => {
        this.setState({searchValue: e.target.value});
        if(e.target.value === '') {
            this.setState({hotelData: this.props.hotelData});
        }
    }

    render() {
        const {activePage, sortOrder, hotelData} = this.state;
        const currentData =[];
        for(let i = activePage; i<activePage+10; i++) {
            if(hotelData.length >= i){
                currentData.push(hotelData[i-1]);
            }
        }
        return(<div className='hotels-container'>
            <h2 className='app-title'>European Restaurants</h2>
            <Searchbox searchHandler={this.searchHandler} value ={this.state.searchValue} changeHandler = {this.searchChangeHandler} sortOrder={sortOrder} onSortClick={this.sortClickHandler}/>
            <div className='hotel-list-container'>
                {
                    currentData.map((item, index) => {
                        // const {Name, City, Ranking, Rating} = item;
                        return <Hotelthumg key={index} {...item} cuisines={item['Cuisine Style']}/>
                    })
                }
            </div>
            
            <Pagination startIndex={this.state.startIndex} nextHandler = {this.nextArrowClickHandler} prevHandler = {this.prevArrowClickHandler} activePage={activePage} count={hotelData.length} clickHandler={this.pageClickHandler}/>
        </div>)
    }
}
HotelsContainer.propTypes = {
    hotelData: PropTypes.array
}