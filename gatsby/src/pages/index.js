import React from "react";
import Seo from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Video from "../components/hero/Video";
import Joven from "../components/hero/Joven";
import Nosotros from "../components/nosotros/Nosotros";
import Servicios from "../components/servicios/Servicios";
import Blog from "../components/blog/Blog";
import { graphql } from 'gatsby'
import Contacto from "../components/contacto/Contacto";


export const data = graphql`
  query {
    sanitySynapsisKnowledge {
    synapsisKnowledgeLinks {
      _key
      link
      title
    }
  }
  }
`


// markup
// if something goes wrong remove layout tag just place fragment in every pages
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Home Page" /*image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */
      />
     <Video />
     <Joven />

     <Nosotros />
     <Servicios />
     <Blog data={data} />
     <Contacto />
    </Layout>
  );
};

export default IndexPage;