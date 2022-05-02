import {ProjectPost} from '../../Components/ProjectPost/ProjectPost'




function PersonalWebsiteProj(){


    const descParagraph = `The purpose of this project was to learn the basics of React.js and 

    have a good place to host all the work I've done. I decided to use React 

    because it seemed to be prevalent on many applications and a good tool for developing web

    applications. This project was a perfect way for me to get better acquainted with 
    
    Javascript, HTML, and CSS styling. Further, it was great to be able to integrate the website 

    with the cloud. I used an Azure Static Web App to host the site. The static Web App is connected 

    to a Github Action CICD pipeline so any updates to the main branch are built 

    and automatically reflected on the site. Azure also made it really easy to configure a custom domain for the site.
    `

    const futureWork = `In the future I plan to continue to add more of my projects and keep all the information 
    
    on myself up to date. I would also like to go back at some point and make the site mobile compatible, and respond to 

    differnt window sizes so people can easily navigate the site using any device.`



    var map = new Map()
    
    map.set("Github: https://github.com/feej1/PersonalWebsiteV2", "paragraph")
    map.set("Description","header")
    map.set(descParagraph, "paragraph")
    map.set("Future Work", "header")
    map.set(futureWork, "paragraph")

    return(
        <ProjectPost projName="Personal Website" imgUrl="https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/pexels-pixabay-270404.jpg" map={map} />
        )
}

export default PersonalWebsiteProj