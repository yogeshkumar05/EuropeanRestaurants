import React, {Component} from 'react';
import HotelsContainer from './containers/HotelsContainer';
import csv from '../data/euro_restrobeee02c.csv';

export default class App extends Component
{
    render()
    {
        return(
            <HotelsContainer hotelData = {csv}/>
        )
    }
}