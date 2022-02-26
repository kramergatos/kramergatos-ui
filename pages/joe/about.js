import Layout from '../../components/Joe/Layout'
import SideNav from '../../components/Global/SideNav'
import Adventure from '../../components/Joe/Adventure'
import Bio from '../../components/Joe/Bio'
import Photos from '../../components/Joe/Photos'
import Quote from '../../components/Joe/Quote'
import Values from '../../components/Joe/Values'
function About() {
  const data = {
    values: [
      {
        id: 1,
        title: "Optimism",
        description: "Belief in the best of outcomes and stiving to make it reality."
      },
      {
        id: 2,
        title: "Continuous Learning",
        description: "Ongoing expansion of knowledge and skill sets to arrive prepared in a continuously changing environment."
      },
      {
        id: 3,
        title: "Determination",
        description: "Making up your mind that you're going to achieve a goal, and pushing forward until it's accomplished."
      },
      {
        id: 4,
        title: "Creativity",
        description: "Generating or recognizing ideas, possibilities, and alternatives that are new and valuable, that may be useful in solving problems, communicating, or entertainment."
      }
    ],
    sideNav: [
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
        title: "Inspiration",
        url: "#inspiration"
      },
      {
        id: 5,
        title: "Values",
        url: "#values"
      }
    ]
  }
  return (
    <Layout pageTitle="About - Joe Kramer">
      <SideNav data={data.sideNav} />
      <Adventure />
      <Bio />
      <Photos />
      <Quote />
      <Values data={data.values} />
    </Layout>
  )
}
export default About
