import Layout from '../components/Home/Layout'
import Cards from '../components/Card/Cards'
import LargeCard from '../components/Card/LargeCard'
import KittyCard from '../components/Home/KittyCard'
function Home() {
  const channels = {
    title: "Channels",
    imagePath: "/image/",
    items: [
      {
        id: "2",
        image: "profile-adventure.jpg",
        title: "Adventure Kramer Gatos",
        social: {
          instagram: "https://www.instagram.com/adventure.kramergatos/",
          facebook: "https://www.facebook.com/adventure.kramergatos",
          tiktok: "https://www.tiktok.com/@kramergatos"
        }
      },
      {
        id: "1",
        image: "profile-graffiti.jpg",
        title: "Graffiti Kramer Gatos",
        social: {
          instagram: "https://www.instagram.com/kramergatos/",
          facebook: "https://www.facebook.com/graffiti.kramergatos"
        }
      },
      {
        id: "3",
        image: "profile-comida.jpg",
        title: "Comida Kramer Gatos",
        social: {
          instagram: "https://www.instagram.com/comida.kramergatos/",
          facebook: "https://www.facebook.com/comida.kramergatos"
        }
      },
      {
        id: "4",
        image: "profile-casas.jpg",
        title: "Casas Kramer Gatos",
        social: {
          instagram: "https://www.instagram.com/casas.kramergatos/",
          facebook: "https://www.facebook.com/Casas-Kramer-Gatos-147650187434767"
        }
      }
    ]
  }
  const creators = {
    title: "Creators",
    imagePath: "/image/",
    linkTarget: "_self",
    items: [
      {
        id: "100",
        title: "Joe Kramer",
        image: "joe-kramer.jpg",
        background: "background_blue",
        url: "/joe",
        social: {
          instagram: "https://www.instagram.com/kramergatos/",
          facebook: "https://www.facebook.com/joe.kramergatos",
          linkedin: "https://www.linkedin.com/in/kramergatos/",
          angellist: "https://angel.co/u/kramergatos"
        }
      },
      {
        id: "101",
        title: "Mali Kramer",
        image: "mali-kramer.jpg",
        background: "background_pink",
        url: "/mali",
        social: {
          instagram: "https://www.instagram.com/rowsc/",
          facebook: "https://www.facebook.com/MalinaliKramer",
          linkedin: "https://www.linkedin.com/in/malinali-kramer/",
          angellist: "https://angel.co/u/malinali-hernandez"
        }
      }
    ]
  }
  const products = {
    title: "Digital Nomad Gear",
    imagePath: "/image/products/",
    linkTarget: "_self",
    item: {
      title: "Best gear for digital nomads we use to make travel life easier",
      image: "cover.jpg",
      url: "/gear",
    }
  }
  return (
    <Layout>
      <LargeCard data={products} key="c1" />
      <Cards data={channels} key="c2" />
      <KittyCard />
      <Cards data={creators} key="c4" />
    </Layout>
  )
}
export default Home
