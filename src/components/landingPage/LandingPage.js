import React, {Component} from 'react';
import './LandingPage.css'

class LandingPage extends Component {
    render(){
        return(
            <div className="center">
            <h1 className="h1">Lazy Girl</h1>
                <img className="imgContain"src={require('../../LandingPageVic.jpg')} />
                <p className="textContain">
                My name is Victoria and I’m a 20-something year old living in Dallas, TX. That’s me in the picture above!

I created Lazy Girl to share all of my secrets to living the lazy life while also getting sh*t done. As a personal trainer, a lot of my friends tease me because they can’t believe a couch-loving person like me can take two naps a day and still manage to be active and productive. But here I am, ready to share the tricks up my sleeve with the world!

I want this blog to focus on enjoyable exercises and fitness tips because helping other is my true passion and I know working out isn’t easy for everyone. Gyms are expensive, time is valuable, and getting started can be the hardest part. But never fear! We’re going to do it together – the “lazy girl” way. That means minimum equipment, easy moves, and the comfort of your own home.

I do have other interests (such as DIY, fashion, cooking, journaling, etc) and I’ll be sharing those with you, too!

As a lazy girl, I don’t plan on having a schedule for my posts. But I will be sharing at least once a week, so keep your eyes peeled for my posts popping up in your feed! I promise it will be all worth it. If you have any comments or thoughts, please share them with me as well. I’d love to hear what you’ve got to say!

                </p>
                <br></br>
                <br></br>
                <p className="textContain">
                High fives and chest bumps,– V 
                </p>
            </div>
        )
    }
}
// {/* <img src={require('/images/image-name.png')} /> */}

export default LandingPage;