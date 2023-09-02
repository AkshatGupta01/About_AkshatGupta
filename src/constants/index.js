import {
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    QuickPaint,
    flightTicketBooking,
    threejs,
    ieee_bpit,
    U_Tube,
    harit
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Event Organiser in college",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Tech Member IEEE BPIT",
        company_name: "IEEE BPIT",
        icon: ieee_bpit,
        iconBg: "#383E56",
        date: "March 2021 - April 2022",
        points: [
            "Developing and maintaining web applications using React.js and Express.js and other related technologies.",
            "Conducting webinars to teach web related technologies to society members",
            "Collaborating with people in IEEE BPIT.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "He never disappoints to figure a way out of complex problems.",
        name: "Harit Dheer",
        designation: "SDE Intern",
        company: "Modgenics",
        image: harit,
    },
    {
        testimonial:
            "He is a fast learner. Always ready to take up new tasks.",
        name: "Aarav Khokhar",
        designation: "Full Stack Developer",
        company: "Aiyuga Algorithms",
        image: "https://media.licdn.com/dms/image/C4E03AQFU3x-rbOUD0g/profile-displayphoto-shrink_800_800/0/1631888129078?e=1698883200&v=beta&t=yQlI6tTNDAlj1iaWHDv_K7u5asGY4k_MvUEnsPGAYCc",
    },
    {
        testimonial:
            "Hard working, good at figuring out solution to complex problems.",
        name: "Tarun Kumar",
        designation: "SDE 1",
        company: "SIGMOID",
        image: "https://media.licdn.com/dms/image/C4D03AQHmShD_ItKO9w/profile-displayphoto-shrink_800_800/0/1541687070242?e=1698883200&v=beta&t=5xtz3cnVCbNbkzrMG4nfZ9w7W4k4cTK3JVTJUlMC9uI",
    },
];

const projects = [
    {
        name: "U_Tube",
        description:
            "A lightweight YouTube alternative to view and search videos available on YouTube.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: U_Tube,
        source_code_link: "https://github.com/AkshatGupta01/U_Tube",
    },
    {
        name: "Quick Paint",
        description:
            "An app to quickly draw and save your ideas and thoughts.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "canvas",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: QuickPaint,
        source_code_link: "https://github.com/AkshatGupta01/QuickPaint",
    },
    {
        name: "Flight Booking System",
        description:
            "A sample project to search flights and book flight tickets.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Express",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: flightTicketBooking,
        source_code_link: "https://github.com/AkshatGupta01/OnlineFlightTicketBookingSystem",
    },
];

export { services, technologies, experiences, testimonials, projects };