import Layout from '../components/Global/Layout'
import Splash from '../components/Joe/Splash'
import Stickers from '../components/Joe/Stickers'
import Tech from '../components/Joe/Tech'
import About from '../components/Joe/About'
import Photos from '../components/Joe/Photos'
import Quote from '../components/Joe/Quote'
import Qualifications from '../components/Joe/Qualifications'
import HireMe from '../components/Joe/HireMe'
import Jobs from '../components/Jobs/Jobs'
function Home() {
  const data = {
    qualifications: [
      {id: 1, title: "I have an affinity for all things art and engineering, but my expertise is in custom designing new enterprise level applications from scratch."},
      {id: 2, title: "Well-rounded professional software engineer with over sixteen years of experience designing, developing, and maintaining diverse sets of technologies for small businesses, startups, and large international corporations."},
      {id: 3, title: "Committed to meeting industry standards and best practices. Establishes processes, workflow, communication, and tools for an effective and efficient engineering team. Writes exceptionally clean and documented code."},
      {id: 4, title: "Lifelong learner. Constantly researching and testing new technologies and processes."},
      {id: 5, title: "Comprehensive understanding and experience of the complete life cycle of development: from discovery and business analysis, defining requirements and priorities, user experience design, full stack development, testing and debugging, to deployment of product releases."},
      {id: 6, title: "Decisive leader of initiatives to promote organizational growth and optimal utilization of emerging technologies."},
      {id: 7, title: "Excellent collaboration skills. Works great in small teams as well as individually and remotely. Helps teach and train others with valuable insight. Helps others troubleshoot coding problems and debugging."},
      {id: 8, title: "Skilled in solving extremely complex logic problems in large systems as well as applying artistic visual qualities in extraordinary precision and detail."},
      {id: 9, title: "Built enterprises from concept into production with millions of users."},
      {id: 10, title: "Exceptional at finding and recruiting the best engineers, and building teams with a great culture."}
    ],
    url: {
      linkedin: "https://www.linkedin.com/in/kramergatos/",
      angellist: "https://angel.co/u/kramergatos"
    },
    tech: [
      {id: 1, type: "Language", title: "JavaScript"},
    	{id: 31, type: "Programming", title: "TypeScript"},
    	{id: 7, type: "Framework", title: "NodeJS"},
      {id: 7, type: "Framework", title: "NextJS"},
    	{id: 10, type: "Framework", title: "ReactJS"},
    	{id: 9, type: "Framework", title: "ExpressJS"},
    	{id: 17, type: "Programming", title: "GraphQL"},
    	{id: 24, type: "Programming", title: "HTML"},
    	{id: 26, type: "Programming", title: "CSS"},
    	{id: 47, type: "Infrastructure", title: "AWS"},
    	{id: 81, type: "Database", title: "DynamoDB"},
    	{id: 86, type: "Database", title: "MongoDB"},
    	{id: 87, type: "Database", title: "NoSQL"},
    ],
    career: {
      resume: "JoeKramerResume.pdf",
      coverLetter: "JoeKramerCoverLetter.pdf",
      jobs: [
        {
          id: "501",
          location: "Austin, TX, USA",
          title: "Senior Full Stack Software Engineer",
          company: "CatapultX",
          url: "https://catapultx.com/",
          dateStart: "10/2020",
          dateEnd: "07/2021",
          status: "Employee",
          remote: 1,
          description: "Developed next gen video player agnostic AdTech to display a variety of ad formats on top of or around the video player on desktop and mobile devices using TypeScript.",
          logo: "catapultx.jpeg"
        },
        {
          id: "502",
          location: "Austin, TX, USA",
          title: "Full Stack Software Engineer",
          company: "Hearst",
          url: "https://www.hearst.com/",
          dateStart: "07/2020",
          dateEnd: "09/2020",
          status: "Contract",
          remote: 1,
          description: "Data management and rules project using PHP and Directus for new AdTech solutions for newspaper and tv station websites.",
          logo: "hearst.jpeg"
        },
        {
          id: "503",
          location: "Austin, TX, USA",
          title: "Solutions Architect",
          company: "Wambi",
          url: "https://wambi.org/",
          dateStart: "07/2019",
          dateEnd: "03/2020",
          status: "Employee",
          remote: 1,
          description: "Strategy, architecture, and documentation of complete product overhaul of infrastructure, apps, and UI. Recruited, built and managed internal engineering team of 6. Started rebuilding the product from scratch in NodeJS, NextJS, ReactJS, AWS.",
          logo: "wambi.png"
        },
        {
          id: "504",
          location: "Round Rock, TX, USA",
          title: "Principal Software Engineer",
          company: "Dell",
          url: "https://www.dell.com/",
          dateStart: "02/2019",
          dateEnd: "07/2019",
          status: "Contract",
          remote: 2,
          description: "Worked with SRE Team to develop enterprise level internal tools. Built D3JS graphing & filtering dashboard UI for system performance monitoring of the entire Dell ecosystem from infrastructure to apps in a new mobile C#.NET Xamarin app. Built additional features into a Chrome Browser Extension, and the UI of C#.NET app used for product research.",
          logo: "dell.jpeg"
        },
        {
          id: "505",
          location: "Austin, TX, USA",
          title: "Senior Software Engineer",
          company: "NBC Universal",
          url: "https://www.nbc.com/",
          dateStart: "08/2018",
          dateEnd: "12/2018",
          status: "Contract",
          remote: 1,
          description: "Built API for app health monitoring and notifications with NodeJS, AWS Lambda. Built PHP scripts to utilize Brightcove API to retrieve, search, edit, & delete content in media library. Built API with NodeJS, AWS Lambda, DynamoDB to manage promo codes and winners and sent emails & push notifications to users with Leanplum.",
          logo: "nbc.png"
        },
        {
          id: "506",
          location:"Tampa, FL",
          title:"CEO and Co-Founder",
          company:"Nikola Advanced Research Laboratories Inc",
          dateStart: "03/2017",
          dateEnd: "08/2018",
          status: "Employee",
          remote: 1,
          description:"Designed and built NodeJS, NextJS, ReactJS apps deployed on AWS for a variety of clients. Recruited, hired, trained, managed a cross functional team of 12.",
          logo: "nikola.png"
        },
        {
          id: "507",
          location:"Austin, TX, USA",
          title:"SVP Engineering",
          company:"KERV Interactive",
          url: "https://kervit.com/",
          dateStart: "09/2014",
          dateEnd: "01/2018",
          status: "Employee",
          remote: 1,
          description:"Designed and built award winning, next gen, video player agnostic, interactive AdTech from scratch with NodeJS, ExpressJS, VAST, VPAID, AWS. Built a custom platform for content and campaign configuration. Recruited, hired, trained, and managed engineering team of 9.",
          logo: "kerv.png"
        },
        {
          id: "508",
          location:"Miami Beach, FL, USA",
          title:"Software Engineer",
          company:"Junta",
          dateStart: "07/2013",
          dateEnd: "09/2014",
          status: "Employee",
          remote: 0,
          description:'Built a custom CMS platform with PHP, Symfony2. Built UI of video heavy web apps.',
          logo: "default.png"
        },
        {
          id: "509",
          location:"Orlando, FL, USA",
          title:"Web Developer",
          company:"Florida Virtual School",
          url: "https://flvs.net/",
          dateStart: "04/2013",
          dateEnd: "06/2013",
          status: "Contract",
          remote: 0,
          description:'Front End Development debugging and testing code for online educational courses as well as reverse engineering Flash based components into HTML5 and JavaScript.',
          logo: "flvs.png"
        },
        {
          id: "510",
          location:"Winter Garden, FL, USA",
          title:"Web Developer",
          company:"Container Centralen",
          url: "http://www.cc-racks.com/",
          dateStart: "12/2012",
          dateEnd: "04/2013",
          status: "Contract",
          remote: 2,
          description:'Full Stack Development designing and building a custom web application from scratch in C#.NET that has a public corporate home site as well as an authorized area for customers and employees to manage data and accounts. Business Analysis, application architecture, database design, web and graphic design. Initiated getting Git / GitHub implemented for our source control.',
          logo: "cc.jpg"
        },
        {
          id: "511",
          location:"Orlando, FL, USA",
          title:"Team Lead Front End Developer",
          company:"FlightScope",
          url: "https://flightscope.com/",
          dateStart: "05/2012",
          dateEnd: "09/2012",
          status: "Employee",
          remote: 2,
          description: "Full Stack Development of a new web app in PHP, JS, HTML, CSS that was a community site for the physical golf radar product that showed your performance super imposed on the golf course map, as well as leaderboard competition.",
          logo: "flightscope.png"
        },
        {
          id: "512",
          location:"Sarasota, FL, USA",
          title:"UI Developer",
          company:"IntegraClick",
          url: "https://www.performcb.com/clickbooth/",
          dateStart: "12/2010",
          dateEnd: "05/2012",
          status: "Employee",
          remote: 0,
          description: "Worked closely with the design team for building emails and over 200 websites using JavaScript, jQuery, HTML, CSS for marketing landing pages of multimillion dollar campaigns. Debugging and researching issues in the AdTech platform company was developing for managing marketing campaigns.",
          logo: "integraclick.jpg"
        },
        {
          id: "513",
          location:"Riverview, FL, USA",
          title:"IT Consultant",
          company:"Metrohm USA",
          url: "https://www.metrohm.com/en-us/",
          dateStart: "02/2010",
          dateEnd: "12/2010",
          status: "Contract",
          remote: 2,
          description:'Full stack development building out three websites and migrated content into a new CMS system. Served as liaison between Metrohm USA and the development team of the parent company Metrohm AG in Switzerland. Also built a simple Windows Console Application to track company computers. Content design and management, contact management, data migration into a CMS system, web services, SQL server, web design, graphic design, analytics, social media, marketing campaigns, communications.',
          logo: "musa.png"
        },
        {
          id: "514",
          location:"Tampa, FL, USA",
          title:"Web Developer",
          company:"ReliaQuest",
          url: "https://www.reliaquest.com/",
          dateStart: "07/2009",
          dateEnd: "02/2010",
          status: "Contract",
          remote: 2,
          description:'Back End Development of websites and apps for a talent recruitment firm. Worked on three websites, including building the C# ASP.NET backends from scratch for two of them. Taught myself MS .NET Framework and related technologies. I also designed and managed databases, content design and management, graphic design.',
          logo: "reliaquest.png"
        },
        {
          id: "515",
          location:"Tampa, FL, USA",
          title:"Student",
          company:"University of South Florida",
          dateStart:"08/2007",
          dateEnd:"12/2009",
          status:"Student",
          remote:0,
          description:'Studied Management Information Systems, Engineering, Architecture. Alpha Epsilon Pi fraternity Psi Phi chapter; Vice President (Fall 2008 - Spring 2009).',
          logo: "usf.jpeg"
        },
        {
          id: "516",
          location:"Laurel, MD, USA",
          title:"Owner and Founder",
          company:"JKtheory Design",
          dateStart: "02/2003",
          dateEnd: "07/2006",
          status:"Freelance",
          remote: 1,
          description: "Freelance design and development of websites using PHP, HTML, CSS and tshirt printing for small local businesses and organizations while attending high school.",
          logo: "jktheory.png"
        }
      ]
    }
  }
  return (
    <Layout pageTitle="Joe - KramerGatos">
      <Splash data={data.url} />
      <About />
      <Photos />
      <Quote />
      <HireMe />
      <Qualifications data={data.qualifications} />
      <Tech data={data.tech} />
      <Stickers />
      <Jobs data={data.career} />
    </Layout>
  )
}
export default Home
