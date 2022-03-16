import ButtonIconOnly from '../../components/Button/IconOnly'
import styles from '../../styles/Social.module.css'
import {dataSocialLinks} from '../../data/joe'
export default function Social() {
  return (
    <nav className={styles.nav_social}>
      {dataSocialLinks.map(item => (
        <ButtonIconOnly data={item} key={item.id} />
      ))}
    </nav>
  )
}
