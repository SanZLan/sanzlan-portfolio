import {
  /* algorithms, */
  /* devnotes, */
  /* oscs, */
  redesign,
  automation,
  dashboard

} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const about = [
      "My name is <span style='color: white;'>Santiago Zuluaga Langton</span>. I'm a <span style='color: white;'>full-stack developer, data analyst and economist</span> based in <span style='color: white;'>Bogotá, Colombia</span>. With professional foundations in consulting services, development of indicators for project evaluation and processing of large datasets to generate visualizations and insights, my curiosity and <span style='color: white;'>passion for technology</span> led me to pursue a career in <span style='color: white;'>development</span>.",
      "My day-to-day work at a <span style='color: white;'>streaming service company</span> includes delivering <span style='color: white;'>fun and functional front-end experiences</span> for customers, writing scripts to <span style='color: white;'>automate processes</span> and <span style='color: white;'>scrape data</span> and managing other <span style='color: white;'>IT solutions and infrastructure</span> processes.",
      "I have strong skills in <span style='color: white;'>modern web technologies</span> such as <span style='color: white;'>React, Redux, Next.js, TypeScript, Node.js, REST APIs, GraphQL, SQL and NoSQL</span>, as well as <span style='color: white;'>GIT version control</span>, <span style='color: white;'>unit testing</span>, and <span style='color: white;'>end-to-end testing</span>. I'm currently working on further developing these abilities by focusing on stronger manipulation of <span style='color: white;'>3D modeling</span> with Three.js, Drei and React Three Fiber; <span style='color: white;'>animations</span> with Framer Motion and the exploration of <span style='color: white;'>AI</span> and its possibilities.",
      "When I'm not at the computer, I'm usually hanging out with my girlfriend and our two dogs, playing videogames, reading, or trying to <span style='color: white;'>learn about something new</span>. I love motorcycles, science, technology, the tenacity of the human siprit, and of course...</br> <span style='color: white;'><a class='cursor-voyager relative group inline-block' href='https://voyager.jpl.nasa.gov/golden-record/golden-record-cover/'>the Voyagers and their Golden Records!<span class='block h-1 bg-amber-400 transform scale-x-100 sm:scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out duration-200'></span></a></span>"
];

const experiences = [
  {
    title: "Full-Stack Web Developer",
    company_name: "Ilustre LLC",
    date: "2022 - Present",
    details: [
      "Led and coordinated the website's <span style='color: white;'>front-end redesign project</span>, focusing on enhancing user experience and optimizing user flow. Successfully <span style='color: white;'>managed a small team</span> and collaborated with a recruited UI/UX designer to execute the redesign process effectively.",
      "Responsible for <span style='color: white;'>maintaining and updating</span> the company's website.",
      "<span style='color: white;'>Optimized company processes through automation</span> of several tasks and the <span style='color: white;'>scraping of information</span> by scripting said processes in <span style='color: white;'>Python with Playwright</span>.",
      "Experienced in creating new <span style='color: white;'>pages and components templates</span> using <span style='color: white;'>Liquid templating language</span>.",
      "Designed and implemented a <span style='color: white;'>gamification system</span>, enhancing <span style='color: white;'>user engagement</span> and incentivizing desired user behaviors.",
    ],
  },
  {
    title: "Production Coordinator",
    company_name: "Bogota International Film Festival - Biff",
    date: "2018 - 2023",
    details: [
      "Spearheaded the development of a <span style='color: white;'>Google Apps Script</span>, written in Javascript, designed to calculate the winner of the <span style='color: white;'>Audience Choice Award</span>.",
      "The app efficiently <span style='color: white;'>processed and analyzed</span> public votes, enhancing the overall <span style='color: white;'>engagement and interaction</span> during the festival.",
    ],
  },
  {
    title: "Data Analysis Professional",
    company_name: "Cifras & Conceptos",
    date: "2017 - 2022",
    details: [
      "<span style='color: white;'>Created applets</span> to capture polling information using <span style='color: white;'>ODK, XLSForm, and KoboToolbox</span>.",
      "<span style='color: white;'>Developed frontend of websites</span> containing forms used to collect polling responses.",
      "<span style='color: white;'>Managed and analyzed primary information</span> from surveys using statistical packages like <span style='color: white;'>SPSS and Stata</span>, and <span style='color: white;'>Python</span> libraries such as <span style='color: white;'>Pandas and Numpy</span>, ensuring accurate data processing and interpretation.",
      "<span style='color: white;'>Proficiently presented dynamic</span> statistical information using <span style='color: white;'>Tableau and PowerBI</span>, translating complex data into comprehensible <span style='color: white;'>visual dashboards</span>.",
    ],
  },
  {
    title: "IT Coordinator",
    company_name: "La Tercera Mirada",
    date: "2012 - 2013",
    details: [
      "<span style='color: white;'>Developed dashboards using VBA</span> (Visual Basic for Applications), specifically designed to <span style='color: white;'>monitor and track improvements in indicators</span>.",
      "Provided <span style='color: white;'>technical support</span> and guidance to clients, inlcuding several <span style='color: white;'>big-impact NGOs</span> ensuring seamless operations and addressing their technical requirements effectively.",
      "<span style='color: white;'>Managed and maintained</span> the enterprise system of <span style='color: white;'>Google Apps</span>, ensuring its <span style='color: white;'>functionality and reliability</span> within the organization.",
    ],
  },
];

const portfolio = [
  {
    name: "Front-end redesign",
    description:
      "Spearheaded a complete redesign of the front-end of a streaming service website focusing on enhancing user experience and optimizing user flow.",
    image: redesign,
  },
  {
    name: "Automation and scraping",
    description:
      "Optimization of company processes through the automation and scraping of information by scripting said processes. Work done with Python using Playwright.",
    image: automation,
  },
  {
    name: "Data processing and analysis",
    description:
      "Experienced in data processing and analysis generating insights for the collected data.",
    image: dashboard,
  },
];

export { about, portfolio, experiences };

