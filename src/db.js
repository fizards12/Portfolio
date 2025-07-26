import gameWorrierImg from "./assets/projects/game-worrier.jpg"
import autoNetImg1 from "./assets/projects/automated-1.png"
import autoNetImg2 from "./assets/projects/automated-2.png"
import gymGemImg from "./assets/projects/gem-gym.png"
import NodeJSImg from "./assets/projects/node.png"
import portfolioImg from "./assets/projects/portfolio.jpg"
export default {
    projects: [
        {
            id:1,
            title: "Game Warrier",
            brief: "Responsive Front-end Blog application with light and dark modes for games and games reviews.",
            skills: ["React","Material-UI","React Router"],
            image: gameWorrierImg,
            preview: "https://diamond-games.onrender.com/"
        },
        {
            id:2,
            title: "Automated Network (Graduation)",
            brief: "Web application for configuring the Network’s switches and Devices of Virtual Simulated Network by GNS3 using friendly user interface.",
            skills: ["HTML","CSS","Python","PHP","MariaDB","Bootstrap","GNS3"],
            image: autoNetImg1,
            preview: "#"
        },
        {
            id:3,
            title: "Automated Network (Frontend)",
            brief: "Front-end application for configuring the Network’s switches and Devices using friendly user interface.",
            skills: ["React","Bootstrap","React Router","Redux","Redux-Toolkit"],
            image: autoNetImg2,
            preview: "#"
        },
        {
            id:4,
            title: "Gym Gem",
            brief: "A responsive frontend template designed to enhance the digital presence of gyms, featuring interactive components for class schedules, coaches' information, type of classes",
            skills: ["React","Material-Tailwind","React Router"],
            image: gymGemImg,
            preview: "https://gem-gym.onrender.com/"
        },
        {
            id:5,
            title: "Portfolio",
            brief: "Front-end Portfolio application for a web developer that shows his strengths, skills and his past projects.",
            skills: ["React","Material-UI","React Router"],
            image: portfolioImg,
            preview: "https://mahmoud-sameh.onrender.com/"
        },
        {
            id:6,
            title: "StoreFront Backend Server",
            brief: "The Server-Side of online Storefront created to provide the the APIs will be fetched using the Front-End Side to get the data and store or delete products from and to the database",
            skills: ["Express.JS","PostgreSQL","Authentication","TypeScript"],
            image: NodeJSImg,
            preview: "https://github.com/fizards12/backendStore"
        },
        {
            id:7,
            title: "Gym Backend Server",
            brief: "Backend Server for a gym application built using Express.js. The server provides APIs to handle user data, user registration, authentication, authorization, and notifications.",
            skills: ["Express.JS","MongoDB","Authentication","Authorization","Socket.io","TypeScript"],
            image: NodeJSImg,
            preview: "#"
        },
    ]
}