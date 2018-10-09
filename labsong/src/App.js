import React, { Component } from 'react';
import './App.css';
import ListMusic from './components/ListMusic';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      music:[]
    }
  }

  componentDidMount(){
    let {music} = this.state;
    fetch('https://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key=01b1c7125fc579c17946cf1168dbc152&user=c4stles&format=json')
    .then(data => data.json())
        .then(artist=>{
          Object.values(artist).forEach(element => {          
             let ListArtist = element.artist;
             for(let i in ListArtist){
             let  ListName = ListArtist[i].name;
             let photo = ListArtist[i].image[2]['#text'];
                fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${ListName}&api_key=01b1c7125fc579c17946cf1168dbc152&format=json`)
                  .then(data=> data.json())
                    .then(dato=>{  
                      for(let value in dato){                              
                         music.push({
                           keySong: i, 
                           name: ListName,
                           photo: photo,
                           tracks:dato[value].track,              
                         })
                      this.setState({music});  
                      }   
                      
                    })     
             }
            }
          )
          }
         )
        }
  

  render() {
    return (
      <div className="App">
       <h1>Song-Pop</h1>
          {
              this.state.music.map(musicArtist=>{ 
              return(
                <ListMusic
                name = {musicArtist.name}
                photo = {musicArtist.photo}
                keySong = { musicArtist.keySong}
                tracks={musicArtist.tracks}           
                />
                
              )
            })
            }
      </div>
    );
  }
}

export default App;
