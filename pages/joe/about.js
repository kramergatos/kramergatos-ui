import Layout from '../../components/Joe/Layout'
import Bio from '../../components/Joe/Bio'
import Photos from '../../components/Joe/Photos'
import Quote from '../../components/Joe/Quote'
function About() {
  return (
    <Layout pageTitle="About - Joe Kramer">
      <Bio />
      <Photos />
      <Quote />
    </Layout>
  )
}
export default About
