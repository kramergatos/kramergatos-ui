import Layout from '../components/Layout'
import Profiles from '../components/Home/Profiles'
function Home() {
  const data = {
    social: [
      {
        id: "1",
        image: "profile-graffiti.jpg",
        title: "Graffiti Kramer Gatos",
        url: {
          instagram: "https://www.instagram.com/kramergatos/",
          facebook: "https://www.facebook.com/graffiti.kramergatos"
        }
      },
      {
        id: "2",
        image: "profile-adventure.jpg",
        title: "Adventure Kramer Gatos",
        url: {
          instagram: "https://www.instagram.com/adventure.kramergatos/",
          facebook: "https://www.facebook.com/adventure.kramergatos"
        }
      },
      {
        id: "3",
        image: "profile-comida.jpg",
        title: "Comida Kramer Gatos",
        url: {
          instagram: "https://www.instagram.com/comida.kramergatos/",
          facebook: "https://www.facebook.com/comida.kramergatos"
        }
      },
      {
        id: "4",
        image: "profile-casas.jpg",
        title: "Casas Kramer Gatos",
        url: {
          instagram: "https://www.instagram.com/casas.kramergatos/",
          facebook: "https://www.facebook.com/Casas-Kramer-Gatos-147650187434767"
        }
      }
    ],
    members: [
      {
        id: "100",
        name: "Joe Kramer",
        image: "joe-kramer.jpg",
        url: {
          instagram: "https://www.instagram.com/kramergatos/",
          facebook: "https://www.facebook.com/joe.kramergatos",
          linkedin: "https://www.linkedin.com/in/kramergatos/",
          angellist: "https://angel.co/u/kramergatos"
        }
      },
      {
        id: "101",
        name: "Mali Kramer",
        image: "mali-kramer.jpg",
        url: {
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
      <Profiles data={data} />
    </Layout>
  )
}
export default Home
