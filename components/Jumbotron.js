import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'
import styles from '../styles/Jumbo.module.css'

import ductwrap from '../photos/duct.jpeg'



function Jumbotron() {
    return (
        <Carousel interval={null} indicators={false} className={styles.carousel}>




            <Carousel.Item>
                <Image className={styles.jumboimg} src={ductwrap} alt="construction workers"
                // width={800}
                // layout="intrinsic"
                />
                <Carousel.Caption className={styles.c1caption}>
                    <h1>Provide Effective <br /> Building Solutions!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero doloribus laborum exercitationem facere molestias, nisi animi ratione a. Repellendus dit corporis adipisci magnam laudantium voluptas.</p>
                    <div>
                        <a href="/services">Our Services</a>
                        <a href="/services">More About Us!</a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>




            <Carousel.Item>
                <Image className={styles.jumboimg} src={ductwrap} alt="construction workers" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>





            <Carousel.Item>
                <Image className={styles.jumboimg} src={ductwrap} alt="construction workers" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>






        </Carousel>
    );
}
export default Jumbotron;