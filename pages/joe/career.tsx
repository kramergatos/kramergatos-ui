import Layout from '../../components/Joe/Layout'
import SideNav from '../../components/SideNav/SideNav'
import HireMe from '../../components/Joe/HireMe'
import Skills from '../../components/Career/Skills'
import Qualifications from '../../components/Career/Qualifications'
import GitHub from '../../components/Career/GitHub'
import Jobs from '../../components/Career/Jobs'
import Accolades from '../../components/Career/Accolades'
import Stickers from '../../components/Joe/Stickers'
import {
  sideNavCareer,
  dataSkills,
  dataExperience,
  dataCareerFiles,
  dataAccolades,
  dataQualifications,
  dataGitHub
} from '../../data/joe'
function Career() {
  return (
    <Layout pageTitle="Career - Joe Kramer">
      <SideNav data={sideNavCareer} />
      <HireMe />
      <Skills data={dataSkills} />
      <Qualifications data={dataQualifications} />
      <GitHub data={dataGitHub} />
      <Jobs data={dataExperience} files={dataCareerFiles} />
      <Accolades data={dataAccolades} />
      <Stickers />
    </Layout>
  )
}
export default Career
