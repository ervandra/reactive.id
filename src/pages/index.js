import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Logo = () => (
  <svg width="96px" height="96px" viewBox="0 0 96 96" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="logo" transform="translate(9.000000, 3.000000)">
            <polygon id="Shape-2" stroke="#222222" fill="#F8F8F8" fill-rule="nonzero" points="39 0 0 22 0 67 39 90 78 68 78 23"></polygon>
            <text id="R" font-family="OperatorMono-Medium, Operator Mono" font-size="60" font-weight="400" letter-spacing="0.006" fill="#222222">
                <tspan x="22.497" y="64">R</tspan>
            </text>
        </g>
    </g>
</svg>
)

const IndexPage = () => (
  <Layout>
    <div className="comingsoon" style={{ padding: '2rem', display: 'flex', height: '100vh', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <SEO title="Reactive Indonesia | Software Developer" />
      <div className="comingsoon-img" style={{ width: '160px', textAlign: 'center', marginBottom: '2rem' }}>
        <Logo />
      </div>
      <div className="comingsoon-text" style={{textAlign: 'center'}}>
        <h2>Hi, we're:</h2>
        <h1>Reactive.id</h1>
        <p>We have goals to transform every website with <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">react.js</a> <br/>Do you have a site to be revamped?</p>
        <p><a className="button" href="mailto:ervandra.halim@gmail.com" target="_blank" rel="noopener noreferrer">Contact us</a></p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
