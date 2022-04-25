import './Projects.css'



const NameGameLink = `https://github.com/feej1/nameGame`
const ProblemSolverLink = `https://github.umn.edu/fee00003/Problem-Solver`
const BlackJackEaLink = `https://github.com/feej1/blackJack-EvolutionaryAlgorithm`
const WebsiteLink = `https://github.com/feej1/PersonalWebsiteV2`
const StockTraderLink = `https://github.com/feej1/trading-bot`



function ProjectSectionHeader(props){
    return <div className='projects-section-header'>{props.children}</div>
}

function ProjectTile (props){
    return(
        <a href={props.link}>
            <img className='projects-grid-img' src={props.src} alt="project icon" />
            <div className="projects-grid-overlay">
                <div className="projects-grid-text">{props.projectTitle}</div>
            </div>
        </a>
    )
}

function ProjectListTech(props){
    return(
        <>
            <div className='project-list-tech'>{props.technologies.join(", ")}</div>
        </>
    )
}
function ProjectListTitle(props){
    return(
        <>
            <div className='project-list-title'><a href='#link' className='project-list-title-link'>{props.title}</a></div>
        </>
    )
}
function ProjectListDate(props){
    return(
        <div className='project-list-date'>{props.year}</div>
    )
}
function ProjectListReason(props){
    return(
        <>
            <div className='project-list-made-for'>{props.reason}</div>
        </>
    )
}

function ProjectListLink(props){
    if (props.link === "-")return <div className='project-list-item-link-cont'>-</div>
    else return <div className='project-list-item-link-cont'><a href={props.link} className='project-list-item-link'><i class='fa fa-github'></i></a></div>
}

function ProjectListItem(props){
    if(props.roundTop === true)return(
        <div className="project-list-item" id="project-list-item-rounded-top">
            <ProjectListTitle title={props.title}></ProjectListTitle>
            <ProjectListTech technologies={props.technologies}></ProjectListTech>
            <ProjectListReason reason={props.reason}></ProjectListReason>
            <ProjectListDate year={props.year}></ProjectListDate>
            <ProjectListLink link={props.link}></ProjectListLink>
        </div>
    )
    else if (props.roundBottom === true)return(
        <div className="project-list-item" id="project-list-item-rounded-bot">
            <ProjectListTitle title={props.title}></ProjectListTitle>
            <ProjectListTech technologies={props.technologies}></ProjectListTech>
            <ProjectListReason reason={props.reason}></ProjectListReason>
            <ProjectListDate year={props.year}></ProjectListDate>
            <ProjectListLink link={props.link}></ProjectListLink>
        </div>
    )
    else return(
        <div className="project-list-item" >
            <ProjectListTitle title={props.title}></ProjectListTitle>
            <ProjectListTech technologies={props.technologies}></ProjectListTech>
            <ProjectListReason reason={props.reason}></ProjectListReason>
            <ProjectListDate year={props.year}></ProjectListDate>
            <ProjectListLink link={props.link}></ProjectListLink>
        </div>
    )
}

function ProjectListRowHeaders(){
    return(
        <div className='project-list-item' id='project-list-header'>
            <div>Project Title</div>
            <div>Made With</div>
            <div>Made For</div>
            <div>Date</div>
            <div id="project-header-center-justify">Link</div>
        </div>
    )
}

function Projects() {

    return (
        <>
        <div id='projects-title'>Projects<hr/></div>
        <div className='projects-container'>
            <ProjectSectionHeader >Notable Projects</ProjectSectionHeader>
            <div className="projects-grid">
                <div className='projects-grid-item' id="projects-grid-item1">
                    <ProjectTile projectTitle='Website' link={WebsiteLink} src='https://www.dictionary.com/e/wp-content/uploads/2018/06/greater-than-sign-2.jpg'/>
                </div>
                <div className='projects-grid-item' id="projects-grid-item2">
                    <ProjectTile projectTitle='Stock Trading Bot' link={StockTraderLink} src='https://i.imgur.com/xHfBb1K.png'/>
                </div>
                <div className='projects-grid-item' id="projects-grid-item3">
                    <ProjectTile projectTitle='BlackJack EA' link={BlackJackEaLink} src='https://i.imgur.com/5CLumma.png'/>
                </div>
            </div>
            <ProjectSectionHeader >All Projects</ProjectSectionHeader>
            <div className="project-list">
                <ProjectListRowHeaders/>
                <ProjectListItem link={WebsiteLink} title="Portfolio Website" technologies={["JS", "HTML/CSS", "React","Node"]} reason="Personal" year="2022" />
                <ProjectListItem link={StockTraderLink} title="Stock Trading Bot" technologies={["Java", "Stock API", "MongoDB"]} reason="Personal" year="2021" />
                <ProjectListItem link={NameGameLink} title="Name Game App" technologies={["Java", "Andorid Studio", "MongoDB"]} reason="School" year="2021" />
                <ProjectListItem link={BlackJackEaLink} title="Black Jack Ea" technologies={["Python"]} reason="Personal" year="2022" />
                <ProjectListItem link={ProblemSolverLink} title="Path Finding Visualizer" technologies={["Java", "Andorid Studio"]} reason="School" year="2020" />
                <ProjectListItem link='-' roundBottom={true} title="Dev Ops Boards Site" technologies={["JS", "HTML/CSS", "Azure Dev Ops", "Oauth"]} reason="Thomson Reuters" year="2021" />
            </div>
        </div>
        </>
    )
}

export default Projects
export {ProjectListDate, ProjectListItem, ProjectListReason, ProjectListTech, ProjectSectionHeader, 
    ProjectListTitle, ProjectTile }