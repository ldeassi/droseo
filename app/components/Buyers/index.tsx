import Image from 'next/image';

interface cardDataType {
    imgSrc: string;
    description: string;
    percent: string;
    subheading: string;
}

interface Project {
    imgSrc: string;
    title: string;
    description: string;
    ghLink: string;
    demoLink?: string;
}

const projects: Project[] = [
    {
        imgSrc: '/assets/projects/chatify.png',
        title: 'Chatify',
        description: 'Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.',
        ghLink: 'https://github.com/ldeassi/Chatify',
        demoLink: 'https://chatify-49.web.app/',
    },
    {
        imgSrc: '/assets/projects/blog.png',
        title: 'Bits-0f-C0de',
        description: 'My personal blog page build with Next.js and Tailwind Css which takes the content from markdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.',
        ghLink: 'https://github.com/ldeassi/Bits-0f-C0de',
        demoLink: 'https://blogs.soumya-jit.tech/',
    },
    {
        imgSrc: '/assets/projects/codeEditor.png',
        title: 'Editor.io',
        description: 'Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview. Both the editor supports auto save of work using Local Storage.',
        ghLink: 'https://github.com/ldeassi/Editor.io',
        demoLink: 'https://editor.soumya-jit.tech/',
    },
    {
        imgSrc: '/assets/projects/leaf.png',
        title: 'Plant AI',
        description: 'Used the plant disease dataset from Kaggle and trained a image classifer model using PyTorch framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. We were able to achieve an accuracy of 98% by using Resnet34 pretrained model.',
        ghLink: 'https://github.com/ldeassi/Plant_AI',
        demoLink: 'https://plant49-ai.herokuapp.com/',
    },
];

const Buyers = () => {
    return (
        <div id="portfolio" className="mx-auto max-w-7xl py-16 px-6">
            <h1 className="text-4xl font-bold text-center mb-8">
                Our Recent <span className="text-blue-600">Works</span>
            </h1>
            <p className="text-center text-lg text-gray-600 mb-12">
                Here are a few projects we have worked on recently.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-8">
                {projects.map((project, i) => (
                    <div 
                        className="flex flex-col justify-between items-center bg-white rounded-2xl shadow-lg p-6 border border-[#d1d5db]" 
                        key={i}
                    >
                        <div className="flex justify-center mb-4">
                            <Image 
                                src={project.imgSrc} 
                                alt={project.title} 
                                width={160} 
                                height={160} 
                                className="rounded-xl object-cover" 
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-center mb-2">
                            {project.title}
                        </h2>
                        <p className="text-base text-gray-700 text-center mb-4">
                            {project.description}
                        </p>
                        <div className="flex gap-3 justify-center mt-auto">
                            <a 
                                href={project.ghLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-[#32a852] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition"
                            >
                                GitHub
                            </a>
                            {project.demoLink && (
                                <a 
                                    href={project.demoLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-[#2563eb] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                                >
                                    Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Buyers;