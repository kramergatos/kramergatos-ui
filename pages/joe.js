import Layout from '../components/Joe/Layout'
import Stickers from '../components/Joe/Stickers'
import Tech from '../components/Joe/Tech'
import About from '../components/Joe/About'
import Qualifications from '../components/Joe/Qualifications'
import HireMe from '../components/Joe/HireMe'
import Jobs from '../components/Joe/Jobs'
function Joe() {
  const data = {
    qualifications: [
      {id: 1, title: "I have an affinity for all things art and engineering, but my expertise is in custom designing new enterprise level applications from scratch."},
      {id: 2, title: "Well-rounded professional software engineer with over sixteen years of experience designing, developing, and maintaining diverse sets of technologies for small businesses, startups, and large international corporations."},
      {id: 3, title: "Committed to meeting industry standards and best practices. Establishes processes, workflow, communication, and tools for an effective and efficient engineering team. Writes exceptionally clean and documented code."},
      {id: 4, title: "Lifelong learner. Constantly researching and testing new technologies and processes."},
      {id: 5, title: "Comprehensive understanding and experience of the complete life cycle of development: from discovery and business analysis, defining requirements and priorities, user experience design, full stack development, testing and debugging, to deployment of product releases."},
      {id: 6, title: "Decisive leader of initiatives to promote organizational growth and optimal utilization of emerging technologies."},
      {id: 7, title: "Excellent collaboration skills. Works great in small teams as well as individually and remotely. Helps teach and train others with valuable insight. Helps others troubleshoot coding problems and debugging."},
      {id: 8, title: "Skilled in solving extremely complex logic problems in large systems as well as applying artistic visual qualities in extraordinary precision and detail."}
    ],
    url: {
      instagram: "https://www.instagram.com/kramergatos/",
      facebook: "https://www.facebook.com/joe.kramergatos",
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
        description: "Developed video player agnostic AdTech capabilities to display a variety of ad formats on top of or around the video player on desktop and mobile devices.",
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
        description: "Short contract helping on a data management and rules project using PHP and Directus.",
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
        description: "Strategy, architecture, and documentation of proposed complete product overhaul of infrastructure, backend, and frontend. Recruited and built internal engineering team, managed team, start rebuilding the product from scratch in new technologies.",
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
        description: "Strategy, architecture, and building new features to three brand new enterprise level internal tools used for research and system performance monitoring of the entire Dell ecosystem from infrastructure to apps.",
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
        description: "Designed and built APIs for user promo codes, and app health monitoring. Built scripts to manage video content using Brightcove API. Sent users email & push notifications for sweepstakes winners.",
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
        description:"Designed and built websites and apps as dev shop. Consulted to early stage startups. Worked with gov contractor on technical aspects of contracts when applying to gov RFPs.",
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
        description:"Designed and built next gen interactive video player from scratch. Built platform and distribution network for deploying technology to a variety of media clients. Recruited, hired, managed engineering team.",
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
        description:'Full Stack Development writing, testing, and debugging multiple high traffic mobile ready web applications with a focus on video streaming.',
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
        description:'Full Stack Development created custom CMS web app that connected with other company software, had dashboard for visualizing user data from a hardware radar system used in golf training, and had leaderboard and community features. Worked in conjunction with and assigned tasks out to development teams in South Africa and Poland. Worked directly with project Architect and Designer daily to help set the direction of the project and advise on capabilities of technologies used. Researched and picked technologies that met our project requirements. Designed and built out the entire backend structure of the site, and how it operates and communicates with other company software. Customized WordPress to extend database tables and to extend built in functions to get completely custom functionality. Hand wrote 17,000 lines of custom code from scratch for the website and built-in custom CMS system. Emphasis on usability, user experience, and responsive design.',
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
        description:'Front End Development created over 200 marketing websites for affiliate projects and websites and emails for our company’s events at advertising conferences. Creation of websites, emails, and other media for in-house and affiliate projects that go into the exclusive Clickbooth CPA & CPC network. Develop creative and innovative solutions to common and leading edge design/programming challenges while maintaining multi browser compatibility. Researching, exploring, and testing new technologies and processes to continually improve coding best practices, performance, reduced load time, efficiency, features, and reducing project development time while maintaining accuracy. Wrote the UI Development department’s Coding Standards / Best Practices guide. Create mockups, images, UI components, and research specific issues and help debug code for the software team. Hacked WordPress installs to get completely custom functionality. All projects achieve exact match down to the pixel replica between design mockups and final product. Cross train new employees on company coding practices, processes, and helping troubleshoot code.',
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
        description:'Freelance design and Full Stack Development under my own brand while attending high school. Completed a variety of projects for small companies and sports teams in the local area. Taught myself PHP and related technologies.',
        logo: "jktheory.png"
      }
    ]
  }
  return (
    <Layout data={data.url}>
      <About />
      <HireMe />
      <Qualifications data={data.qualifications} />
      <Tech data={data.tech} />
      <Stickers />
      <Jobs data={data.jobs} />
    </Layout>
  )
}
export default Joe
