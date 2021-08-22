import Layout from '../components/Global/Layout'
import styles from '../styles/Gear.module.css'
function Gear() {
  return (
    <Layout>
      <section>
        <div className="content_wrap_slim">
          <div className="section_title">Digital Nomad Gear</div>
          <div className={styles.product}>
            <iframe className={styles.amazon_link} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=kramergatos-20&marketplace=amazon&amp;region=US&placement=B073XTX1MG&asins=B073XTX1MG&linkId=f75973e85b0b4ca147a17d6fa798ad5f&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
            </iframe>
            <div className={styles.description}>
              Whether it's exploring a new city, climbing a pyramid, or going for a run outside in the summer, Nuun is our go to drink to throw in our water bottle to keep our electrolytes, hydration, and energy up.
            </div>
          </div>
          <div className={styles.product}>
            <iframe className={styles.amazon_link} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=kramergatos-20&marketplace=amazon&amp;region=US&placement=B0148NPH9I&asins=B0148NPH9I&linkId=4f0e400f7441f6c8552b2efcf3aea837&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
            </iframe>
            <div className={styles.description}>
              These keyboards are the best because the battery can last up to 24 months before needing recharged, and they're small and super light weight, which is perfect for traveling. They can connect to three different devices (laptops, tablets, phones) via bluetooth and switching between devices is just clicking a button in the top left.
            </div>
          </div>
          <div className={styles.product}>
            <iframe className={styles.amazon_link} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=kramergatos-20&marketplace=amazon&amp;region=US&placement=B07S395RWD&asins=B07S395RWD&linkId=f94b5632f20d5a54eeb522a5dc0d0ae0&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
            </iframe>
            <div className={styles.description}>
              These mice are great professional mice that we carry with us in our travels. You can configure the various buttons and they're very precise which is great for design work or gaming.
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Gear
