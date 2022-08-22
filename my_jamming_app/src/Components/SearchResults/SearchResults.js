import './SearchResults.css';
import React from 'react';
import TrackList from '../TrackList/TrackList';

class SearchResult extends React.Component 
{
  render()
  {
    return(
        <div className="SearchResults">
            <h2>Results</h2>
            {/* <!-- Add a TrackList component --> */}
            <TrackList tracks= {this.props.searchResults} onAdd = {this.props.onAdd} isRemoval={false}/>
        </div>
    );
  }
}

export default SearchResult;