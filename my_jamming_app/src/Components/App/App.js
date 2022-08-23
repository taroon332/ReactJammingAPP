
import './App.css';
import React from 'react';
import  SearchBar  from '../SearchBar/SearchBar';
import  SearchResults  from '../SearchResults/SearchResults';
import  Playlist  from '../Playlist/Playlist';

class App extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            searchResults:[],
            playlistName : 'Favourites',
            playlistTracks : []
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    }

    removeTrack(track)
    {
        let updatedplaylistTracks = this.state.playlistTracks.filter((aTrack) =>
             aTrack.id === track.id )
         this.setState({playlistTracks: updatedplaylistTracks})
    }

    addTrack(track)
    {
        let isAlreadyAdded = this.state.playlistTracks.find(aTrack => aTrack.id === track.id )
        if(isAlreadyAdded === false)
        {
            let updatedplaylistTracks = this.state.playlistName.push(track)
            this.setState({playlistTracks: updatedplaylistTracks})
        }
    }

    updatePlaylistName(name)
    {
        this.setState({playlistName: name});
    }

    savePlaylist()
    {
        alert('this is linked tobutoon correctly')
        let trackURIs = this.state.playlistTracks.map(track => track.uri)
    }

    search(term)
    {
        console.log(term);
    }

  render()
  {
    return(
        <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                < SearchBar onSearch={this.search} /> 
                <div className="App-playlist">
                     <SearchResults searchResults = {this.state.searchResults} 
                                    onAdd ={this.addTrack}/> 
                     <Playlist playlistName = {this.state.playlistName}  
                                playlistTracks = {this.state.playlistTracks} 
                                onRemove={this.removeTrack} 
                                onNameChange={this.updatePlaylistName}
                                onSave ={this.savePlaylist}/> 
                </div>
            </div>
        </div>
    );
  }
}

export default App;
