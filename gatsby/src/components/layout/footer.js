import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return(
        <FooterContainer>
            <a className='whats' target='_blank' rel="noreferrer" href='https://wa.me/5218112777083/?text=Mensaje desde la página web: me gustaría obtener información de los servicios'>
                <img src='./images/whats.png' alt='Whatsapp business button' />
            </a>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    a.whats {
        position: fixed;
        bottom: 25px;
        right: 25px;
        z-index: 2;
        img {
            width: 50px;
        }
    }
`

export default Footer