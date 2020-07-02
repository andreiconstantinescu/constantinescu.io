import styled from 'styled-components'

export const PageLayout = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.typography.content.fontSize};
  line-height: ${(props) => props.theme.typography.content.lineHeight};
  padding: 0 ${(props) => props.theme.typography.lineHeightSpacing(1)};
`

export const Heading = styled.h1`
  font-size: ${(props) => props.theme.typography.h2.fontSize};
  line-height: ${(props) => props.theme.typography.h2.lineHeight};
  margin-bottom: ${(props) => props.theme.typography.h2.marginBottom};
`
export const Title = styled.h3`
  font-size: ${(props) => props.theme.typography.h3.fontSize};
  line-height: ${(props) => props.theme.typography.h3.lineHeight};
  margin-bottom: ${(props) => props.theme.typography.h3.marginBottom};
`
export const Subtitle = styled.h4`
  font-size: ${(props) => props.theme.typography.h4.fontSize};
  line-height: ${(props) => props.theme.typography.h4.lineHeight};
  margin-bottom: ${(props) => props.theme.typography.h4.marginBottom};
`
export const Section = styled.section`
`

export const Paragraph = styled.p`
  line-height: ${(props) => props.theme.typography.lineHeightSpacing(1.5)};
`

export const Image = styled.img``

export const SVG = styled.svg`
  @media (prefers-color-scheme: light) {
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
  @media (prefers-color-scheme: dark) {
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`

export const UL = styled.ul``

export const LI = styled.li``

export const HR = styled.hr`
  border: 1px solid ${(props) => props.theme.colors.primary};
  margin: -1px 0;
  line-height: ${(props) => props.theme.typography.lineHeightSpacing(0.5)};
 `

 export const Div = styled.div``