import React, {Component} from 'react';
import './LandingPage.css'

class LandingPage extends Component {
    render(){
        return(
            <div className="center">
            <img className="landingPageImgContain"src={require("../../blogpictures/IMG_4416.PNG")} />
            <div>
                blah blah blah
            </div>
            </div>
        )
    }
}
// {/* <img src={require('/images/image-name.png')} /> */}

export default LandingPage;