import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Peter Bruno",
  initials: "PB",
  location: "Morogoro, Tanzania, GMT",
  locationLink: "https://maps.app.goo.gl/3Spy2b93zDscuJ5u6",
  about:
    "Innovative Software Developer with a passion for building efficient, scalable, and user-focused applications.",
  summary:
    "Full-Stack Developer with great experience in Python, JavaScript, ReactJS, Next.js, and Docker. I develop responsive web applications, focusing on intuitive design with Figma and strong back-end development using REST APIs. Additionally, this work covers database management with MySQL and PostgreSQL for an effective and safe treatment of data. I love implementing clean code and, of course, learning something new every day—that is why I am prepared to face the new challenges.",
  avatarUrl: "https://avatars.githubusercontent.com/u/68355315?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "aloyceptrsn@gmail.com",
    tel: "+255 674 373 436",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/petersonbruno",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/peterson-bruno-0aba32205/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/petersonbruno",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Sokoine University of Agriculture",
      degree: "Diploma in Information and Technology",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "LevelsProTech",
      link: "https://linkedin.com/company/levelsprotech/",
      badges: ["Remote"],
      title: "Software Developer",
      logo: ConsultlyLogo,
      start: "2022",
      end: null,
      description:
        "We develop innovative software solutions to streamline and automate daily tasks, enhancing productivity and simplifying routines.",
    },
    {
      company: "Geoclimatz",
      link: "https://www.linkedin.com/company/geoclimatz/",
      badges: ["Remote"],
      title: "System Administrator",
      logo: ParabolLogo,
      start: "2024",
      end: null,
      description:
        "Infrastructure Management: Overseeing and maintaining servers, databases, and network systems to ensure reliable data storage, processing, and accessibility.",
    },
    // {
    //   company: "Clevertech",
    //   link: "https://clevertech.biz",
    //   badges: ["Remote"],
    //   title: "Lead Android Developer → Full Stack Developer",
    //   logo: ClevertechLogo,
    //   start: "2015",
    //   end: "2021",
    //   description:
    //     "Created Android mobile apps and led teams for companies like Vision Media, DKMS, and AAA. Built a live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: [],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description:
    //     "Led the Android team and developed apps for major Polish companies like LOT, Polskie Radio, Agora, and PolskaPress",
    // },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Developed and tested software for LTE base stations",
    // },
  ],
  skills: [
    "Python",
    "Django",
    "RestFull API",
    "JavaScript",
    "ReactJs",
    "NextJs",
    "MySQL",
    "Postgress",
    "HTML5, CSS",
    "Docker"

  ],
  projects: [
    {
      title: "Matokeo WebApp",
      techStack: [
        "NextJs",
        "REST Framework",
        "Django",
        "MySQL",

      ],
      description:
        "I built a simple interface that allows teachers to enter results easily and automatically export structured Excel reports.The goal is clear: reduce workload, improve accuracy, and support educators with practical technology.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://matokeo-beta.vercel.app/matokeo?token=YOUR_TOKEN_HERE",
      },
    },
    {
      title: "SmartSchool App",
      techStack: [
        "Django",
        "REST Framework",
        "MySQL",

      ],
      description:
        "Developed an app back-end for LevelsProTech that helps teachers automate their daily tasks, such as planning results, scheduling timetables, managing tasks, and merging multiple results from Excel files.",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "link",
      },
    },
    {
      title: "Ecommerce Website",
      techStack: ["Django", "Nextjs", "RestAPI", "MySQL"],
      description:
        "I developed an online computer and accessories store that allows customers to easily browse products, view specifications, and place orders. The platform simplifies product selection while enabling the seller to manage orders and coordinate deliveries efficiently.",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://levelsprotechshop.vercel.app/",
      },
    },
    {
      title: "LevelsProTech Website",
      techStack: ["HTML", "CSS", "JavaScript", "EmailJs"],
      description:
        "LevelsProTech Organization Website is a modern and user-friendly platform designed to showcase the organization’s services, projects, and mission. The website provides easy access to information, improves online visibility, and allows clients to connect with the organization efficiently.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://levelsprotech.netlify.app/",
      },
    },
    {
      title: "GeoclimaTz Website",
      techStack: ["HTML", "CSS", "JavaScript", "EmailJs"],
      description:
        "GeoClimaTz Website is a professional online platform designed to present climate, environmental, and geospatial solutions offered by the organization. The website showcases services, projects, and research activities while providing clients and partners with easy access to information and contact options.",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://geoclimatz.org/",
      },
    },
    {
      title: "Vicoba Management System",
      techStack: ["Django", "Next.js", "Reast API"],
      description:
        "I developed a web application that helps manage and automate the operations of a vicoba (a type of microfinance institution). The system allows users to easily track contributions, manage loans, and generate reports, streamlining the administrative tasks associated with running a vicoba.",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://vicoba-tawny.vercel.app/",
      },
    },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description: "Howdy is a place for joining communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
