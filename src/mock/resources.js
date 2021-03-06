const resources = [
    {
        id: 1,
        posterName: "Joel",
        resourceAuthor: "Traversy Media",
        authorSkillLevel: "Advance",
        cohort: "8",
        title: "React JS Crash Crourse",
        categories: ["React"],
        summary: "Code along about React on youtube",
        link: "https://www.youtube.com/watch?v=sBws8MSXN7A",
        resourceType: "Crash Course",
        datePublished: "2018-09-10.00:00:00.000z",
        videoLength: null,
        timeToComplete: 180,
        rating: 5,
        comments: [
            { user: "john", text: "Great video with clear instructions" },
            { user: "Bella",text: "Simple and straight to the point." },
        ],
    },
    {
        id: 2,
        posterName: "John F",
        resourceAuthor: "DevEd",
        authorSkillLevel: "Beginner",
        cohort: "8",
        title: "React Tutorial For Beginners",
        categories: ["React", "Beginner"],
        summary: "A beginner's guide to React, React State Management, React Router, and Redux. Include 5 app projects.",
        link: "https://www.youtube.com/playlist?list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE",
        resourceType: "Playlist",
        datePublished: "2019-06-22.00:00:00.000z",
        videoLength: null,
        timeToComplete: 200,
        rating: 4,
        comments: [
            { user: "Tony", text: "That crazy Romanian knows his stuff!" },
            {user: "Sheila",text: "A good intro to React."
            },
        ],
    },
    {
        id: 3,
        posterName: "Cliff Choiniere",
        resourceAuthor: "NetNinja",
        authorSkillLevel: "Advanced",
        cohort: "0",
        title: "React & Redux Complete",
        categories: ["React", "Redux"],
        summary: "A good resouce on building a couple react apps with and without redux",
        link: "http://www.google.com/search?q=NetNinja%20React",
        resourceType: "Playlist",
        datePublished: "2018-09-10.00:00:00.000z",
        videoLength: null,
        timeToComplete: 300,
        rating: 5,
        comments: [
            { user: "Joe", text: "Pretty good resource" },
            { user: "Phen", text: "The best to learn React with." },
        ],
    },
    {
        id: 4,
        posterName: "Chang",
        resourceAuthor: "Web Dev Simplified",
        authorSkillLevel: "Advanced",
        cohort: "0",
        title: "Build A REST API with Node.js, Express, & MongoDB",
        categories: ["Node.js", "Express", "MongoDB"],
        summary: "A good resource on building a Rest API with Node.js, Express, & MongoDB",
        link: "https://www.youtube.com/watch?v=fgTGADljAeg",
        resourceType: "Video",
        datePublished: "2019-05-14.00:00:00.000z",
        videoLength: null,
        timeToComplete: 30,
        rating: 5,
        comments: [
            { user: "Chang", text: "Quick and easy to learn MEN stack" }, 
            { user: "Smith", text: "Great video!" },
        ],
    },
    {
        id: 5,
        posterName: "Phen",
        resourceAuthor: "Web Simplified",
        authorSkillLevel: "Advanced",
        cohort: "0",
        title: "Build A REST API With Node.js, Express, & MongoDB - Quick",
        categories: ["Node.js", "Express", "API", "MongoDB"],
        summary: "A good resource on building a rest API with node.js, express, and mongoDB",
        link: "https://www.youtube.com/watch?v=fgTGADljAeg",
        resourceType: "Video",
        datePublished: "2019-14-10.00:00:00.000z",
        videoLength: null,
        timeToComplete: 300,
        rating: 5,
        comments: [
            { user: "Nancy", text: "Quick easy video to learn rest api" }, 
            { user: "James", text: "Great video to learn rest API with." },
        ],
    },
    {
        id: 6,
        posterName: "Titus",
        resourceAuthor: "NetNinja",
        authorSkillLevel: "Advanced",
        cohort: "0",
        title: "MongoDb",
        categories: ["MongoDB"],
        summary: "A good resouce on building a couple  apps with MongoDB",
        link: "https://www.youtube.com/watch?v=9OPP_1eAENg&list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u",
        resourceType: "Video",
        datePublished: "2018-09-10.00:00:00.000z",
        videoLength: null,
        timeToComplete: 60,
        rating: 5,
        comments: [
            { user: "Mike", text: "Pretty good resource" }, 
            { user: "Jones", text: "The best to learn React with." },
        ],
    },
    {
        id: 7,
        posterName: "Darius",
        resourceAuthor: "Tech Sith",
        authorSkillLevel: "Advanced",
        cohort: "0",
        title: "Redux Introduction | How Redux works | Redux fundamentals",
        categories: ["Redux"],
        summary: "First Tutorial in a full React + Redux series.  We understand Redux fundamentals like store , dispatch actions and reducer.  Why we use it and how it works with  frameworks like react, angular and ember. ",
        link: "https://www.youtube.com/watch?v=7Erbf5NXQQw&list=PL7pEw9n3GkoWgIc-Ambc-QZGcTKEei2O3",
        resourceType: "Playlist",
        datePublished: "2018-09-10.00:00:00.000z",
        videoLength: null,
        timeToComplete: 300,
        rating: 5,
        comments: [
            { user: "Brian", text: "THis is a great series!" }, 
            { user: "Kate", text: "Very pithy! 😁" },
        ],
    },
    {
        id: 8,
        posterName: "Holly",
        resourceAuthor: "Dave Ceddia",
        authorSkillLevel: "Advanced",
        cohort: "8",
        title: "Your Timeline for Learning React",
        categories: ["React"],
        summary: "A good resource for learning React",
        link: "https://daveceddia.com/timeline-for-learning-react/",
        resourceType: "Article",
        datePublished: "January 20, 2019",
        videoLength: null,
        timeToComplete: null,
        rating: 10,
        comments: [
            { user: "David", text: "Explains everything perfectly!" }, 
            { user: "Joel", text: "The best resource to learn React with." },
        ],
    },
    {
        id: 9,
        posterName: "David",
        resourceAuthor: "Maximilian Schwarzmüller",
        authorsSkillLevel: "advanced",
        cohort: "8",
        title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        categories: ["React"],
        summary: "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
        link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
        resourceType: "video",
        datePublished: "02-01-20",
        videoLength: 2430,
        timeToComplete: 2430,
        rating: 5,
        comments: [
            { user: "David", comment: "This is awesome" }, 
            { user: "Linda", comment: "Great lecture" },
        ],
    },
]

export default resources;