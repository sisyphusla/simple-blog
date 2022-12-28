import React from "react";
import { Container, ContentCard, FeatureImage, Content } from "../components";

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="2022-12-25"
          title="this is a book"
          excerpt="lerthlekhyl lkejtlkewjtl elwkrjlkwejr lwekrj"
          slug="/test" />
      </Content>
    </Container>
  )
}


export default IndexPage