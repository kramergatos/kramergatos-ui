import { Wrapper, Status } from '@googlemaps/react-wrapper'
import styles from '../../styles/Joe.module.css'
export default function Map() {
  const render = (status: Status) => {
    return <h1>{status}</h1>
  }
  return (
    <section id="austin">
      <img alt="Austin TX" src="/public/image/austin.jpg" />
      <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
        <YourComponent/>
      </Wrapper>
    </section>
  )
}
