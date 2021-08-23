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
        subtitle: "Digital nomad adventures and exploring the world.",
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
        subtitle: "Digital nomads graffiti hunting around the world.",
        social: {
          instagram: "https://www.instagram.com/kramergatos/",
          facebook: "https://www.facebook.com/graffiti.kramergatos"
        }
      },
      {
        id: "3",
        image: "profile-comida.jpg",
        title: "Comida Kramer Gatos",
        subtitle: "Digital nomads exploring the world through good food.",
        social: {
          instagram: "https://www.instagram.com/comida.kramergatos/",
          facebook: "https://www.facebook.com/comida.kramergatos"
        }
      },
      {
        id: "4",
        image: "profile-casas.jpg",
        title: "Casas Kramer Gatos",
        subtitle: "Digital nomad beautiful homes, rentals, & hotels from around the world.",
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
  const pets = {
    title: "Pet Sitting",
    imagePath: "/image/kitty/",
    linkTarget: "_self",
    items: [
      {
        id: "100",
        title: "Professional International Pet Sitters",
        image: "kitty7.jpg",
        url: "/kitty"
      }
    ]
  }
  const products = {
    title: "Digital Nomad Gear",
    subtitle: "Best gear for digital nomads we use to make travel life easier",
    imagePath: "/image/gear/",
    linkTarget: "_blank",
    items: [
      {
        title: "LG K380 Keyboard",
        subtitle: "The LG K380 is the best keyboard because the battery can last up to 24 months before needing new batteries, and they're small and super light weight, which is perfect for traveling. They can connect to three different devices (laptops, tablets, phones) via bluetooth and switching between devices with a click of a button in the top left.",
        image: "keyboard.jpg",
        url: "https://www.amazon.com/gp/product/B0148NPH9I/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0148NPH9I&linkCode=as2&tag=kramergatos-20&linkId=0b071b3c4ca226b8e8ef4865f12fe1a4",
        social: {
          cart: "https://www.amazon.com/gp/product/B0148NPH9I/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0148NPH9I&linkCode=as2&tag=kramergatos-20&linkId=0b071b3c4ca226b8e8ef4865f12fe1a4"
        }
      },
      {
        title: "LG MX Master 3",
        subtitle: "The LG MX Master 3 is a great professional mouse that we carry with us in our travels. The battery lasts a long time before needing a recharge, and you can configure the various buttons and they're very precise which is great for design work or gaming. It's ergonomic and comfortable to use all day.",
        image: "mouse.jpg",
        url: "https://www.amazon.com/gp/product/B07S395RWD/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07S395RWD&linkCode=as2&tag=kramergatos-20&linkId=885c8d3c405d646e1fb35120eecfc5f6",
        social: {
          cart: "https://www.amazon.com/gp/product/B07S395RWD/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07S395RWD&linkCode=as2&tag=kramergatos-20&linkId=885c8d3c405d646e1fb35120eecfc5f6"
        }
      },
      {
        title: "Nuun Water",
        subtitle: "Whether it's exploring a new city, climbing a pyramid, or going for a run outside in the summer, Nuun is our go to drink to throw in our water bottle to keep our electrolytes, hydration, and energy up.",
        image: "nuun.jpg",
        url: "https://www.amazon.com/gp/product/B073XTX1MG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B073XTX1MG&linkCode=as2&tag=kramergatos-20&linkId=733af7c39759a214d6be6b06b0f882c3",
        social: {
          cart: "https://www.amazon.com/gp/product/B073XTX1MG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B073XTX1MG&linkCode=as2&tag=kramergatos-20&linkId=733af7c39759a214d6be6b06b0f882c3"
        }
      }
    ]
  }
  return (
    <Layout>
      <Cards data={channels} key="c1" />
      <Cards data={pets} key="c2" />
      <Cards data={creators} key="c3" />
      <div className="section_gray">
        <Cards data={products} key="c4" />
      </div>
    </Layout>
  )
}
export default Home
