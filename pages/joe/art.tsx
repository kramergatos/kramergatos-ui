import Layout from '../../components/Joe/Layout'
import Arts from '../../components/Gallery/Arts'
import {dataArt} from '../../data/joe'
function Art() {
  return (
    <Layout pageTitle="Art - Joe Kramer">
      <Arts data={dataArt} />
    </Layout>
  )
}
export default Art
