import React from 'react'
import styled from 'styled-components';



const Joven = () => {

    return(
        <JovenContenedor id='joven'>

            <div className='joven' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
            </div>
        </JovenContenedor>
    )
}

const JovenContenedor = styled.section`
position: relative;
width: 100%;
display: flex;
.joven {
        background-image: url('./images/joven.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        height: 70vh;
        width: 100vw;
        @media (max-width: 680px) {
            height: 350px;
            background-attachment: scroll;
        }
}




`

export default Joven;