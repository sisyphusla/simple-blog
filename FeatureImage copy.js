import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby";
import { FeatureImageWrapper } from '../elements'

export const FeatureImage = ({ gatsbyImageData }) => {

  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: {originalName: {eq: "office.jpg"}}) {
        gatsbyImageData(layout: FIXED)
      }
    }
  `)
  return (
    <FeatureImageWrapper>
      <GatsbyImage image={gatsbyImageData ? gatsbyImageData : data.imageSharp.gatsbyImageData} style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }} />
    </FeatureImageWrapper>
  )
}