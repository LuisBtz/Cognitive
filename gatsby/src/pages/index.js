import React from "react";
import Seo from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Video from "../components/hero/Video";
import Joven from "../components/hero/Joven";
import Nosotros from "../components/nosotros/Nosotros";
import Servicios from "../components/servicios/Servicios";



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
    </Layout>
  );
};

export default IndexPage;