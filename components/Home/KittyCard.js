import styles from '../../styles/Card.module.css'
export default function KittyCard(props) {
  const pets = [
    {id: "1", url: "/image/kitty/pet-sitting1.jpg"},
    {id: "2", url: "/image/kitty/pet-sitting2.jpg"},
    {id: "3", url: "/image/kitty/pet-sitting3.jpg"},
    {id: "4", url: "/image/kitty/pet-sitting4.jpg"},
    {id: "5", url: "/image/kitty/pet-sitting5.jpg"},
    {id: "6", url: "/image/kitty/pet-sitting6.jpg"},
    {id: "7", url: "/image/kitty/pet-sitting7.JPG"},
    {id: "8", url: "/image/kitty/pet-sitting9.jpg"}
  ]
  return (
    <section>
      <div className="content_wrap_slim">
        <div className="section_title">Pet Sitting</div>
        <div className={styles.card_kitty}>
          <div>
            {pets.map(item => (
              <img alt="cats" className={styles.card_kitty_image} key={item.id} src={item.url} />
            ))}
            <span className={styles.card_title}>
              Professional International Kitty Sitters
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
