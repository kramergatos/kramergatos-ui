import Cards from '../Card/Cards'
import styles from '../../styles/Card.module.css'
export default function Gear() {
  const products = {
    title: "Digital Nomad Gear",
    subtitle: "Best gear for digital nomads we use to make travel life easier",
    imagePath: "/image/gear/",
    linkTarget: "_blank",
    items: [
      {
        id: "p3",
        title: "Nuun Water",
        subtitle: "Whether it's exploring a new city, climbing a pyramid, or going for a run outside in the summer, Nuun is our go to drink to throw in our water bottle to keep our electrolytes, hydration, and energy up. It's also great to be able to take these in your bag and add to a bottle of water instead of buying a premixed product which is mostly water and a waste of plastic.",
        image: "nuun.jpg",
        url: {
          amazon: "https://www.amazon.com/gp/product/B073XTX1MG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B073XTX1MG&linkCode=as2&tag=kramergatos-20&linkId=733af7c39759a214d6be6b06b0f882c3"
        }
      },
      {
        id: "p1",
        title: "LG K380 Keyboard",
        subtitle: "The LG K380 is the best keyboard because the battery can last up to 24 months before needing new batteries, and they're small and super light weight, which is perfect for traveling. They can connect to three different devices (laptops, tablets, phones) via bluetooth and switching between devices with a click of a button in the top left.",
        image: "keyboard.jpg",
        url: {
          amazon: "https://www.amazon.com/gp/product/B0148NPH9I/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0148NPH9I&linkCode=as2&tag=kramergatos-20&linkId=0b071b3c4ca226b8e8ef4865f12fe1a4"
        }
      },
      {
        id: "p2",
        title: "LG MX Master 3",
        subtitle: "The LG MX Master 3 is a great professional mouse that we carry with us in our travels. The battery lasts a long time before needing a recharge, and you can configure the various buttons and they're very precise which is great for design work or gaming. It's ergonomic and comfortable to use all day.",
        image: "mouse.jpg",
        url: {
          amazon: "https://www.amazon.com/gp/product/B07S395RWD/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07S395RWD&linkCode=as2&tag=kramergatos-20&linkId=885c8d3c405d646e1fb35120eecfc5f6"
        }
      }
    ]
  }
  return (
    <Cards data={products} />
  )
}
