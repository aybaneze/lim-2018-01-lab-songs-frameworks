import React, {Component} from 'react';
import './artist.css'

class Artist extends Component{
    constructor(props){
       super(props)
       this.nameMusic=props.nameMusic;
       this.photoMusic=props.photoMusic;
       this.count=props.count;
    }

    render(){
        return(          
            <div className="musics">
            <h3>{this.nameMusic}</h3>
            <img src={this.photoMusic}/><br/>
            <h4>{this.count}</h4> <i className="fas fa-heart fa-2x like" ></i> <i className="fas fa-thumbs-down fa-2x dislike"></i>
            </div>
        )

    }
}

export default Artist;