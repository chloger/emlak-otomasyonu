import React from 'react';
import Navbar from '../components/Navbar';
import { Carousel } from 'antd';
import img1 from "../assets/img1.avif";
import img3 from "../assets/img3.avif";
import img4 from "../assets/img4.avif";



const HomePage = () => {
    return (
        <div className='home-container'>
            <div className='navbar'> <Navbar /></div>
            <div className='main-home'>
                <div data-aos="flip-left" className='home-1'><p data-aos="zoom-in">EMLAKEVİME HOŞGELDİNİZ</p></div>
                <div data-aos="flip-right" className='home-2'><p data-aos="zoom-in">SİZLERE YARDIM İÇİN BURADAYIZ</p></div>
            </div>
           
            <aside className='asidehomecomponent-container'>
                <div className='aside-crousel'>
                    <Carousel className='carousel' dotPosition="top">
                        {[img4, img1, img3].filter(link => link).map((link, index) => (
                            <div key={index} className='carousel-container'>
                                <img className='carousel-image' alt={`Image ${index + 1}`} src={link} />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className='aside-text'>
                    <p className='aside-text-1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam labore porro ipsam fuga molestiae quo! Molestiae, obcaecati rerum fugit praesentium pariatur accusantium quasi incidunt voluptas est ratione alias in aspernatur consequatur perspiciatis voluptatibus minus sed veniam eius, aliquam beatae fuga. Labore officiis, esse nihil ad molestiae non fugit eos molestias. Cum, numquam modi iste reprehenderit quo perspiciatis deleniti ea rerum consequatur quis error totam, doloremque sapiente animi nesciunt quia facere? Expedita odit laudantium itaque iure amet dolores hic alias corporis, aut earum. Eum cumque laboriosam a consequuntur minus labore sed inventore fugiat iure nemo, quaerat delectus vel ullam odio.
                    </p>
                </div>
            </aside>
            <aside className='asidehomecomponent-container'>
                <div className='aside-text'>
                    <p className='aside-text-1'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis tenetur iure aspernatur magni nisi nemo velit sapiente, quod modi ipsam quos dolore alias quas! Atque dolor quae laborum est ducimus quaerat officia labore? Excepturi velit nostrum mollitia ullam iste a iusto consectetur repudiandae aut officia itaque voluptatem eos consequuntur, voluptatum nulla dolore asperiores minima. Accusamus iure fuga eligendi delectus sint in alias minima officia laboriosam, ipsum repellendus adipisci labore iste distinctio blanditiis sed consequatur eaque recusandae natus reprehenderit consequuntur odio doloremque? Repudiandae dolores quidem dignissimos saepe esse minus numquam, doloremque totam et quae repellendus nulla explicabo aspernatur nobis excepturi debitis.
                    </p>
                </div>
                <div className='aside-crousel'>
                    <Carousel className='carousel' dotPosition="top">
                        {[img4, img1, img3].filter(link => link).map((link, index) => (
                            <div key={index} className='carousel-container'>
                                <img className='carousel-image' alt={`Image ${index + 1}`} src={link} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </aside>
        </div>
    )
}

export default HomePage
