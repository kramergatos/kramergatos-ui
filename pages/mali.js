import Layout from '../components/Global/Layout'
import Splash from '../components/Mali/Splash'
import Intro from '../components/Mali/MaliIntro'
import Jobs from '../components/Jobs/Jobs'
import styles from '../styles/Mali.module.css'
function Mali() {
  const data = {
    url: {
      instagram: "https://www.instagram.com/rowsc/",
      facebook: "https://www.facebook.com/MalinaliKramer",
      linkedin: "https://www.linkedin.com/in/malinali-kramer/",
      angellist: "https://angel.co/u/malinali-hernandez"
    },
    career: {
      jobs: [
        {
          id: "502",
          location: "Austin, TX, USA",
          title: "Chief Executive Officer",
          company: "Kramergatos LLC",
          dateStart: "09/2020",
          dateEnd: "Present",
          status: "FT Employee",
          remote: 1,
          description: "Operations, Marketing, Research and Content. Building the Kramergatos brand. Developing products and services.",
          logo: "default.png"
        },
        {
          id: "503",
          location: "Austin, TX, USA",
          title: "Pod School Teacher",
          company: "Pod School",
          dateStart: "08/2020",
          dateEnd: "03/2021",
          status: "PT Employee",
          remote: 0,
          description: "Create activities are specifically designed to promote dexterity and mental, emotional, and social development of pre-kindergarten students. Led play-based lessons and skill-building activities in language arts, math, social studies, and science disciplines for Pre-K students. Fostered a warm, nurturing, and fun atmosphere conducive to learning. Developed strong, lasting relationships with parents and children. Development of creative lessons and exciting indoor and outdoor learning experiences.",
          logo: "default.png"
        },
        {
          id: "504",
          location: "Austin, TX, USA",
          title: "Marketing Assistant",
          company: "Inspirare Communications",
          dateStart: "09/2018",
          dateEnd: "02/2020",
          status: "PT Employee",
          remote: 2,
          description: "As a marketer, I help to plan and launch marketing campaigns, manage social media for small businesses and non-profits across multiple platforms including Facebook, Instagram, LinkedIn, and YouTube. Collaborate with local organizations that support minorities and empower women. Support in events, conferences, and campaigns. Plan and execute multiple events for 6,000 people working together with sponsors and local organizations. I’m the link between social media influencers or their agents and companies who want to expose themselves to a determinate target market. Interact with the target market to evaluate the campaign and build relationships between the brand and the customers. Assist the CEO of the company with the agenda, meeting with clients, events, speakers, and production calendar. Production Assistant, collaborate creating content for a program with interviews with the leaders of the Latino community, help with the production of the program “Una Mirada con Anjanette” audio, set, background.",
          logo: "default.png"
        },
        {
          id: "505",
          location: "Austin, TX, USA",
          title: "Au Pair",
          company: "Adaia",
          dateStart: "12/2014",
          dateEnd: "03/2019",
          status: "FT Employee",
          remote: 0,
          description: "Provide support to children's social and emotional development, school performance, and general health and well-being. House manager, help organize household chores, schedule contractor appointments, medical appointments, car services. Assist during moving across cities and states.",
          logo: "default.png"
        },
        {
          id: "507",
          location:"Coyoacan Centro, México City, México",
          title:"Early Childhood Teacher",
          company:"Private Organization",
          dateStart: "03/2014",
          dateEnd: "12/2014",
          status: "PT Employee",
          remote: 0,
          description:"Provide activities to infants and kids to develop skills like motor skills, language, areas like sociability, etc.",
          logo: "default.png"
        },
        {
          id: "508",
          location:"México City, México",
          title:"Cognitive Lab Assistant",
          company:"UNAM Internship",
          dateStart: "08/2013",
          dateEnd: "12/2014",
          status: "PT Employee",
          remote: 0,
          description: "Helped in the development of Psychology experiments by conducting literature reviews. Contributed to the design of experiments, and conducted them in the lab. Gather and analyze data of the experiments.",
          logo: "default.png"
        },
        {
          id: "509",
          location:"México City, México",
          title:"Teacher",
          company:"Home School",
          dateStart: "06/2013",
          dateEnd: "06/2014",
          status: "PT Employee",
          remote: 0,
          description: "Teach the curriculum for 1st and 3rd grade. Create new strategies to facilitate learning, science, math, geography, Spanish, English, etc. Having as the base that kids learn while playing and to transition concrete concepts to abstracts through experimentation and games. Using these strategies kids scored higher scores than their peers.",
          logo: "default.png"
        },
        {
          id: "515",
          location:"México City, México",
          title:"Sports Psychologist Intern",
          company:"Centro Nacional de Alto Rendimiento y Talentos Deportivos",
          dateStart:"07/2011",
          dateEnd:"01/2012",
          status:"Intern",
          remote:0,
          description: "Provide psychological techniques for top athletes, like motivation, attention, self-confidence and decreasing the levels of stress and anxiety.",
          logo: "default.png"
        },
        {
          id: "516",
          location:"México City, México",
          title:"Licenciatura, Psicología",
          company:"Universidad Nacional Autónoma de México",
          dateStart: "2007",
          dateEnd: "2011",
          status:"Student",
          remote: 0,
          description: "",
          logo: "default.png"
        }
      ]
    }
  }
  return (
    <Layout pageTitle="Mali - KramerGatos">
      <Splash />
      <Intro data={data.url} />
      <Jobs data={data.career} />
    </Layout>
  )
}
export default Mali
