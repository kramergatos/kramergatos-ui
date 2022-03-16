import Layout from '../../components/Global/Layout'
import SideNav from '../../components/Button/SideNav'
import Adventure from '../../components/About/Adventure'
import Bio from '../../components/About/Bio'
import Photos from '../../components/About/Photos'
import Interests from '../../components/About/Interests'
import Quote from '../../components/About/Quote'
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
