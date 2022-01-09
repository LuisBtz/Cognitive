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



        </BlogContenedor>
    )
}

const BlogContenedor = styled.section`
position: relative;
width: 100%;
padding-bottom: 50px;
.container {
    display: block;
    padding-bottom: 50px;
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

.blog {
    background-color: rgba(247, 240,245, .2);
    padding: 0;
    margin: 0;
    ul.links {
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 50px; 
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

`

export default Blog;