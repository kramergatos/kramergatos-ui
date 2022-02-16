import Header from './Header'
import Stickers from './Stickers'
import Skills from '../Career/Skills'
import About from './About'
import Photos from './Photos'
import Quote from './Quote'
import Qualifications from '../Career/Qualifications'
import HireMe from './HireMe'
import Jobs from '../Career/Jobs'
import Accolades from '../Career/Accolades'
import Arts from './Arts'
import Footer from './Footer'
export default function Page() {
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
      {id: 10, title: "Exceptional at finding and recruiting the best engineers, and building teams with a great culture."},
      {id: 11, title: "Communication with clients to articulate and simplify complex technology, demo products, and assist with questions and integrations."}
    ],
    url: {
      linkedin: "https://www.linkedin.com/in/kramergatos/",
      angellist: "https://angel.co/u/kramergatos"
    },
    skills: [
      {id: 24, type: "Programming", title: "HTML / CSS", years: "16"},
      {id: 1, type: "Language", title: "JavaScript", years: "12"},
      {id: 16, type: "Programming", title: "JSON", years: "12"},
      {id: 21, type: "Programming", title: "jQuery", years: "9"},
    	{id: 31, type: "Programming", title: "REST APIs", years: "8"},
    	{id: 7, type: "Framework", title: "NodeJS", years: "8"},
      {id: 9, type: "Framework", title: "ExpressJS", years: "8"},
    	{id: 47, type: "Infrastructure", title: "AWS", years: "8"},
    	{id: 81, type: "Database", title: "AWS DynamoDB", years: "6"},
    	{id: 85, type: "Database", title: "MySQL", years: "4"},
    	{id: 26, type: "Programming", title: "PHP", years: "4"},
    	{id: 86, type: "Database", title: "MongoDB", years: "2"},
      {id: 93, type: "Programming", title: "AWS Lambda", years: "2"},
    	{id: 87, type: "Programming", title: "C#.NET", years: "2"},
      {id: 97, type: "Framework", title: "NextJS", years: "1"},
    	{id: 10, type: "Framework", title: "ReactJS", years: "1"},
      {id: 46, type: "Programming", title: "TypeScript", years: "1"},
    	{id: 61, type: "Programming", title: "GraphQL", years: "1"},
    	{id: 17, type: "Programming", title: "D3JS", years: "1"},
    ],
    experience: {
      resumeHumanReadable: "JoeKramerResume.pdf",
      resumeMachineReadable: "JoeKramerResume-MachineReadable.docx",
      coverLetterHumanReadable: "JoeKramerCoverLetter.pdf",
      coverLetterMachineReadable: "JoeKramerCoverLetter-MachineReadable.docx",
      jobs: [
        {
          id: "500",
          location: "San Francisco, CA, USA",
          title: "Director of Engineering - Usability",
          company: "i2Chain",
          url: "https://i2chain.com/",
          dateStart: "11/2021",
          dateEnd: "01/2022",
          status: "Employee",
          remote: 1,
          description: "Leading Front End development with offshore team on an innovative next generation security solution for enterprises that encrypts, injects rights management, and traceability into documents. Working with clients on testing, implementation, and features.",
          logo: "i2chain.png"
        },
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
          description: "Strategy, architecture, and documentation of complete product overhaul of infrastructure, apps, and UI. Recruited, built and managed internal engineering team of 6. Collaborate with Sales, Account Management, and Customer Service to understand customer pain points with current product and desired features in the next version. Started rebuilding the product from scratch in NodeJS, NextJS, ReactJS, AWS.",
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
          description:"Designed and built NodeJS, NextJS, ReactJS apps deployed on AWS for a variety of clients. Recruited, hired, trained, managed a cross functional team of 12. Sales, fund raising, and partnering with a gov contractor for RFPs.",
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
          description:"Designed and built award winning, next gen, video player agnostic, interactive AdTech from scratch with NodeJS, ExpressJS, VAST, VPAID, AWS. Built a custom platform for content and campaign configuration. Recruited, hired, trained, and managed engineering team of 9. Sales Engineer for client demos and integrations as well as company M&A events including due diligence.",
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
          description:'Studied Management Information Systems, Engineering, Architecture. Alpha Epsilon Pi fraternity Psi Phi chapter; Vice President (Fall 2008 - Spring 2009). I dropped out of college early when I realized I was already learning and using the latest cutting edge technologies and becoming proficient in my work as a software engineer for local companies, and how much time and money I would save by skipping a slow, outdated, and expensive curriculum.',
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
    },
    accolades: [
      {
        id: "801",
        name: "Daniel Gih",
        date: "5/24/2016",
        description: "Right from the start, I could tell that Joe was experienced, patient, and a unicorn. During the time I worked with him, I learned of and appreciated his resilient nature that was extremely necessary in a startup. He was always understanding and consistently helped me with my career progression throughout Grabit. His skills communication and management was great, given our remote environment. Joe asked all the critical questions, poked holes into everything and was a architecture wizard. He was a critical part of my personal growth and I value him as a friend. Cheers to crossing paths again professionally!"
      },
      {
        id: "802",
        name: "Jeremy Brenner",
        date: "5/5/2016",
        description: "Joe is hands down one of the most versatile and talented people I have ever had the pleasure to know or work with. He has an experienced, honed, and effective set of engineering skills that allow him to tackle problems all the way from complex architecture design, through to complete software. His technical ability and personality make him the type of leader you WANT to follow. Joe is always looking out for everybody on his team, and beyond his ability to create great products, he is just an excellent leader overall. He truly invests himself in everything he makes, and the people he works with. Anybody, including myself, would be lucky to have him as part of a team."
      },
      {
        id: "803",
        name: "Joseph Nowak",
        date: "8/5/2013",
        description: "Joe was an absolute pleasure to work with. During our time Joe was responsive, personable, and honest about his needs and how they fit in with the client needs. He has proven to also be punctual and extremely dedicated to not only software development but personal growth, learning many new technologies concurrently. I look forward to keeping in touch with Joe and I know his new client is very satisfied with him and his work."
      },
      {
        id: "804",
        name: "Max Milord",
        date: "5/27/2013",
        description: "I had the pleasure of working with Joe for a short while, but he left no doubt in my mind that he is a highly talented professional Web Developer. He completed his assignments with the utmost efficiency and attention to details."
      },
      {
        id: "805",
        name: "Sam Boix",
        date: "10/18/2012",
        description: "When Joe worked for me he was always full of energy and positive about our projects. He always strived to have the cleanest code possible, and always pushed hard to create what we had envisioned for the business. He worked impossibly long hours to meet our extremely compressed timelines, and always did so without me ever having to ask. Joe is creative, dedicated, and a valuable asset to any team. I hope I get to work with Joe again."
      },
      {
        id: "806",
        name: "Marguerite Martakis",
        date: "5/7/2012",
        description: "I had the pleasure of meeting Joe right at the time our parent company decided to create an open CMS for our global website. If it weren't for Joe, we would have never been able to launch it in the time they required, nor would it have functioned as well or as aesthetically as it did. In a nutshell, Joe turned lemons into lemonade, and gave us a site more functional than even the originators of this system thought it could be. Joe was great to work with on a personal level - never flustered by the obstacles, and quite enjoyed finding a way to break down the barriers put up in front of him. Exactly my type of staff member/colleague... and I was sad to see him leave, but happy that he was moving on to bigger and better things - because that's what he's meant for."
      },
      {
        id: "807",
        name: "Peter Wilson-Ferrer",
        date: "4/17/2012",
        description: "Joe is an excellent UI developer with a keen eye for detail. I could always count on Joe and knew that the job would get done with a high degree of professionalism. He is always looking for innovative ways to make himself even more effective and is not afraid to put in the time and dedication needed to achieve perfection. I enjoyed working with Joe and would look forward to the opportunity to do so again in the future."
      },
      {
        id: "808",
        name: "Katia Hebeisen",
        date: "1/12/2012",
        description: "Joe is a skilled developer and has been a great asset to our team. He is always eager to research and learn new techniques, follow best practices and assist on any project necessary. He is driven and willing to work any number of hours to complete a project. He is eager to absorb information from his peers as well as to train and share his areas of expertise. He is forward thinking and constantly develops new methods of organization to be more efficient and consistent in production. It's been a pleasure to work with Joe and he is a dependable resource for any team."
      },
      {
        id: "809",
        name: "Paul Downie",
        date: "1/10/2012",
        description: "I have worked with Joe for the last year and have come to rely on him as my go-to developer. He's easy to work with, a strong leader and extremely knowledgeable. His ability to produce efficient and quality work under any circumstance has had a considerable monetary impact on business. I am happy to have been able to work with him and hope to continue to do so in the future."
      },
      {
        id: "810",
        name: "Xeon Xai",
        date: "9/1/2011",
        description: "Joe is a very strong UI Developer, with exceptional skills in Adobe Photoshop. He has spent countless hours maintaining new layouts with ease."
      }
    ],
    art: [
      {
        id: "a1",
        title: "Spectrum",
        image: "Spectrum-min.jpg",
        medium: "oil paint",
        dimensions: "20\"x24\"",
        date: "10/2014",
      },
      {
        id: "a12",
        title: "In The Light Of Sunrise",
        image: "InTheLightOfSunrise-min.jpg",
        medium: "oil paint",
        dimensions: "24\"x48\"",
        date: "12/2013",
      },
      {
        id: "a13",
        title: "Found",
        image: "Found-min.jpg",
        medium: "oil paint",
        dimensions: "48\" x 36\"",
        date: "02/2013",
      },
      {
        id: "a14",
        title: "Heavy Distortion in Parallel",
        image: "HeavyDistortionInParallel-min.jpg",
        medium: "oil paint",
        dimensions: "48\" x 36\"",
        date: "12/2012",
      },
      {
        id: "a15",
        title: "Waves Washing Over Openness",
        image: "WavesWashingOverOpenness-min.jpg",
        medium: "oil paint",
        dimensions: "48\" x 36\"",
        date: "06/2012",
      },
      {id: "a16",
        title: "Many Directions, All Facing Up",
        image: "ManyDirectionsAllFacingUp-min.jpg",
        medium: "oil paint",
        dimensions: "36\" x 48\"",
        date: "10/2011",
      },
      {
        id: "a17",
        title: "ZOE",
        image: "ZOE-min.JPG",
        medium: "spray paint",
        dimensions: "8' x 8'",
        date: "09/2010",
      },
      {
        id: "a18",
        title: "Flow",
        image: "Flow-min.jpg",
        medium: "oil paint",
        dimensions: "48\" x 36\"",
        date: "07/2010",
      },
      {
        id: "a19",
        title: "Fuego",
        image: "Fuego-min.JPG",
        medium: "oil paint",
        dimensions: "48\" x 36\"",
        date: "01/2010",
      },
      {
        id: "a20",
        title: "Beautiful Disaster",
        image: "BeautifulDisaster-min.JPG",
        medium: "oil paint",
        dimensions: "48\" x 36\"",
        date: "02/2009",
      },
      {
        id: "a21",
        title: "In Greed We Trust",
        image: "InGreedWeTrust-min.JPG",
        medium: "oil paint",
        dimensions: "22\" x 18\"",
        date: "11/2008",
      },
      {
        id: "a22",
        title: "Random Insanity",
        image: "RandomInsanity-min.jpg",
        medium: "oil paint",
        dimensions: "32\" x 24\"",
        date: "05/2008",
      }
    ]
  }
  return (
    <div>
      <Header data={data.url} />
      <About />
      <Photos />
      <Quote />
      <HireMe />
      <Qualifications data={data.qualifications} />
      <Skills data={data.skills} />
      <Stickers />
      <Jobs data={data.experience} />
      <Accolades data={data.accolades} />
      <Arts data={data.art} />
      <Footer data={data.url} />
    </div>
  )
}
