import Layout from '../components/Global/Layout'
import Cards from '../components/Card/Cards'
function Kitty() {
  let kittySits = {
    title: "Pet Sitting",
    imagePath: "/image/kitty/",
    items: [
      {
        id: 4,
        title: "Lolita",
        subtitle: "Progreso, Yucatán, México",
        image: "kitty4.jpg"
      },
      {
        id: 2,
        title: "Russel",
        subtitle: "Austin, TX, USA",
        image: "kitty3.jpg"
      },
      {
        id: 3,
        title: "Skinny",
        subtitle: "San Antonio, TX, USA",
        image: "kitty2.jpg"
      },
      {
        id: 1,
        title: "Snowball & Bailey",
        subtitle: "Denver, CO, USA",
        image: "kitty1.jpg"
      },
      {
        id: 2,
        title: "Nikola & Lucy",
        subtitle: "Austin, TX, USA",
        image: "kitty6.jpg"
      },
      {
        id: 3,
        title: "Kevin",
        subtitle: "Tampa, FL, USA",
        image: "kitty5.jpg"
      },
      {
        id: 11,
        title: "Roseberry",
        subtitle: "Austin, TX, USA",
        image: "roseberry.jpg"
      },
      {
        id: 12,
        title: "Black Kitty",
        subtitle: "Austin, TX, USA",
        image: "kitty7.jpg"
      },
      {
        id: 13,
        title: "Sophia",
        subtitle: "Austin, TX, USA",
        image: "kitty9.jpg"
      },
      {
        id: 14,
        title: "Sunny",
        subtitle: "Austin, TX, USA",
        image: "kitty8.jpg"
      }
    ]
  }
  let trustedHouseSitters = {
    title: "Trusted House Sitters",
    imagePath: "/image/kitty/",
    linkTarget: "_blank",
    items: [
      {
        id: "101",
        title: "Our Profile",
        subtitle: "Invite us to care for your cats while traveling.",
        image: "profile.jpg",
        url: "https://www.trustedhousesitters.com/house-and-pet-sitters/united-states/texas/austin/l/1222279/"

      },
      {
        id: "102",
        title: "25% Off Discount!",
        subtitle: "Click here to get your discounted membership today.",
        image: "trustedhousesitters.png",
        url: "https://www.trustedhousesitters.com/refer/RAF278346/?utm_medium=refer-a-friend&utm_campaign=refer-a-friend&utm_source=copy-link"
      }
    ]
  }
  return (
    <Layout>
      <Cards data={trustedHouseSitters} key="c1" />
      <Cards data={kittySits} key="c2" />
    </Layout>
  )
}
export default Kitty
