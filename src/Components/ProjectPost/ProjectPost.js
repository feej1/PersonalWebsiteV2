import './ProjectPost.css'


// Component written based off this template https://codepen.io/hkfoster/pen/naWZzZ



function getTags(map){
    var elements = []
    for (let [key, value] of map.entries()) {
        if (value === 'header') {
            elements.push(<h1 className='post-header'>{key}</h1>)
        }
        else if (value === 'img') {
            elements.push(<img className='post-img' src={key} alt=''></img>)
        }
        else if (value === 'paragraph') {
            elements.push(<p>{key}</p>)
        }
    }
    return elements
}


function ProjectPost(props){


    const imgStyl = {
        background: `black url(${props.imgUrl}) no-repeat center center` 
    }

    const aritcleJSX = getTags(props.map)

    return(
        <>
            <header class="banner">
              <span class="background" style={imgStyl} ></span>
              <h1>{props.projName}</h1>
            </header>

            <main>
                <article>
                    {aritcleJSX}
                </article>
            </main>
            </>
    )
}

export {ProjectPost}