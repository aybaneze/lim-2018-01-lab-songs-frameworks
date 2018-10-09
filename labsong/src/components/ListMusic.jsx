import React, { Component } from 'react';
import './ListMusic.css'
import Artist from '../Artist/artist';

class ListMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      track: []
    }
    this.name = props.name;
    this.photo = props.photo;
    this.keySong = props.keySong;
    this.tracks = props.tracks;
  }

  componentDidMount() {
    const colect = this.tracks;
    const { track } = this.state;
    for (let i in colect){    
    track.push({
      keySongs: i,
      nameMusic: colect[i].name,
      count: colect[i].playcount,
      photoMusic: colect[i].image[0]["#text"]
    })
    this.setState({ track })
    }
  
    
  }





  render() {
    return (
      <div className="ListName">
        <h1>{this.name}</h1>
        <img src={this.photo} />
        {this.state.track.map(data => {
        
          return (
          
            <Artist
              keySongs={data.keySongs}
              nameMusic={data.nameMusic}
              count={data.count}
              photoMusic={data.photoMusic}
            />
          )
        })
        }
      </div>)
  }
}

export default ListMusic;