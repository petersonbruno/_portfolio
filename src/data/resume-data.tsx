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
    "Innovative Full-Stack Developer with a passion for crafting seamless, user-centric web applications.",
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
    "MySQL",
    "HTML5, CSS",
    "Docker"
  
  ],
  projects: [
    {
      title: "Uni Collect App",
      techStack: [
        "Django",
        "REST Framework",
        "MySQL",
        
      ],
      description:
        "Developed an app back-end that allows students to buy past papers online for their specific courses by subscribing to different packages.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "link",
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
      title: "Victory Website",
      techStack: ["HTML", "CSS", "JavaScript", "EmailJs"],
      description:
        "I build and deploy websites online for customers. I also utilize Django for backend development to create robust and dynamic web applications",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://66c2e8f00e2299a21dc91f80--nimble-belekoy-793055.netlify.app/",
      },
    },
    {
      title: "LevelsProTech Website",
      techStack: ["HTML", "CSS", "JavaScript", "EmailJs"],
      description:
        "I build and deploy websites online for customers. I also utilize Django for backend development to create robust and dynamic web applications",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://levelsprotech-website.vercel.app/",
      },
    },
    {
      title: "GeoclimaTz Website",
      techStack: ["HTML", "CSS", "JavaScript", "EmailJs"],
      description:
        "I build and deploy websites online for customers. I also utilize Django for backend development to create robust and dynamic web applications",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "link",
      },
    },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
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
