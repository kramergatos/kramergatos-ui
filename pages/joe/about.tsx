import Layout from '../../components/Joe/Layout'
import SideNav from '../../components/SideNav/SideNav'
import Adventure from '../../components/Joe/Adventure'
import Bio from '../../components/Joe/Bio'
import Photos from '../../components/Joe/Photos'
import Interests from '../../components/Joe/Interests'
import Quote from '../../components/Joe/Quote'
import Values from '../../components/Values/Values'
import {dataValues, dataInterests} from '../../data/joe'
function About() {
  const sideNav = [
    {
      id: 1,
      title: "Adventure",
      url: "#adventure"
    },
    {
      id: 2,
      title: "About",
      url: "#about"
    },
    {
      id: 3,
      title: "Photos",
      url: "#photos"
    },
    {
      id: 4,
      title: "Interests",
      url: "#interests"
    },
    {
      id: 5,
      title: "Inspiration",
      url: "#inspiration"
    },
    {
      id: 6,
      title: "Values",
      url: "#values"
    }
  ]
  return (
    <Layout pageTitle="About - Joe Kramer">
      <SideNav data={sideNav} />
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
