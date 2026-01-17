// Project Constants
const TYPING_SPEED = 100; // milliseconds per character
const TYPING_DELAY = 1000; // delay before starting typing
const LOADER_DURATION = 2000; // loader display duration

// Typing text options
const TYPING_TEXTS = [
    "Java Full Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Problem Solver"
];

// Animation durations
const FADE_DURATION = 300;
const SCROLL_OFFSET = 100;

// Projects Data
const PROJECTS_DATA = [
    {
        id: 1,
        title: " Portfolio",
        description: "portfolio which is used to describe my achievements and showcase my skills and projects in an interactive way. Built with modern web technologies and responsive design.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {
            live: "https://adil-93.github.io/portfolio/",
            github: "https://adil-93.github.io/portfolio/"
        },
        featured: true
    },
    // You can add more projects here in the future
    {
        id: 2,
        title: "Student-Management-System",
        description: "* Developed a responsive Student Management System dashboard using HTML and CSS to manage student records and key academic information.",
        image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
        technologies: ["HTML", "CSS"],
        links: {
            live: "https://adil-93.github.io/student-management-system/",
            github: "https://adil-93.github.io/student-management-system/"
        },
        featured: true
    }
];

// Experience Data
const EXPERIENCE_DATA = [
    {
        id: 1,
        type: "education", // or "work"
        title: "Java Full Stack Developer Trainee",
        company: "TAP Academy",
        location: "India",
        duration: "6 Months",
        startDate: "2024",
        endDate: "Present",
        description: "Currently undergoing comprehensive training in Java full stack development for 6 months, learning both frontend and backend technologies.",
        skills: ["Java", "JDBC/Hibernate", "MySQL", "Frontend Technologies","HTML","CSS","JavaScript"],
        achievements: [
            "Learning core Java programming concepts",
            "Database management with MySQL",
            "Frontend development with HTML, CSS, JavaScript",
            "Building full-stack applications"
        ]
    }
];

// Skills Data
const SKILLS_DATA = {
    "Backend Development": [
        {
            name: "Java",
            icon: "fab fa-java",
            level: 75
        },
        {
            name: "JDBC/Hibernate",
            icon: "fas fa-database",
            level: 70
        }
    ],
    "Database": [
        {
            name: "MySQL",
            icon: "fas fa-database",
            level: 70
        }
    ],
    "Frontend Technologies": [
        {
            name: "HTML5",
            icon: "fab fa-html5",
            level: 80
        },
        {
            name: "CSS3",
            icon: "fab fa-css3-alt",
            level: 75
        },
        {
            name: "JavaScript",
            icon: "fab fa-js-square",
            level: 70
        }
    ],
    "Tools & Others": [
        {
            name: "Git",
            icon: "fab fa-git-alt",
            level: 65
        },
        {
            name: "VS Code",
            icon: "fas fa-code",
            level: 80
        }
    ]
};

// Contact Information
const CONTACT_INFO = {
    personal: {
        name: "Shaik Adil",
        title: "Java Full Stack Developer",
        email: "shaikadil096@gmail.com",
        phone: "+91 9392695312",
        location: "India",
        availability: "Available for opportunities"
    },
    social: [
        {
            name: "LinkedIn",
            icon: "fab fa-linkedin",
            url: "https://www.linkedin.com/feed/",
            color: "#0077b5"
        },
        {
            name: "GitHub",
            icon: "fab fa-github",
            url: "https://github.com/adil-93",
            color: "#333"
        },
        {
            name: "Twitter",
            icon: "fab fa-twitter",
            url: "#",
            color: "#1da1f2"
        },
        {
            name: "Instagram",
            icon: "fab fa-instagram",
            url: " https://www.instagram.com/adil__shaik__321?igsh",
            color: "#e4405f"
        }
    ],
    resume: {
        url: "https://drive.google.com/file/d/1iZUXWd8A0YcbFVJ_4LZXkSIhF6I5pCy2/view?usp=drivesdk",
        filename: "Shaik_Adil_Resume.pdf"
    }
};

// Personal Information
const PERSONAL_INFO = {
    name: "Shaik Adil",
    title: "Java Full Stack Developer",
    subtitle: "Trainee at TAP Academy",
    description: "My name is Shaik Adil I am Java full stack Developer",
    profileImage: "images/profile.jpg",
    intro: "Hi, I'm",
    tagline: "Passionate about creating innovative solutions and learning new technologies."
};











