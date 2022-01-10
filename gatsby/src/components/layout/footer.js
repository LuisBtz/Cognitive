import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return(
        <FooterContainer>
            <a className='whats' target='_blank' rel="noreferrer" href='https://wa.me/5218112777083/?text=Mensaje desde la página web: me gustaría obtener información de los servicios'>
                <img src='./images/whats.png' alt='Whatsapp business button' />
            </a>
            <div className='container footer'>
                <p>© 2022 Cognitive Achievement</p>
                <img src='./logo.svg' alt='Logo Cognitive Achievement' />
                <div className='contact'>
                    <a rel="noreferrer" href='tel:+528181635262'>+52 81 8163 5262</a>
                    <a rel="noreferrer" href='mailto:hola@cognitiveachievement.com'>hola@cognitiveachievement.com</a>
                </div>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
background-color: #5E45FF;
width: 100%;

.footer {
    display: flex;
    width: 100%;
    color: white;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 50px;
    @media (max-width: 680px) {
        flex-direction: column;
        text-align: center;
        img {
            margin-top: 50px;
            margin-bottom: 50px;
        }
    }
    img {
        width: 150px;
        align-self: center;
    }
    .contact {
        display: block;
        align-self: center;
        a {
            display: block;
            color: white;
        }
    }
    p {
        align-self: center;
    }
}

    a.whats {
        position: fixed;
        bottom: 25px;
        right: 25px;
        z-index: 2;
        img {
            width: 50px;
            animation: whats 500ms ease-in-out forwards infinite ;
        }
    }

    @keyframes whats {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }
`

export default Footer