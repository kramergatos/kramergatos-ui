import Layout from '../components/Global/Layout'
import Splash from '../components/Home/Splash'
import About from '../components/Home/About'
import Cards from '../components/Card/Cards'
import LargeCard from '../components/Card/LargeCard'
import KittyCard from '../components/Home/KittyCard'
import Gear from '../components/Gear/Gear'
function Home() {
  const channels = {
    title: "Channels",
    sectionId: "channels",
    imagePath: "/image/",
    items: [
      {
        id: "2",
        image: "profile-adventure.jpg",
        title: "Adventure Kramer Gatos",
        subtitle: "Digital nomad adventures and exploring the world.",
        url: {
          social: {
            instagram: "https://www.instagram.com/adventure.kramergatos/",
            facebook: "https://www.facebook.com/adventure.kramergatos",
            tiktok: "https://www.tiktok.com/@kramergatos"
          }
        }
      },
      {
        id: "1",
        image: "profile-graffiti.jpg",
        title: "Graffiti Kramer Gatos",
        subtitle: "Digital nomads graffiti hunting around the world.",
        url: {
          social: {
            instagram: "https://www.instagram.com/kramergatos/",
            facebook: "https://www.facebook.com/graffiti.kramergatos"
          }
        }
      },
      {
        id: "3",
        image: "profile-comida.jpg",
        title: "Comida Kramer Gatos",
        subtitle: "Digital nomads exploring the world through good food.",
        url: {
          social: {
            instagram: "https://www.instagram.com/comida.kramergatos/",
            facebook: "https://www.facebook.com/comida.kramergatos"
          }
        }
      },
      {
        id: "4",
        image: "profile-casas.jpg",
        title: "Casas Kramer Gatos",
        subtitle: "Digital nomad beautiful homes, rentals, & hotels from around the world.",
        url: {
          social: {
            instagram: "https://www.instagram.com/casas.kramergatos/",
            facebook: "https://www.facebook.com/Casas-Kramer-Gatos-147650187434767"
          }
        }
      }
    ]
  }
  const creators = {
    title: "Creators",
    sectionId: "creators",
    imagePath: "/image/",
    linkTarget: "_self",
    items: [
      {
        id: "100",
        title: "Joe Kramer",
        image: "joe-kramer.jpg",
        url: {
          page: "/joe",
          social: {
            instagram: "https://www.instagram.com/kramergatos/",
            facebook: "https://www.facebook.com/joe.kramergatos",
            linkedin: "https://www.linkedin.com/in/kramergatos/",
            angellist: "https://angel.co/u/kramergatos"
          }
        }
      },
      {
        id: "101",
        title: "Mali Kramer",
        image: "mali-kramer.jpg",
        url: {
          page: "/mali",
          social: {
            instagram: "https://www.instagram.com/rowsc/",
            facebook: "https://www.facebook.com/MalinaliKramer",
            linkedin: "https://www.linkedin.com/in/malinali-kramer/",
            angellist: "https://angel.co/u/malinali-hernandez"
          }
        }
      }
    ]
  }
  const pets = {
    title: "Pet Sitting",
    sectionId: "kitty",
    imagePath: "/image/kitty/",
    linkTarget: "_self",
    items: [
      {
        id: "100",
        title: "Professional International Pet Sitters",
        image: "kitty7.jpg",
        url: {
          page: "/kitty"
        }
      }
    ]
  }
  return (
    <Layout pageTitle="KramerGatos">
      <Splash />
      <About />
      <Cards data={channels} key="c1" />
      <Cards data={pets} key="c2" />
      <Cards data={creators} key="c3" />
      <div className="section_gray">
        <Gear />
      </div>
    </Layout>
  )
}
export default Home
