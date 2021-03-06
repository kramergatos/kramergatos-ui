import Layout from '../../components/Global/Layout'
import SideNav from '../../components/Button/SideNav'
import HireMe from '../../components/Career/HireMe'
import Skills from '../../components/Career/Skills'
import Qualifications from '../../components/Career/Qualifications'
import GitHub from '../../components/Career/GitHub'
import Jobs from '../../components/Career/Jobs'
import Accolades from '../../components/Career/Accolades'
import Stickers from '../../components/Career/Stickers'
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
