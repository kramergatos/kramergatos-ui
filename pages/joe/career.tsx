import Layout from '../../components/Joe/Layout'
import SideNav from '../../components/SideNav/SideNav'
import HireMe from '../../components/Joe/HireMe'
import Skills from '../../components/Career/Skills'
import Qualifications from '../../components/Career/Qualifications'
import GitHub from '../../components/Career/GitHub'
import Jobs from '../../components/Career/Jobs'
import Accolades from '../../components/Career/Accolades'
import Stickers from '../../components/Joe/Stickers'
import {dataSkills, dataExperience, dataAccolades, dataQualifications} from '../../data/joe'
function Career() {
  const sideNav = [
    {
      id: 1,
      title: "Hire",
      url: "#hire"
    },
    {
      id: 2,
      title: "Skills",
      url: "#skills"
    },
    {
      id: 3,
      title: "Qualifications",
      url: "#qualifications"
    },
    {
      id: 4,
      title: "GitHub",
      url: "#github"
    },
    {
      id: 5,
      title: "Experience",
      url: "#experience"
    },
    {
      id: 6,
      title: "Accolades",
      url: "#accolades"
    },
    {
      id: 7,
      title: "Stickers",
      url: "#stickers"
    }
  ]
  return (
    <Layout pageTitle="Career - Joe Kramer">
      <SideNav data={sideNav} />
      <HireMe />
      <Skills data={dataSkills} />
      <Qualifications data={dataQualifications} />
      <GitHub />
      <Jobs data={dataExperience} />
      <Accolades data={dataAccolades} />
      <Stickers />
    </Layout>
  )
}
export default Career
