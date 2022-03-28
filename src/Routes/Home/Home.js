import './Home.css'
import React from 'react';

function Title() {
    return (
        <div id="title-base">
            <div className="title-text">
                <p id="title-name">Joseph Fee</p>
                <p id="title-job"><i>Software Engineer</i></p>
            </div >
            {/* <div>
                <table className="title-buttons">
                    <tr>
                        <td><a href='#projects-title'><button className="title-btn" id="title-projectsBtn">Projects</button></a></td>
                        <td><a href='#about-title'><button className="title-btn" id="title-aboutBtn">About</button></a></td>
                    </tr>
                </table>
            </div> */}
        </div>
    );
}

export default Title;


