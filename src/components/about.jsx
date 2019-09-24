/** @jsx jsx */
import { jsx } from "theme-ui"

import Inner from "../elements/inner"
import Content from "../elements/content"
import ShapesAbout from "./shapes/about"
import AboutMDX from "../sections/about.mdx"

const About = ({ offset }) => (
  <div>
    <ShapesAbout offset={offset} />
    <Content speed={0.4} offset={offset}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
