import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import "reseter.css/css/reseter.min.css"

import Header from "../components/header"
import Footer from "../components/footer"
import Seo from '../components/seo'

export default function MarkdownPage({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const FullHeight = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `
  const Container = styled.main`
    width: 70%;
    margin: 42px auto auto;
  `

  return (
    <FullHeight>
      <Header />
      <Seo title={frontmatter.title} />
      <Container dangerouslySetInnerHTML={{ __html: html }} />
      <Footer />
    </FullHeight>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
