import Layout from '../components/Global/Layout'
import GearContent from '../components/Gear/Gear'
import Splash from '../components/Gear/Splash'
function Gear() {
  return (
    <Layout pageTitle="Gear - KramerGatos">
      <Splash />
      <div className="section_gray">
        <GearContent />
      </div>
    </Layout>
  )
}
export default Gear
