import Layout from '../../components/Joe/Layout'
import Video from '../../components/Joe/Video'
import Bio from '../../components/Joe/Bio'
import Photos from '../../components/Joe/Photos'
import Quote from '../../components/Joe/Quote'
function About() {
  return (
    <Layout pageTitle="About - Joe Kramer">
      <Video />
      <Bio />
      <Photos />
      <Quote />
    </Layout>
  )
}
export default About
