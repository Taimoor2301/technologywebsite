import {
  amazon,
  salesforce,
  microsoft,
  cloud,
} from "../assets/Navbar/ComapnyImg";

import { cost, industry, innovation, scalability } from "../assets/sec-2";

import screen from "../assets/sec-1/Screenshot_.png";

import { s1, s2, s3, s4 } from "../assets/Navbar/SolutioniImg";

import { one, two, three, four, five, six } from "../assets/sec-3";

export const NavbarData = {
  number: "123-456-789",
  companyPannel: {
    heaing: "Simplifying IT for a complex world.",
    links: [
      { title: "About Us", link: "#" },
      { title: "Why Us", link: "#" },
      { title: "Teams", link: "#" },
      { title: "Carrers", link: "#" },
      { title: "Parteners", link: "#" },
      { title: "Reviews", link: "#" },
    ],
    companies: [
      { name: "Amazon", img: amazon },
      { name: "Google Cloud", img: cloud },
      { name: "Microsoft", img: microsoft },
      { name: "Salesforce", img: salesforce },
    ],
  },
  solutionPannel: {
    servicesLinks: [
      { title: "Managed Services", link: "#" },
      { title: "IT & Consulting Advisory", link: "#" },
      { title: "Cyber Security", link: "#" },
      { title: "Web Development", link: "#" },
      { title: "Mobile Development", link: "#" },
      { title: "Cloud Services", link: "#" },
    ],
    IndustryFocusLinks: [
      { title: "Industry Manufacturing", link: "#" },
      { title: "Transportation Logistic", link: "#" },
      { title: "Healthcare", link: "#" },
      { title: "Banks and Insurance", link: "#" },
      { title: "Consulting Providers", link: "#" },
      { title: "Non Profits", link: "#" },
    ],
    buissnessChallenges: [
      { heading: "Digital Transformation", img: s1 },
      { heading: "Security", img: s2 },
      { heading: "Automation", img: s3 },
      { heading: "Gaining Efficency", img: s4 },
    ],
  },
};

export const MobileNavData = {
  links: [
    {
      title: "H.",
      dropdown: true,
      links: [
        { name: "IT Services", href: "#" },
        { name: "App development", href: "#" },
      ],
    },
    {
      title: "Solutions",
      dropdown: true,
      links: [
        { name: "Android Development", href: "#" },
        { name: "Blockchain", href: "#" },
        { name: "Hyrid App Development", href: "#" },
        { name: "Software Development", href: "#" },
        { name: "Cyber Security", href: "#" },
        { name: "IOS Development", href: "#" },
      ],
    },
    {
      title: "Buisness Challenges",
      dropdown: true,
      links: [
        { name: "Digital Transformation", href: "#" },
        { name: "Blockchain", href: "#" },
        { name: "Security", href: "#" },
        { name: "Automation", href: "#" },
        { name: "Gaining Efficiency", href: "#" },
      ],
    },
    {
      title: "Industaries",
      dropdown: true,
      links: [
        { name: "Industary Manufacturing", href: "#" },
        { name: "Transportation Logistic", href: "#" },
        { name: "Healthcare", href: "#" },
        { name: "Banks & Insurance", href: "#" },
        { name: "Dating App", href: "#" },
      ],
    },
    {
      title: "Company",
      dropdown: true,
      links: [
        { name: "About", href: "#" },
        { name: "Team", href: "#" },
        { name: "Carrers", href: "#" },
        { name: "Parteners & Certifications", href: "#" },
        { name: "Reviews and Awards", href: "#" },
      ],
    },
    {
      title: "Case Study",
      dropdown: false,
      href: "#",
    },
    {
      title: "Blog",
      dropdown: false,
      href: "#",
    },
    {
      title: "Resources",
      dropdown: true,
      links: [
        { name: "FAQ", href: "#" },
        { name: "Events", href: "#" },
        { name: "Schedule a Consultant", href: "#" },
      ],
    },
    {
      title: "Contacts",
      dropdown: false,
      href: "#",
    },
    {
      title: "Client Support",
      dropdown: false,
      href: "#",
    },
  ],
};

export const Section1Data = {
  heading: "We manage your IT, so you can manage your business.",
  subHeading:
    "Take charge of your business continuity  with innovative IT solutions",
  button1: { name: "Schedule a Free Consultion", link: "#" },
  button2: { name: "Services", link: "#" },
  image: screen,
};
export const Section2Data = {
  detailComponents: [
    {
      heading1: 20,
      heading2: "Years",
      heading3: "Proven Track Record",
    },
    {
      heading1: 98,
      heading2: "%",
      heading3: "Customer Satisfaction",
    },
    {
      heading1: 1500,
      heading2: "Projects",
      heading3: "We Have Completed",
    },
    {
      heading1: 3,
      heading2: "Mins",
      heading3: "Average Answer Time",
    },
  ],
  cards: [
    {
      img: cost,
      heading: "Cost-effectiveness",
      details:
        "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    },
    {
      img: innovation,
      heading: "Innovative Technology",
      details:
        "We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.",
    },
    {
      img: industry,
      heading: "Industry Experiance",
      details:
        " We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.",
    },
    {
      img: scalability,
      heading: "Scalability",
      details:
        "Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.",
    },
  ],
};

export const Section3Data = {
  cardData: [
    {
      title: "Managed Services",
      des: "Free up your internal resources to focus on the buisness by letting us handle day to day support services, management , and monitoring of your IT.",
      img: one,
    },
    {
      title: "IT Consulting & Advisory",
      des: "The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth",
      img: two,
    },
    {
      title: "Cyber Security",
      des: " Our Experts can identify vulnerabilities, assecc risks, and impliment robust security measures to safeguard your system and data.",
      img: three,
    },
    {
      title: "Web Development",
      des: "Our web development services can help you establish an impactfull online presence and reach your target audience effictevely.",
      img: four,
    },
    {
      title: "Mobile Development",
      des: "We can help you create a customized mobile app that aligns with your brand and goals, with experties in various mobile platforms.",
      img: five,
    },
    {
      title: "Cloud Services",
      des: "With our experties in cloud technologies, we can help you find the right cloud solution that meets your buisness and goals.",
      img: six,
    },
  ],
  allSolutionsLink: "#",
};

export const Section4data = {
  section4Headings: {
    smallHeading: "How we do",
    mainHeading: "Solving IT challenges in every industry, every day.",
  },
  section4Items: [
    {
      title: "Industary & Manufacturing",
      img: "https://tecnologia.vamtam.com/wp-content/uploads/2023/03/photo-1581091878591-4f0714c6f32f-300x300.jpg",
      link: "#",
    },
    {
      title: "Transportation & Logistics",
      img: "https://tecnologia.vamtam.com/wp-content/uploads/2023/03/gettyimages-1385683178-612x612-1-300x300.jpg",
      link: "#",
    },
    {
      title: "Healthcare",
      img: "https://tecnologia.vamtam.com/wp-content/uploads/2023/03/gettyimages-1156457427-2048x2048-1-300x300.jpg",
      link: "#",
    },
    {
      title: "Banks & Insurence",
      img: "https://tecnologia.vamtam.com/wp-content/uploads/2023/03/gettyimages-173289625-2048x2048-1-300x300.jpg",
      link: "#",
    },
    {
      title: "Consulting  Providers",
      img: "https://tecnologia.vamtam.com/wp-content/uploads/2023/03/gettyimages-1375143131-2048x2048-1-300x300.jpg",
      link: "#",
    },
    {
      title: "Non-Profit",
      img: "https://tecnologia.vamtam.com/wp-content/uploads/2023/03/gettyimages-1429906360-2048x2048-1-300x300.jpg",
      link: "#",
    },
  ],
  section4Link: { title: "Learn More", link: "#" },
};

export const successStories = {
  headings: { smallHeading: "Where we do", mainHeading: "Success Stories" },
  cards: [
    {
      img: "https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Insurance.jpg",
      catagory: "Cloud Hosting",
      link: "#",
      title:
        "Major Insurance Provider Saves $750k per Month With Big Data Migration",
      detail:
        "The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.",
      learnMoreLink: "#",
    },
    {
      img: "https://tecnologia.vamtam.com/wp-content/uploads/2023/03/nespresso.jpg",
      catagory: "Mobile Development",
      link: "#",
      title:
        "Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story",
      detail:
        "The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.",
      learnMoreLink: "#",
    },
    {
      img: "https://tecnologia.vamtam.com/wp-content/uploads/2023/03/undergroup.jpg",
      catagory: "Mobile Development",
      link: "#",
      title:
        "Strategic Move to an AI-supported application for Public Safety Travel App in London",
      detail:
        "Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.",
      learnMoreLink: "#",
    },
  ],
};
