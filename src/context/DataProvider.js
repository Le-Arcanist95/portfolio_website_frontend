// Import requires (useContext, createContext, useState, useEffect, useCallback)
import { createContext } from 'react';

// Import requires (axios)
// import { serverAuth as axios } from '../hooks/useAxios';

// Import AuthContext
// import AuthContext from './AuthProvider';

// Create context
const DataContext = createContext();

// Create context provider
export const DataProvider = (props) => {
    const profile = {
        "firstName": "Levi",
        "lastName": "Arcane",
        "email": "zarcanist95@gmail.com",
        "bio": "I am a detail-oriented and proficient software engineer. I value integrity, empathy, creativity, and accountability, which have been instilled in me through my life experiences. My expertise lies in critical thinking and problem-solving, skills that I believe are essential for success in this field. I am passionate about making an impact on the world and enjoy collaborating with others to achieve that goal. I look forward to working with a team that shares my values and dedication to excellence in software engineering.",
        "location": {
        "city": "Atlanta",
        "state": "Georgia"
        },
        "skills": [
        "HTML",
        "CSS",
        "JavaScript ES6",
        "TailwindCSS",
        "Node.js",
        "ReactJS",
        "Express",
        "MongoDB",
        "Mongoose",
        "AJAX/HTTP",
        "Agile/Scrum",
        "Git"
        ],
        "links": {
        "github": "https://github.com/Le-Arcanist95",
        "linkedIn": "https://www.linkedin.com/in/l-arcane",
        "portfolio": "Placeholder",
        "resume": "https://docs.google.com/document/d/1IhEVef6P8hXYxlySjaEYL3799gc63eRhQ9JHq5zl_1o/edit?usp=sharing"
        }
    }
    const projects = [
        {
            "name": "Rock The Vote",
            "description": "Rock The Vote is a full-stack application with user authentication through expressjwt. It offers a forum for discussing political issues through posts and commenting. The application's modern interface and robust functionality provide users with a platform for open dialogue and staying informed on current events.",
            "image": "Placeholder",
            "deploymentLink": "Placeholder",
            "githubLink": "https://github.com/Le-Arcanist95/rock_the_vote"
        },{
            "name": "Daily Focus App",
            "description": "Built using a combination of front-end and back-end technologies, this comprehensive application provides users with an intuitive interface to stay organized, inspired, and productive. The NASA Picture of the Day feature displays the latest image from NASA's collection, while the inspirational quotes feature offers daily motivation. Users can also create a to-do list, mark tasks as complete, and record their thoughts and ideas in the journal entry section. Overall, this full-stack application offers a versatile and functional platform for users to stay on top of their daily tasks and be productive.",
            "image": "Placeholder",
            "deploymentLink": "Placeholder",
            "githubLink": "https://github.com/Le-Arcanist95/fullstack_daily_focus_app"
        },{
            "name": "The Plant Project",
            "description": "This is a full-stack group project that uses the Trefle API to create a search engine for plants. While users can currently search for plants by name, browsing functionality is still in progress, as is user authentication. The application is built with React and Node.js/Express, using MongoDB for data storage. Despite these limitations, the application offers a valuable resource for plant enthusiasts to learn about various types of plants.",
            "image": "Placeholder",
            "deploymentLink": "Placeholder",
            "githubLink": "https://github.com/Le-Arcanist95/plant_database_group_project"
        }
    ];

    // // Extract token from AuthContext
    // const { token, user } = useContext(AuthContext);

    // // Create state for experience, profile, and projects
    // const [profile, setProfile] = useState({});
    // const [projects, setProjects] = useState([]);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);

    // // Create function to set isLoaded to true when all data is loaded
    // const checkLoading = useCallback(() => {
    //     if(Object.keys(profile).length > 0 && projects.length > 0) {
    //         setIsLoaded(true);
    //         setIsLoading(false);
    //     }
    // }, [profile, projects]);

    // const getProfile = useCallback(() => {
    //     axios.get(`/api/profile/${user.profile}`)
    //         .then(res => setProfile(res.data))
    //         .catch(err => console.log(err.response.data.errMsg));
    // }, [user.profile]);

    // const getProjects = useCallback(() => {
    //     axios.get('/api/projects')
    //         .then(res => setProjects(res.data))
    //         .catch(err => console.log(err.response.data.errMsg));
    // }, []);

    // // Create useEffect to get experience, profile, and projects from the database on page load
    // useEffect(() => {
    //     if(!token) return;
    //     getProfile();
    //     getProjects();
    // }, [token, getProfile, getProjects]);

    // // Create useEffect to check if all data is loaded
    // useEffect(() => {
    //     checkLoading();
    // }, [checkLoading]);
    
    // Return context provider
    return (
        <DataContext.Provider
            value={{
                profile,
                projects
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
}

// Export context and context provider
export default DataContext;