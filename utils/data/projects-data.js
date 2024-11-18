import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'MIDI Motion: Gesture-Controlled Audio Production System',
        description: "Developed an intuitive MIDI recording and editing system on Raspberry Pi, integrating keyboard input and motion-based gesture controls using Machine Learning (OpenCV package) for dynamic audio manipulation. Transformed beginner music production by crafting intuitive, real-time audio processing algorithms and MIDI file generation, enabling novices to create professional-grade music without complex software.",
        tools: ['OpenCV', 'Mido', 'Raspberry Pi'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travel Planner App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "Google OpenAI", "TypeScript", "MySQL", "AWS S3", "splinter"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'MiniBot',
        description: 'My team built an Minibot aims to create a cost effective and intuitive learning platform for undergraduate and high school students to learn about the basics of robotics.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Operating System Kernel',
        description: "Constructed an OS kernel featuring a non-preemptive user-level threads package to optimize concurrency. Handled memory management subsystems for exception handling, protection, and address translation. Integrated a clock cache and FAT file system, showcasing a deep understanding of low-level system development principles.",
        tools: [],
        code: 'C++',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },