import React from 'react'
import videourl from '../assets/videos/1.mp4'
import {Zoom, Fade} from 'react-reveal';

class BackgroundVideo extends React.Component {
    constructor(){
        super();
        this.state = {
            isHovered: false
        };
        this.handleHover = this.handleHover.bind(this);
    }
    handleHover(){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }
    watchMovieClicked() {
        const url = 'https://vaibhavsaharan.github.io/public/movie.html';
        window.open(url, '_blank');
    }
    render(){
        var opacityStyle;
        var bgStyle;
        if (this.state.isHovered) {
            bgStyle = {filter: 'brightness(40%) blur(5px) ', transition : 'filter 1s ease-out'}
        } else {
            opacityStyle = {opacity: '1'}
        }
        
        
        return (
            
            <div style = {{padding : '0px'}} id="player" className="bgvideo">
                <video style={bgStyle}  muted autoPlay="autoplay" loop="loop" className="bgvideoplayer">
                    <source src={videourl} type="video/mp4"/>
                </video>
                <Zoom>
                    <div className="bgvideocontent">
                        <div className="bgvideosubcontent">
                            <h1 style={{color : '#fff'}}>Watch Movies</h1>
                            <p style={{color : '#fff'}}>Directly stream movies using WebRTC</p>
                            <button onClick = {this.watchMovieClicked} onMouseEnter={this.handleHover} onMouseLeave = {this.handleHover} id ="bgmnewsite" type="button" className="btn btn-secondary" >Search Movie</button>
                        </div>
                    </div>
                </Zoom>
            </div>

            
        );
    }
    
}

export default BackgroundVideo;
