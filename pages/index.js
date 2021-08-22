import Layout from '../components/Home/Layout'
import Cards from '../components/Card/Cards'
import KittyCard from '../components/Home/KittyCard'
function Home() {
  const channels = {
    title: "Channels",
    imagePath: "/image/",
    items: [
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
  return (
    <Layout>
      <Cards data={channels} key="c1" />
      <KittyCard />
      <Cards data={creators} key="c2" />
    </Layout>
  )
}
export default Home
