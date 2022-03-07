import SideNavItem from './SideNavItem'
import styles from '../../styles/SideNav.module.css'
export default function SideNav(props) {
  return (
    <div className={styles.side_nav_container}>
      <nav className={styles.side_nav}>
        {props.data.map(item => (
          <SideNavItem key={item.id} data={item} />
        ))}
      </nav>
    </div>
  )
}
