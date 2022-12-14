import './Track.css';
import React from 'react';

class Track extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.onAdd = this.onAdd.bind(this);
    }

    addTrack()
    {
        this.props.onAdd(this.props.Track)
    }

    removeTrack()
    {
        this.props.onRemove(this.props.Track)
    }


    renderAction()
    {
        if(this.props.isRemoval === false )
        {
            return <button onClick = {this.addTrack} className="Track-action">+</button>
        }
        else
        {
            return <button  onClick = {this.removeTrack} className="Track-action">-</button>
        }
    }

  render()
  {
    return(
        <div className="Track">
            <div className="Track-information">
                <h3>{this.props.track.name}</h3> 
                <p>{this.props.track.artist} | {this.props.track.album}</p>
            </div>
            {/* <button class="Track-action"><!-- + or - will go here --></button> */}
            {this.renderAction()}
        </div>
    );
  }
}

export default Track;