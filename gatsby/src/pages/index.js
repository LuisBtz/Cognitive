import React from "react";
import Seo from "../components/layout/seo";
import Layout from "../components/layout/layout";



// markup
// if something goes wrong remove layout tag just place fragment in every pages
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Home Page" /*image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */
      />
     <p>HomePage</p>
    </Layout>
  );
};

export default IndexPage;