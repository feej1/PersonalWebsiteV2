import './About.css'


const portraitElement = (
    <div id='about-portrait-container'>
        <img src='https://i.imgur.com/u3Zr6eq.jpeg' alt='me at a local park' id='about-portrait'></img>
    </div>
)

const languagesTitle = 
    `
    These are some of languages, libraries, and other technologies I've used for work, school, personal development
    `

const summaryParagraph = 
    `I'm currently a student at the University of Minnesota Duluth and plan to graduate in December 2022 with a Bachelor of Science.
    I'm double majoring in Computer Science and Actuarial Science with a minor in Mathematics.
    After graduation I am looking to become a software engineer because I have a passion for coding. 
    Outside of school and work I really enjoy hiking, fishing, and camping!`

function IconGrid(){
    return (
        <div id='about-languages-icon-grid'>
            <i className="devicon-java-plain-wordmark"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-cplusplus-plain"></i>
            <i className="devicon-python-plain"></i>
            <i className="devicon-azure-plain-wordmark"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-html5-plain-wordmark"></i>
            <i className="devicon-git-plain"></i>
            <i className="devicon-mongodb-plain-wordmark"></i>
        </div>
    )
}

function AboutTop(){
    return(
        <>
            <div className='wave'></div>
            <div className='about-top'>
                <div id='about-title'>About<hr/></div>
            </div>
        </>
    )
}



function About(){
    return(
        <>
            <AboutTop></AboutTop>
            <div id='about-container'>     
                {portraitElement}
                <div id='about-summary-container'>
                    <div id='about-summary-paragraph' className='about-summary-text'>{summaryParagraph}</div>
                </div>
                <div id='about-languages-title'>{languagesTitle}</div>
                <IconGrid></IconGrid>
            </div>
        </>
    )
}


export default About