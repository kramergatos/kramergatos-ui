import styles from '../../styles/Card.module.css'
export default function KittyCard(props) {
  const pets = [
    '/image/kitty/pet-sitting1.jpg',
    '/image/kitty/pet-sitting2.jpg',
    '/image/kitty/pet-sitting3.jpg',
    '/image/kitty/pet-sitting4.jpg',
    '/image/kitty/pet-sitting5.jpg',
    '/image/kitty/pet-sitting6.jpg',
    '/image/kitty/pet-sitting7.jpg',
    '/image/kitty/pet-sitting9.jpg'
  ]
  return (
    <section>
      <div className="content_wrap_slim">
        <div className="section_title">Pet Sitting</div>
        <div className={styles.card_kitty}>
          <div>
            {pets.map(item => (
              <img alt="cats" className={styles.card_kitty_image} src={item} />
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
