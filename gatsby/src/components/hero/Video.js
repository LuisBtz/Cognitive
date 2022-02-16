import React from 'react'
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"



const Video = () => {

    return(
        <VideoContenedor id='hero'>
            <video muted loop autoPlay controls poster='/images/hero.jpg'>
                <source src='/video/video_sonido.webm' type="video/webm" />
                <source src='/video/video_sonido.mp4' type="video/mp4" />
            </video>
            <div className='image movil'>
                <StaticImage
                    src="hero.jpg"
                    alt="A dinosaur"
                    placeholder="blurred"
                    layout="fullWidth"
                />
                <h1>Cognitive Achievement</h1>
            </div>
        </VideoContenedor>
    )
}

const VideoContenedor = styled.section`
position: relative;
padding-top: 73px;
width: 100%;
height: 100vh;
display: flex;
@media (max-width: 680px) {
      display: none;
    }
video {
      width: 100%;
      height: 100%;
      object-fit: contain;
}

.movil.image {
        display: none;
    }
`

export default Video;