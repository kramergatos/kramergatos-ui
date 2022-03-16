import Layout from '../../components/Joe/Layout'
import SideNav from '../../components/Button/SideNav'
import Adventure from '../../components/Joe/Adventure'
import Bio from '../../components/Joe/Bio'
import Photos from '../../components/Joe/Photos'
import Interests from '../../components/Joe/Interests'
import Quote from '../../components/Joe/Quote'
import Values from '../../components/Values/Values'
import {
  sideNavAbout,
  dataValues,
  dataInterests
} from '../../data/joe'
function About() {
  return (
    <Layout pageTitle="About - Joe Kramer">
      <SideNav data={sideNavAbout} />
      <Adventure />
      <Bio />
      <Photos />
      <Interests data={dataInterests} />
      <Quote />
      <Values data={dataValues} />
    </Layout>
  )
}
export default About
