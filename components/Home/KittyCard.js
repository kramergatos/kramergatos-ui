import styles from '../../styles/Card.module.css'
export default function KittyCard(props) {
  const pets = [
    {id: "1", url: "/image/kitty/kitty7.jpg"},
    {id: "2", url: "/image/kitty/kitty6.jpg"},
    {id: "3", url: "/image/kitty/roseberry.jpg"}
  ]
  return (
    <section>
      <div className="content_wrap_slim">
        <div className="section_title">Pet Sitting</div>
        <a className={styles.card_kitty} href="/kitty">
          <div>
            {pets.map(item => (
              <img alt="cats" className={styles.card_kitty_image} key={item.id} src={item.url} />
            ))}
            <span className={styles.title}>
              Professional International Pet Sitters
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
