import React from 'react';
import './Task.css';
import bigImage from '../img/image.png';
import bigImage1 from '../img/image1.png';
import bigImage2 from '../img/image2.png';
import bigImage3 from '../img/image3.png';
import bigImage4 from '../img/image4.png';

const Task = () => {
    return (
        <div className="container">
            <div className='para'>
                <p>Epic Games : An American Video Game And Software Developer And Publisher Based In Cary, North Carolina.</p>

            </div>

            <div className="big-image">
                <div className='first'>
                    <img src={bigImage} alt="Big" />
                </div>
                <div className='paranew'>
                    <p>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
                </div>
            </div>
            {/* <div className='paranew'>
                <p>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
            </div> */}
            <div className='box'>
                <img src={bigImage4} alt="" />

            </div>
            <div className="small-images">
                <div className='img1'>
                    <img src={bigImage1} alt="Small 1" />
                    <div className='para3'>
                        <p>Explore Large, Destructible Environments Where No Two Games Are Ever The Same.</p>
                    </div>
                </div>



                <div className='img2'>
                    <img src={bigImage2} alt="Small 2" />
                    <div className='para4'>
                        <p>Team Up With Friends By Sprinting, Climbing And Smashing Your Way To Earn Your Victory Royale</p>
                    </div>
                </div>
                <div className='img3'>
                    <img src={bigImage3} alt="Small 3" />
                    <div className='para5'>
                        <p>Discover Even More Ways To Play Across Thousands Of Creator-Made Game Genres</p>
                    </div>
                </div>
            </div>

            <div className='contri'>
                <div className='contrihead'>
                    <p>Our Contribution</p>

                </div>
                <div className='para6'>
                    <p>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
                </div>


            </div>

            <div className='price'>
                <div className='price1'>
                    <div className='aa'>
                        <p>5M</p>
                    </div>
                    <div className='bb'>
                        <p>Daily User Engagements</p>
                    </div>
                </div>

                <div className='price1'>
                    <div className='aaa'>
                        <p>$500K</p>
                    </div>
                    <div className='bbb'>
                        <p>Revenue Surge for an Platform</p>
                    </div>
                </div>

                <div className='price1'>
                    <div className='aaaa'>
                        <p>10X</p>
                    </div>
                    <div className='bbbb'>
                        <p>ROAS on all our marketing campaigns</p>
                    </div>
                </div>

            </div>

            <div className='last'>
                <div className='lasthead'>
                    <p>Interested in delving deeper into the project?</p>
                </div>
                <div className='lastpara'>
                    <p>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <span className='bold'>hello@abc.com</span> or give us a call at <span className='bold'>+91 480 20802730.</span></p>
                </div>
                <div className='box2' >
                    <div className='bo'>
                        <div className='boxa'>
                            <p>Ring us on Skype</p>
                        </div>
                    </div>
                    <div className='bo1'>
                        <div className='boxb'>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='final'>
                <p>
                    © 2019-2023 abcTechnology Solutions ----. Ltd. All Rights Reserved
                </p>

            </div>

        </div>
    );
};

export default Task;