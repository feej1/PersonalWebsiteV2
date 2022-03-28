import React from "react"
import './NavBar.css'



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-container").style.top = "0";
  } else {
    document.getElementById("navbar-container").style.top = "-5em";
  }
  prevScrollpos = currentScrollPos;
}



function NavBarSection(props){
    return(
        <div className="navbar-item">
            <a className="navbar-item-link" href={props.link}>{props.children}</a>
        </div>
    )
}

function NavBar(){

        return(
            <div id='navbar-container' >
                <NavBarSection link="#title-base" >Home</NavBarSection>
                <NavBarSection link="#about-title">About</NavBarSection>
                <NavBarSection link="#projects-title">Projects</NavBarSection>
                <NavBarSection link="https://1drv.ms/b/s!AlQdja6a8kE5pQRu_6pddhYDcxK2">Resume</NavBarSection>
            </div>
        )

}




export default NavBar