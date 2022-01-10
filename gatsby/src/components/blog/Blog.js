import React from 'react'
import styled from 'styled-components';



const Blog = ({data}) => {

    return(
        <BlogContenedor id='blog'>
         <div className='container'>
            <img className='logo' src='./images/blog/synapsis.svg' alt='Cognitive achievement logo' />
         </div>
         <div className='container full blog'>
            <div className='contenedor container'>
                <ul className='links container'>
                {data.sanitySynapsisKnowledge.synapsisKnowledgeLinks.map(({ _key, link, title }) => {
        return (
                    <li key={_key}><a href={link} target='_blank' rel="noreferrer" > {title}</a></li>
                    );
                })}
                </ul>
            </div>
         </div>
         <div className='blogBg'>
         </div>


        </BlogContenedor>
    )
}

const BlogContenedor = styled.section`
position: relative;
width: 100%;
.container {
    display: block;
    padding-bottom: 50px;
    @media (max-width: 680px) {
            margin: 0 auto;
            text-align: center;
        }
    .logo {
        width: 40%;
        
    }
    @media (max-width: 680px) {
        flex-direction: column;
        .logo {
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

.contenedor {
    padding: 0;
}
.blog {
    background-color: rgba(247, 240,245, .5);
    padding: 0;
    margin: 0;
    ul.links {
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 50px; 
        padding-bottom: 50px !important;
        padding-top: 50px;
        @media (max-width: 680px) {
            grid-template-columns: repeat(1, 1fr);
            text-align: center;
        } 
        li {
            width: 100%;
            color: #5E45FF;
            a {
                color: #5E45FF;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}

.blogBg {
        background-image: url('./images/blog/BlogBg.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        height: 80vh;
        width: 100vw;
        margin-top: 50px;
        position: relative;
        @media (max-width: 680px) {
            height: 350px;
        }
        h2 {
            text-align: center;
            padding-top: 25px;
            font-size: 2rem;
        }
        img {
            width: 350px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
}

`

export default Blog;