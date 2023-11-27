import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'
import styles from '../styles/Jumbo.module.css'

import ductwrap from '../photos/duct.jpeg'



function Jumbotron() {
    return (
        <Carousel interval={null} indicators={false} className={styles.carousel} controls={null}>


            <Carousel.Item>
                <Image className={styles.jumboimg} src={ductwrap} alt="construction workers"/>
                <Carousel.Caption className={styles.c1caption}>
                    <h1>Provide Effective <br /> Insulation Solutions!</h1>
                    <p>With over 30 years of experience, Best Insulation is suited to handle any job! Feel free to give us a call or email and we will respond promptly!</p>
                    <div>
                        <a href="/services#servicegrid">Our Services</a>
                        <a href="/#services">More About Us!</a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>


            {/* <Carousel.Item>
                <Image className={styles.jumboimg} src={ductwrap} alt="construction workers" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item> */}


            {/* <Carousel.Item>
                <Image className={styles.jumboimg} src={ductwrap} alt="construction workers" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item> */}






        </Carousel>
    );
}
export default Jumbotron;