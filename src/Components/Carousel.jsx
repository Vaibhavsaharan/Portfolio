import React, {useState} from 'react';
import { projects } from "../portfoliodata";

const Carousel = () => {
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {projects.map((project) =>{
                return <Carousel.Item key={project.name}>
                    <img className="carouselimg" src={project.link.url} alt={project.name}></img>
                    <Carousel.Caption>
                        <h3>{project.name}</h3>
                        <p>{project.desc}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            })}
            </Carousel>
    );
}
 
export default Carousel;