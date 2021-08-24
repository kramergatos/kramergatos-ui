import Layout from '../components/Global/Layout'
import styles from '../styles/Mali.module.css'
function Mali() {
  const data = {
    url: {
      instagram: "https://www.instagram.com/rowsc/",
      facebook: "https://www.facebook.com/MalinaliKramer",
      linkedin: "https://www.linkedin.com/in/malinali-kramer/",
      angellist: "https://angel.co/u/malinali-hernandez"
    }
  }
  return (
    <Layout data={data.url} pageTitle="Mali - KramerGatos">
      <div className={styles.title}>Coming Soon!</div>
    </Layout>
  )
}
export default Mali
