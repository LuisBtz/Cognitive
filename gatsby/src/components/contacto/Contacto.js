import React from 'react'
import styled from 'styled-components';



const Contacto = () => {

    return(
        <NosotrosContenedor id='contact'>
         <div className='container'>
            <img src='./images/contacto/talkToUs.svg' alt='Consulting network Coach community' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800"/>
            <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">Si quisieras platicar con nosotros sobre algún tema particular, deja tu información de contacto y en el espacio de comentarios dinos sobre que tema te gustaría profundizar.</p>
         </div>

         <div className='container form' >
            <form name='contact' netlify data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                <label htmlFor='nombre'>Nombre</label>
                <input id='nombre' type='text' name='nombre' />
                <label htmlFor='apellido'>Apellido</label>
                <input id='apellido' type='text' name='apellido' />
                <label htmlFor='email'>E-mail</label>
                <input id='email' type='email' name='e-mail' />
                <label htmlFor='lugar'>País / Estado / Provincia</label>
                <input id='lugar' type='text' name='lugar' />
                <label htmlFor='mensaje'>¿Cómo te podemos ayudar?</label>
                <textarea id='mensaje' type='text' name='mensaje'></textarea>
                <button type='submit'>Enviar</button>
            </form>
            <div className='whats' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                <p>Si prefieres podemos atenderte a trevés de nuestro Whatsapp Business </p>
                <img src='./images/whats.png' alt='Whatsapp business button' />
            </div>
         </div>
        </NosotrosContenedor>
    )
}

const NosotrosContenedor = styled.section`
position: relative;
width: 100%;
padding-top: 50px;
padding-bottom: 50px;
@media (max-width: 680px) {
    padding-bottom: 0;
    }
.container {
    display: flex;
    padding-bottom: 50px;
    @media (max-width: 680px) {
    padding-bottom: 0;
    }
    p {
        align-self: center;
    }
    @media (max-width: 680px) {
        flex-direction: column;
        img {
            margin: 0 auto;
            width: 60%;
            padding-right: 0;
            padding-bottom: 50px;
        }
    }
    p {
        font-size: 1.2rem;
    }
}


img {
    width: 50%;
    padding-right: 50px;
}

.form {
    display: flex;
    @media (max-width: 680px) {
        flex-direction: column;
        form, .whats {
            width: 100% !important;
        }
    }
    form  {
        width: 50%;
        input, textarea {
            display: block;
            width: 100%;
            font-size: 1.2rem;
            border: solid 1px #5E45FF;
        }
        input {
            padding: 10px;
            margin-bottom: 30px;
            margin-top: 5px;
        }
        textarea {
            height: 200px;
            padding: 10px;
        }
        button {
            width: 100%;
            padding: 20px 0;
            background-color: #5E45FF;
            color: white;
            outline: none;
            border: none;
            margin-top: 25px;
            font-size: 1.2rem;
        }
    }
    .whats {
        align-self: center;
        width: 50%;
        padding: 50px;
        text-align: center;
        box-sizing: border-box;
        img {
            width: 60px;
            margin: 20px auto;
            padding: 0;
        }
    }
    
}

`

export default Contacto;