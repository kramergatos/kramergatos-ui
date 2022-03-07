import Layout from '../../components/Joe/Layout'
import Arts from '../../components/Joe/Arts'
function Art() {
  const data = {
    art: [
      {
        id: "a12",
        title: "In The Light Of Sunrise",
        image: "InTheLightOfSunrise-min.jpg",
        medium: "oil paint",
        dimensions: "24\"x48\"",
        date: "12/2013",
        forSale: false
      },
      {
        id: "a1",
        title: "Spectrum",
        image: "Spectrum-min.jpg",
        medium: "oil paint",
        dimensions: "20\"x24\"",
        date: "10/2014",
        forSale: false
      },
      {id: "a16",
        title: "Many Directions, All Facing Up",
        image: "ManyDirectionsAllFacingUp-min.jpg",
        medium: "oil paint",
        dimensions: "36\" x 48\"",
        date: "10/2011",
        forSale: true
      },
      {
        id: "a20",
        title: "Beautiful Disaster",
        image: "BeautifulDisaster-min.JPG",
        medium: "oil paint",
        dimensions: "48\" x 36\"",
        date: "02/2009",
        forSale: false
      },
      {
        id: "a22",
        title: "Random Insanity",
        image: "RandomInsanity-min.jpg",
        medium: "oil paint",
        dimensions: "32\" x 24\"",
        date: "05/2008",
        forSale: true
      },
      {
        id: "a14",
        title: "Heavy Distortion in Parallel",
        image: "HeavyDistortionInParallel-min.jpg",
        medium: "oil paint",
        dimensions: "48\" x 36\"",
        date: "12/2012",
        forSale: false
      },
      {
        id: "a15",
        title: "Waves Washing Over Openness",
        image: "WavesWashingOverOpenness-min.jpg",
        medium: "oil paint",
        dimensions: "48\" x 36\"",
        date: "06/2012",
        forSale: true
      },
      {
        id: "a17",
        title: "ZOE",
        image: "ZOE-min.JPG",
        medium: "spray paint",
        dimensions: "8' x 8'",
        date: "09/2010",
        forSale: false
      },
      {
        id: "a18",
        title: "Flow",
        image: "Flow-min.jpg",
        medium: "oil paint",
        dimensions: "48\" x 36\"",
        date: "07/2010",
        forSale: false
      },
      {
        id: "a19",
        title: "Fuego",
        image: "Fuego-min.JPG",
        medium: "oil paint",
        dimensions: "48\" x 36\"",
        date: "01/2010",
        forSale: false
      },
      {
        id: "a13",
        title: "Found",
        image: "Found-min.jpg",
        medium: "oil paint",
        dimensions: "48\" x 36\"",
        date: "02/2013",
        forSale: false
      },
    ]
  }
  return (
    <Layout pageTitle="Career - Joe Kramer">
      <Arts data={data.art} />
    </Layout>
  )
}
export default Art
