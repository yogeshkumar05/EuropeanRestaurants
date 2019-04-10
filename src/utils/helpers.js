import {orderBy} from 'lodash';

//search
export const searchByMultiParams = (searchValue, data) => {
    const csvData = data;
    
    let filteredItems = csvData.filter(item => {
    const filterArr = [];
    
    if(item.Name && item.Name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1){
        filterArr.push(item)
    }
    
    if(item['Cuisine Style'] && (item['Cuisine Style'].indexOf(searchValue) !== -1)){
        filterArr.push(item)
    }
    
    if(filterArr.length >0)
        return filterArr
    else
        return false;
    });

    return filteredItems;
}
    
//sort
export const sortRestaurants = (sortFactor ='desc', data) => {
    const csvData = data;
    const sortParam = 'Rating';
    if(sortFactor === 'none') {
        return data;
    }
    
    const sortedData = orderBy(csvData,[sortParam],[sortFactor]);
    return sortedData;
}
    
 
// search autosuggestions
export const getAutoSuggestionItems = (suggestionWord = "ca") => {
    
    const csvData = csv;
    
    let suggestedData = []
    
    for(let restuarants of csvData){
        if(restuarants.Name && String(restuarants.Name).toLowerCase().startsWith(suggestionWord.toLowerCase()))
            suggestedData.push(restuarants.Name);
        }
}