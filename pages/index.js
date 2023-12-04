import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Jumbotron from '../components/Jumbotron'
import Image from 'next/image'

import demolition from "../photos/demolition.jpg";
// import chemTank from "../photos/chemTank.jpg";

import threem from "../photos/brands/3m.jpg";
import dowCorning from "../photos/brands/dowCorning.jpg";
import foam from "../photos/brands/foam.jpg";
import johnsmanville from "../photos/brands/johnsmanville.jpg";
import knauf from "../photos/brands/knauf.jpg";
import pabco from "../photos/brands/pabco.jpg";
import proto from "../photos/brands/proto.jpg";
import venture from "../photos/brands/venture.jpg";


import piping from '../photos/icons/insulation.png';
import consulting from '../photos/icons/safety.png';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | WJ Best Insulation - Edison, NJ</title>
        <meta name="description" content="WJ Best Insulation New Jersey contractor" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap" rel="stylesheet" />
      </Head>
      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}























      {/*-------------------- Jumbo ---------------------*/}
      <Jumbotron />






















      {/*-------------------- Intro contact/box ---------------------*/}
      <div>
        <Col className={styles.introCol}>




          <Col className={styles.introColLeft}>


            <Col>
              <div>
                <svg style={{ backgroundColor: "", color: "white" }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" /></svg>
              </div>
              <Col style={{ backgroundColor: "", margin: "", paddingLeft: "20px" }}>
                <h6 style={{ backgroundColor: "", margin: "0", paddingBottom: "8px" }}>Quick Contact</h6>
                {/* <p style={{ padding: "", margin: "0", backgroundColor: "", fontSize: ".85em", paddingBottom: "5px" }}>Email: wjbestinsulation@gmail.com</p> */}
                <p style={{ padding: "", margin: "0", backgroundColor: "", fontSize: ".85em", paddingBottom: "5px" }}>wjbestinsulation@gmail.com</p>
                <p style={{ padding: "", margin: "0", backgroundColor: "", fontSize: ".85em" }}>Phone: (732)910-1016</p>
              </Col>
            </Col>


            <Col>
              <div>
                <svg style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
              </div>
              <Col style={{ backgroundColor: "white", margin: "", paddingLeft: "20px" }}>
                <h6 style={{ backgroundColor: "", margin: "0", paddingBottom: "8px" }}>Our Location</h6>
                <p style={{ padding: "", margin: "0", backgroundColor: "", fontSize: ".85em", paddingBottom: "5px" }}>Edison</p>
                <p style={{ padding: "", margin: "0", backgroundColor: "", fontSize: ".85em" }}>New Jersey, United States</p>
              </Col>
            </Col>
          </Col>





          <Col className={styles.gearCol}>
            <div className={styles.introSettingBox}>
              <h6 style={{ margin: "0", paddingBottom: "5px", fontWeight: "700", fontSize: "1.15em" }}>A leading Developer Of A Grade</h6>
              <h6 style={{ margin: "0", fontWeight: "700", fontSize: "1.15em" }}>Commercial & Industrial projects</h6>
              <p style={{ margin: "0", paddingTop: "20px", paddingBottom: "20px", fontSize: ".8em" }}>Best Insulation has worked on every type of project. <br /> Take a look at some of our work!</p>
              <a style={{ color: "white", textDecoration: "none", fontSize: ".8em", fontWeight: "500" }} href="/#projects">
                <div style={{ display: "flex", backgroundColor: "" }}>
                  <p style={{ marginTop: "auto", marginBottom: "auto", paddingRight: "15px", backgroundColor: "" }}>More Projects</p>
                  <div style={{ backgroundColor: "whitesmoke", padding: "2px", borderRadius: "15px" }}>
                    <svg id='services' style={{ backgroundColor: "", color: "#ff6408" }} xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
                  </div>
                </div>
              </a>
            </div>
          </Col>





        </Col>
      </div>



























      {/*-------------------- Services column ---------------------*/}

      <div id='servicegrid' style={{ paddingBottom: "52.5px", backgroundColor: "#f1f1f1f2", paddingTop: '50px' }}>
        <Col style={{ backgroundColor: "", textAlign: "center" }}>
          <h6 style={{ color: "#FF6710", margin: "0" }}>The Best A Grade Commercial & Industrial Services</h6>
          <h3 style={{ margin: "0" }}>High Quality Construction Solution</h3>
          <h3 style={{ margin: "0", fontSize: "1.7em" }}>For Commercial & Industrial</h3>
        </Col>
      </div>




      <div className={styles.smallServices}>



        {/* <div className="row" style={{ backgroundColor: 'red', width: '100vw', margin: '0' }}> */}

        <div style={{ justifyContent: 'center', backgroundColor: '', margin: '' }}>





          <div class="col-10 shadow p-3 mb-3 mt-3 mx-4 bg-white rounded text-center">

            <Image
              src={piping}
              alt='piping'
              height={50}
              width={50}
              style={{ backgroundColor: '', borderRadius: '25px', padding: '5px', border: '1px solid red' }}
            />
            <h4 style={{ backgroundColor: '', paddingBottom: '10px', paddingTop: '10px' }}>Piping</h4>

            <ul style={{ backgroundColor: '', textAlign: 'left', justifyContent: '', display: 'inline-block' }}>
              <li>Chilled water</li>
              <li>Hot water</li>
              <li>Domestic water</li>
              <li>Chilled water</li>
            </ul>
          </div>






          <div class="col-10 shadow p-3 mb-3 mt-3 mx-4 bg-white rounded text-center">
            <img style={{ height: '50px', width: '50px', backgroundColor: '', borderRadius: '25px', padding: '5px', color: '', border: '1px solid red' }} src="https://www.mes.gov.pk/sites/default/files/2023-06/hvac.png" alt="" />
            <h4 style={{ backgroundColor: '', paddingBottom: '10px', paddingTop: '10px' }}>Ductwork</h4>
            <ul style={{ backgroundColor: '', textAlign: 'left', justifyContent: '', display: 'inline-block' }}>
              <li>Heating & Cooling</li>
              <li>Grease exhaust</li>
              <li>Ventilation</li>
              <li>Breechings</li>
            </ul>
          </div>








          <div class="col-10 shadow p-3 mb-3 mt-3 mx-4 bg-white rounded text-center">
            <img style={{ height: '50px', width: '50px', backgroundColor: '', borderRadius: '25px', padding: '5px', color: '', border: '1px solid red' }} src="https://cdn2.iconfinder.com/data/icons/pfd-equipment-tool/32/Reactor-512.png" alt="" />
            <h4 style={{ backgroundColor: '', paddingBottom: '10px', paddingTop: '10px' }}>Tanks</h4>
            <p>All mechanical and process systems tanks</p>
          </div>









          <div class="col-10 shadow p-3 mb-3 mt-3 mx-4 bg-white rounded text-center">

              <img style={{ height: '50px', width: '50px', backgroundColor: '', borderRadius: '25px', padding: '5px', color: 'red', border: '1px solid red' }} src="https://cdn-icons-png.flaticon.com/256/2983/2983881.png" alt="" />
              <h4 style={{ backgroundColor: '', paddingBottom: '10px', paddingTop: '10px' }}>Equipment</h4>
              <ul style={{ backgroundColor: '', textAlign: 'left', justifyContent: '', display: 'inline-block' }}>
                <li>Chillers</li>
                <li>Boilers</li>
                <li>Pumps</li>
                <li>Heat Exchangers</li>
              </ul>
            </div>




            <div class="col-10 shadow p-3 mb-3 mt-3 mx-4 bg-white rounded text-center">

              <img style={{ height: '50px', width: '50px', backgroundColor: '', borderRadius: '25px', padding: '5px', color: 'red', border: '1px solid red' }} src="https://cdn-icons-png.flaticon.com/512/5672/5672137.png" alt="" />
              <h4 style={{ backgroundColor: '', paddingBottom: '10px', paddingTop: '10px' }}>Jacketing</h4>
              <ul style={{ backgroundColor: '', textAlign: 'left', justifyContent: '', display: 'inline-block' }}>
                <li>Aluminum jacketing</li>
                <li>Stainless steel</li>
                <li>PVC</li>
                <li>Direct burial jacketing</li>
              </ul>
            </div>




            <div class="col-10 shadow p-3 mb-3 mt-3 mx-4 bg-white rounded text-center">

              <Image
                src={consulting}
                alt='piping'
                height={50}
                width={50}
                style={{ backgroundColor: '', borderRadius: '25px', padding: '5px', border: '1px solid red' }}
              />
              <h4 style={{ backgroundColor: '', paddingBottom: '10px', paddingTop: '10px' }}>Consulting</h4>
              <p style={{  }}>Have questions?</p>
              <p>
                <span style={{ color: 'blue', fontWeight:'600' }}>Contact us</span>
                <br />
                Monday thru Friday
                <br />

                
                9:00AM - 5:30PM
                <br />
                for a free consultation!
              </p>
            </div>

























        </div>










      </div>






      <div className={styles.servicesRow}>
        <Col>



          <Col>
            <div style={{ backgroundColor: "", color: "white", paddingBottom: "", backgroundColor: "" }}>
              <div style={{ height: "", backgroundColor: "", borderBottom: "2px solid white" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-bricks" viewBox="0 0 16 16"><path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2h5V1h-5zm6 0v2H15V1h-3.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z" /></svg>
                <div style={{ paddingTop: "45px", paddingBottom: "45px", backgroundColor: "" }}>
                  <h6 style={{ margin: "0" }}>Piping</h6>
                  <h6 style={{ margin: "0" }}>& Ductwork</h6>
                </div>
              </div>
              <div style={{ height: "", paddingRight: "30px", backgroundColor: "" }}>
                <p style={{ margin: "0", fontSize: ".85em", paddingTop: "30px", paddingBottom: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda vel quia itaque facere, quaerat quisquam harum cupiditate! Quia, ullam quia itaque facere, quaerat quisquam.</p>
                <a style={{ textDecoration: "none", color: "white" }} href="/services">
                  <div style={{ backgroundColor: "", display: "flex" }}>
                    <h6 style={{ backgroundColor: "", marginTop: "auto", marginBottom: "auto", paddingRight: "5px" }}>Read More</h6>
                    <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "2px" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="#FF6710" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg></div>
                  </div>
                </a>
              </div>
            </div>
          </Col>


          <Col>
            <div>
              <div style={{ height: "", backgroundColor: "", borderBottom: "2px solid #FF6710" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FF6710" class="bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" /></svg>
                <div style={{ paddingTop: "45px", paddingBottom: "45px", backgroundColor: "" }}>
                  {/* <h6 style={{ margin: "0" }}>Contruction</h6>
                  <h6 style={{ margin: "0" }}>Consultants</h6> */}
                  <h6 style={{ margin: "0" }}>Mechanical</h6>
                  <h6 style={{ margin: "0" }}>Systems</h6>
                </div>
              </div>
              <div style={{ height: "", paddingRight: "30px", backgroundColor: "" }}>
                <p style={{ margin: "0", fontSize: ".85em", paddingTop: "30px", paddingBottom: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda vel quia itaque facere, quaerat quisquam harum cupiditate! Quia, ullam quia itaque facere, quaerat quisquam.</p>
                <a style={{ textDecoration: "none", color: "black" }} href="/#gallery">
                  <div style={{ backgroundColor: "", display: "flex" }}>
                    <h6 style={{ backgroundColor: "", marginTop: "auto", marginBottom: "auto", paddingRight: "5px" }}>Read More</h6>
                    <div style={{ backgroundColor: "#FF6710", borderRadius: "12px", padding: "2px" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg></div>
                  </div>
                </a>
              </div>
            </div>
          </Col>


          <Col>
            <div style={{ backgroundColor: "", color: "black" }}>
              <div style={{ height: "", backgroundColor: "", borderBottom: "2px solid #FF6710" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FF6710" class="bi bi-person-fill-gear" viewBox="0 0 16 16"><path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" /></svg>
                <div style={{ paddingTop: "45px", paddingBottom: "45px", backgroundColor: "" }}>
                  {/* <h6 style={{ margin: "0" }}>Contruction</h6>
                  <h6 style={{ margin: "0" }}>Consultants</h6> */}
                  <h6 style={{ margin: "0" }}>Free</h6>
                  <h6 style={{ margin: "0" }}>Estimates</h6>
                </div>
              </div>
              <div style={{ height: "", paddingRight: "30px", backgroundColor: "" }}>
                <p style={{ margin: "0", fontSize: ".85em", paddingTop: "30px", paddingBottom: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda vel quia itaque facere, quaerat quisquam harum cupiditate! Quia, ullam quia itaque facere, quaerat quisquam.</p>
                <a style={{ textDecoration: "none", color: "black" }} href="/#quote">
                  <div style={{ backgroundColor: "", display: "flex" }}>
                    <h6 style={{ backgroundColor: "", marginTop: "auto", marginBottom: "auto", paddingRight: "5px" }}>Read More</h6>
                    <div style={{ backgroundColor: "#FF6710", borderRadius: "12px", padding: "2px" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg></div>
                  </div>
                </a>
              </div>
            </div>
          </Col>



        </Col>
      </div>







      <div style={{ textAlign: "center", backgroundColor: "#f1f1f1f2", padding: "40px", paddingBottom: "120px" }}>
        <h6 style={{ padding: "0", margin: "0" }}>See all our projects. <b><a style={{ color: "black" }} href="/#gallery">Build Your Dream Now!</a></b></h6>
      </div>
































      {/*-------------------- Video row ---------------------*/}
      <div className={styles.videoRow}>




        <div className={styles.videoText}>

          <div style={{ width: "60%", margin: "auto", paddingTop: "40px", backgroundColor: "" }}>
            <h5 style={{ margin: "0", padding: "0" }}>World's Leading Industry Corporation</h5>
            <h3 style={{ margin: "0" }}>Best A Grade Commercial <br /> & Industrial Services</h3>
            <p style={{ backgroundColor: "", width: "70%", paddingTop: "20px", paddingBottom: "20px", fontSize: ".8em" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered altercation in some form, by injected humor, or randomised words which don't look even slightly believable or randomised words which don't look.</p>
            <Row>
              <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-building-fill-gear" viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.256A4.493 4.493 0 0 0 12.5 8a4.493 4.493 0 0 0-3.59 1.787A.498.498 0 0 0 9 9.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .39-.187A4.476 4.476 0 0 0 8.027 12H6.5a.5.5 0 0 0-.5.5V16H3a1 1 0 0 1-1-1V1Zm2 1.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" /><path d="M11.886 9.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" /></svg>
                <h5 style={{ paddingTop: "10px", paddingBottom: "10px", margin: "0" }}>Powerful Product <br /> Strategy</h5>
                <p style={{ backgroundColor: "", fontSize: ".8em", width: "95%" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sit adipisci aliquam unde ullam voluptatem earum ea.</p>
              </Col>
              <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-patch-check-fill" viewBox="0 0 16 16"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                <h5 style={{ paddingTop: "10px", paddingBottom: "10px", margin: "0" }}>Award Winning <br /> Project</h5>
                <p id='gallery' style={{ backgroundColor: "", fontSize: ".8em", width: "95%" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sit adipisci aliquam unde ullam voluptatem earum ea.</p>
              </Col>
            </Row>
          </div>

        </div>




        <div className={styles.videoContainer}>
          {/* <Image className={styles.newimage} src={demolition} alt="construction workers" */}
          <Image className={styles.newimage} src={'/photos/roofmetalpipe.jpg'} alt="construction workers"

            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>



      </div>


























      {/*-------------------- Recent Works ---------------------*/}
      <div id='galleryimg' style={{ textAlign: "center", backgroundColor: "#f1f1f1f7", padding: "40px", scrollMarginTop:'60px' }}>
        <h5 style={{ margin: "0", color: "#FF6710", fontWeight: "600" }}>Featured Project</h5>
        <h3 style={{ margin: "0", backgroundColor: "" }}><b>Our Recent Works</b></h3>
      </div>




      <div style={{ backgroundColor: "#f1f1f1f9", paddingBottom: "60px" }}>
        <Row style={{ backgroundColor: "", width: "70vw", margin: "auto" }}>



          <Col style={{ backgroundColor: "", padding: "20px" }}>
            <div style={{ backgroundColor: "", height: "40vh", position: 'relative' }}>
              {/* <Image
                src={chemTank}
                alt="chemical tank"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ borderRadius: "5px", position: "" }}
              /> */}
              <Image
                // src={demolition}
                src={'/photos/IMG_1343.JPG'}
                alt="construction workers"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ borderRadius: "5px", position: "" }}
              />


            </div>
            <div style={{ backgroundColor: "", padding: "15px" }}>
              <h6 style={{ margin: "0", paddingTop: "5px", paddingBottom: "5px" }}>Steam Piping</h6>
              <header style={{ color: "#FF6710", fontSize: ".9em" }}>Building Inertia</header>
              <p style={{ fontSize: ".8em", paddingTop: "10px", paddingBottom: "10px", margin: "0" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facilis repellendus debitis magni deserunt reiciendis, doloremque.</p>
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px", backgroundColor: "", marginTop: "" }}>
              <a style={{ backgroundColor: "", color: "white", textDecoration: "none" }} href="/services">
                <div style={{ backgroundColor: "#FF6710", padding: "10px", width: "90%", margin: "auto", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", display: "flex", justifyContent: "center", borderTop: "2px solid transparent" }}>
                  <div style={{ marginTop: "auto", marginBottom: "auto", paddingRight: "25px" }}>Explore More</div>
                  <div style={{ backgroundColor: "white", padding: "3px", borderRadius: "25px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ff6408" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                  </div>
                </div>
              </a>
            </div>
          </Col>



          <Col style={{ backgroundColor: "", padding: "20px" }}>
            <div style={{ backgroundColor: "", height: "40vh", position: 'relative' }}>
              <Image
                src={'/photos/IMG_2315.JPG'}
                alt="construction workers"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ borderRadius: "5px", position: "" }}
              />
            </div>
            <div style={{ backgroundColor: "", padding: "15px" }}>
              <h6 style={{ margin: "0", paddingTop: "5px", paddingBottom: "5px" }}>Chemical Tank</h6>
              <header style={{ color: "#FF6710", fontSize: ".9em" }}>Constructing, Engineering</header>
              <p style={{ fontSize: ".8em", paddingTop: "10px", paddingBottom: "10px", margin: "0" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facilis repellendus debitis magni deserunt reiciendis, doloremque.</p>
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px", backgroundColor: "", marginTop: "" }}>
              <a style={{ backgroundColor: "", color: "black", textDecoration: "none", fontWeight: "600" }} href="/services">
                <div style={{ backgroundColor: "", padding: "10px", width: "90%", margin: "auto", borderTopLeftRadius: "", borderTopRightRadius: "", display: "flex", justifyContent: "center", borderTop: "1px solid #B8B7B7" }}>
                  <div style={{ marginTop: "auto", marginBottom: "auto", paddingRight: "25px" }}>Explore More</div>
                  <div style={{ backgroundColor: "#FF6710", padding: "3px", borderRadius: "25px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                  </div>
                </div>
              </a>
            </div>
          </Col>



          <Col style={{ backgroundColor: "", padding: "20px" }}>
            <div style={{ backgroundColor: "", height: "40vh", position: 'relative' }}>
              <Image
                src={'/photos/IMG_5456.JPG'}
                alt="construction workers"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ borderRadius: "5px", position: "" }}
              />
            </div>
            <div style={{ backgroundColor: "", padding: "15px" }}>
              <h6 style={{ margin: "0", paddingTop: "5px", paddingBottom: "5px" }}>Rooftop Ductwork</h6>
              <header style={{ color: "#FF6710", fontSize: ".9em" }}>Renuvation Architecture</header>
              <p style={{ fontSize: ".8em", paddingTop: "10px", paddingBottom: "10px", margin: "0" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facilis repellendus debitis magni deserunt reiciendis, doloremque.</p>
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px", backgroundColor: "", marginTop: "" }}>
              <a style={{ backgroundColor: "", color: "black", textDecoration: "none", fontWeight: "600" }} href="/services">
                <div style={{ backgroundColor: "", padding: "10px", width: "90%", margin: "auto", borderTopLeftRadius: "", borderTopRightRadius: "", display: "flex", justifyContent: "center", borderTop: "1px solid #B8B7B7" }}>
                  <div style={{ marginTop: "auto", marginBottom: "auto", paddingRight: "25px" }}>Explore More</div>
                  <div style={{ backgroundColor: "#FF6710", padding: "3px", borderRadius: "25px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                  </div>
                </div>
              </a>
            </div>
          </Col>



        </Row>
        <div style={{ margin: "0", padding: "0", backgroundColor: "", textAlign: "center" }}>
          <a href="#currentimages" style={{ backgroundColor: "", textDecoration: "none", color: "#FF6710", fontSize: "40px", margin: "2px" }}>-</a>
          <a href="#nextslideimages" style={{ backgroundColor: "", textDecoration: "none", color: "gray", fontSize: "40px", margin: "2px" }}>-</a>
        </div>
      </div>



















      {/*-------------------- Sponsored companies ---------------------*/}
      <div className={styles.sponsoredList} style={{ backgroundColor: "white", borderTop: "1px solid #c0bdbdf2" }}>
        <Row style={{ display: "", width: "70vw", backgroundColor: "", margin: "auto", paddingTop: "60px", paddingBottom: "60px", position: 'relative' }}>
          <Col style={{ backgroundColor: "", paddingLeft: "0" }}><Image src={pabco} alt="pabco" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ position: "" }} /></Col>
          <Col style={{ backgroundColor: "" }}><Image src={threem} alt="3m" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ position: "" }} /></Col>
          <Col style={{ backgroundColor: "" }}><Image src={foam} alt="foam" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ position: "" }} /></Col>
          <Col style={{ backgroundColor: "" }}><Image src={johnsmanville} alt="johnsmanville" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ position: "" }} /></Col>
          <Col style={{ backgroundColor: "" }}><Image src={knauf} alt="knauf" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ position: "" }} /></Col>
          <Col style={{ backgroundColor: "" }}><Image src={proto} alt="proto" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ position: "" }} /></Col>
          <Col style={{ backgroundColor: "" }}><Image src={venture} alt="venture" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ position: "" }} /></Col>
          <Col style={{ backgroundColor: "", paddingRight: "0" }}><Image src={dowCorning} alt="dowcorning" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ position: "" }} /></Col>
        </Row>
      </div>




















      {/*-------------------- quote background image ---------------------*/}
      <div className={styles.quoteBkg}>
        <div style={{ width: "70vw", margin: "auto", paddingTop: "40px", display: "flex", backgroundColor: "", paddingBottom: "40px" }}>
          <div style={{ display: "flex" }}>
            <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-dash-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" /></svg>
            </div>
            <div style={{ backgroundColor: "", padding: "0", width: "", position: "relative", paddingLeft: "" }}>
              <div style={{ width: "", backgroundColor: "", height: "", paddingTop: "" }}>
                <div style={{ maxWidth: "80%", backgroundColor: "" }}>
                  <h5 style={{ fontWeight: "600", color: "white" }}>Leading The Way In Building And Civil Construction</h5>
                  <h2 style={{ fontWeight: "700", fontSize: "", color: "white" }}>Ready to Bring Bigger, Better, Faster, And Stronger Projects Than Ever Before!</h2>
                </div>
                <div style={{ backgroundColor: "", bottom: "0", position: "absolute", whiteSpace: "nowrap" }}>
                  <div style={{ paddingTop: "5px", backgroundColor: "", display: "flex" }}>
                    <div style={{ backgroundColor: "#FF6710", margin: "", display: "flex", borderRadius: "30px" }}>
                      <svg style={{ margin: "auto" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                    </div>
                    <span style={{ paddingLeft: "10px", color: "white" }}>Quality Control Systen, 100% Satisafaction Guarantee</span>
                  </div>
                  <div style={{ paddingTop: "5px", backgroundColor: "", display: "flex" }}>
                    <div style={{ backgroundColor: "#FF6710", margin: "", display: "flex", borderRadius: "30px" }}>
                      <svg style={{ margin: "auto" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                    </div>
                    <span style={{ paddingLeft: "10px", color: "white" }}>Highly Professional Staff, Accurate testing processes</span>
                  </div>
                  <div style={{ paddingTop: "5px", backgroundColor: "", display: "flex" }}>
                    <div style={{ backgroundColor: "#FF6710", margin: "", display: "flex", borderRadius: "30px" }}>
                      <svg style={{ margin: "auto" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                    </div>
                    <span id='quote' style={{ paddingLeft: "10px", color: "white" }} >Unrivaled Workmanship Professional And Qualified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "", padding: "0", width: "" }}>
            <div style={{ backgroundColor: "white", height: "100%", display: "flex", width: "230px", float: "right", borderRadius: "5px" }}>
              <div style={{ backgroundColor: "", margin: "auto", padding: "40px", paddingTop: "30px", paddingBottom: "30px", width: "" }}>
                <div style={{ paddingBottom: "10px", paddingTop: "10px", backgroundColor: "" }}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-gear-wide-connected" viewBox="0 0 16 16"><path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" /></svg></div>
                <p style={{ fontSize: ".9em", margin: "0", backgroundColor: "", paddingTop: "10px", paddingBottom: "10px" }}>Utilising latest processing solution and decades of work experience.</p>
                <div style={{ backgroundColor: "", fontSize: "20px" }}>
                  <span><a href="" style={{ textDecoration: "none", marginRight: "8px" }}>-</a></span>
                  <span><a href="" style={{ textDecoration: "none" }}>-</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


























      {/*-------------------- Request a Quote window ---------------------*/}

      <div className={styles.quoteWindow} style={{ backgroundColor: "#DADADA", marginBottom: "", paddingBottom: "300px" }}>
        <div style={{ display: "", backgroundColor: "white", paddingLeft: "50px", paddingRight: "50px", paddingTop: "50px", width: "70vw", margin: "auto", borderRadius: "8px", transform: "translate(0, -100px)" }}>



          <div style={{ display: "flex", paddingBottom: "50px", borderBottom: "4px solid #FF6710", height: "" }}>





            <div style={{ width: "35%", padding: "", color: "whitesmoke" }}>
              <div style={{ backgroundColor: "#FF6710", height: "50%" }}>
                <div style={{ backgroundColor: "", width: "80%", margin: "auto", paddingTop: "20px" }}>
                  <div style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                    <header style={{ paddingBottom: "5px", fontWeight: "700" }}>Our Location</header>
                    <div style={{ fontWeight: "300" }}>
                      <div>2 Nora Rd Edison</div>
                      <div>New Jersey 08837 United States</div>
                    </div>
                  </div>
                  <div>
                    <header style={{ fontWeight: "700" }}>Quick Contact</header>
                    <div style={{ fontWeight: "300" }}>
                      <div>Email: wjbestinsulation@gmail.com</div>
                      {/* <div>Support: wjbest@gmail.com</div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: "#FF6710", height: "50%" }}>
                <div style={{ backgroundColor: "", width: "80%", margin: "auto", paddingTop: "50px" }}>
                  <p style={{ fontSize: ".8em", fontWeight: "600" }}>We Will Get back to you within 24 hours, or send us an email! <br /> <br /> 09:00 AM - 5:30 PM</p>
                  <div style={{ paddingTop: "5px", fontWeight: "600" }}>
                    <a style={{ textDecoration: "none", color: "white", fontSize: "1.2em" }} href="tel:7329101016">
                      <svg style={{ backgroundColor: "", margin: "auto", padding: "5px", borderRadius: "50%", border: "1px solid white" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /></svg>
                      &nbsp;&nbsp; 732 910 1016
                    </a>
                  </div>
                </div>
              </div>
            </div>



            <div style={{ backgroundColor: "", width: "65%", padding: "20px", paddingBottom: "0", paddingTop: "0", height: "" }}>
              <h2 style={{ fontWeight: "700", backgroundColor: "", margin: "0", color: "black" }}>Request A Quote</h2>
              <p style={{ fontSize: ".8em", backgroundColor: "", margin: "0", paddingTop: "10px", paddingBottom: "10px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi vitae delectus obcaecati omnis unde possimus, quibusdam laudantium cum dolore itaque?</p>
              <form action="/send-data-here" method="post" style={{ backgroundColor: "", height: "", position: "" }}>
                <div style={{ display: "flex", padding: "10px", paddingLeft: "0", backgroundColor: "" }}>
                  <div style={{ width: "50%" }}>
                    <input style={{ height: "40px", width: "70%", backgroundColor: "#DADADA", border: "none", borderRadius: "4px", textIndent: "10px" }} type="text" id="first" name="first" placeholder='Name' />
                  </div>
                  <div style={{ width: "50%" }}>
                    <input style={{ height: "40px", width: "70%", backgroundColor: "#DADADA", border: "none", borderRadius: "4px", textIndent: "10px" }} type="text" id="email" name="email" placeholder='Email' />
                  </div>
                </div>
                <div style={{ display: "flex", padding: "10px", paddingTop: "20px", paddingBottom: "20px", paddingLeft: "0" }}>
                  <div style={{ width: "50%" }}>
                    <input style={{ height: "40px", width: "70%", backgroundColor: "#DADADA", border: "none", borderRadius: "4px", textIndent: "10px" }} type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='Phone' />
                  </div>
                  <div style={{ width: "50%" }}>
                    {/* <input style={{ height: "40px", width: "70%", backgroundColor: "#DADADA", border: "none", borderRadius: "4px", textIndent: "10px" }} type="text" id="industry" name="industry" placeholder='Select Your Industry' /> */}
                    <input style={{ height: "40px", width: "70%", backgroundColor: "#DADADA", border: "none", borderRadius: "4px", textIndent: "10px" }} type="text" id="industry" name="industry" placeholder='Location' />
                  </div>
                </div>
                <div style={{ padding: "10px", paddingLeft: "0" }}>
                  <textarea style={{ width: "85%", backgroundColor: "#DADADA", border: 'none', borderRadius: "4px", textIndent: "10px", height: "150px" }} name="text" class="validate[required,length[6,300]] feedback-input" placeholder="Addition Detail"></textarea>
                </div>
                <div style={{ backgroundColor: "", paddingLeft: "10px", paddingTop: "10px", display: "flex" }}>
                  <div className='btn' style={{ backgroundColor: "black", color: "white", display: "", padding: "20px", paddingRight: "30px", paddingLeft: "30px", borderRadius: "7px" }}>
                    Submit Request
                  </div>
                  <div style={{ marginTop: "auto", marginBottom: "auto", backgroundColor: "", paddingLeft: "20px" }}>
                    <input type="radio" id="terms" name="terms" />
                    <label for="terms">&nbsp;&nbsp;I accept the Terms & Conditions</label>
                  </div>
                </div>
              </form>
            </div>



          </div>



        </div>

























        {/*-------------------- client testimony ---------------------*/}
        {/* gave display none in css */}

        <div className={styles.testimony}>


          <div>
            <div style={{ height: "80px", width: "80px", margin: "auto", display: "", backgroundColor: "whitesmoke", borderRadius: "40px" }}>
              <img style={{ height: "", borderRadius: "", objectFit: "contain", height: "100%", width: "100%", overflow: "hidden", borderRadius: "50%" }} src="https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ=" alt="" />
            </div>
            <h6 style={{ textAlign: "center", padding: "10px" }}>John Peter</h6>
          </div>


          <div style={{ width: "70%", backgroundColor: "" }}>
            <header style={{ color: "#FF6710", fontWeight: "500" }}>what your client's say</header>
            <p style={{ fontWeight: "800", fontSize: "1em", paddingTop: "15px", paddingBottom: "15px" }}>"Lorem ipsum dolor sit amet adipisicing elit. Officiis eum, quae nesciunt, similique tempora saepe quaerat deserunt accusamus exercitationem amet! Dolore ipsum et recusandae nam! Doloremque corporis ab modi tempore harum perspiciatis! Maiores, aspernatur delectus iste eos ducimus perferendis."</p>
          </div>
        </div>


      </div>





























      {/*-------------------- recent articles ---------------------*/}
      <div style={{ backgroundColor: "", paddingBottom: "", transform: "translate(0, -200px)", height: "600px" }}>
        <h2 style={{ width: "70vw", margin: "auto" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FF6710" class="bi bi-dash-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" /></svg>
          &nbsp; Recent Articles
        </h2>


        <Row style={{ backgroundColor: "", width: "70vw", margin: "auto" }}>
          <Col style={{ backgroundColor: "", padding: "20px" }}>
            <div style={{ backgroundColor: "", height: "40vh", position: 'relative' }}>
              {/* <Image
                src={chemTank}
                alt="chemical tank"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ borderRadius: "5px", position: "" }}
              /> */}
              <Image
                src={'/photos/longduct.jpeg'}
                alt="construction workers"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ borderRadius: "5px", position: "" }}
              />

            </div>
            <div style={{ backgroundColor: "", padding: "15px" }}>
              <header style={{ color: "#FF6710", fontSize: ".9em" }}>Ventureclad Finish
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FF6710" class="bi bi-dash-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" /></svg>
              </header>
              <h6 style={{ margin: "0", paddingTop: "5px", paddingBottom: "5px", fontWeight: "800" }}>Important archive cost saving through the sale rule</h6>
              <header style={{ fontSize: ".8em", paddingTop: "5px", paddingBottom: "5px" }}>Jan 20, 2023</header>
              <p style={{ fontSize: ".8em", paddingTop: "10px", paddingBottom: "10px", margin: "0" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facilis repellendus debitis magni deserunt reiciendis, doloremque.</p>
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px", backgroundColor: "", marginTop: "" }}>
              <a style={{ backgroundColor: "", color: "#FF6710", textDecoration: "none" }} href="">
                <div style={{ backgroundColor: "", padding: "15px", width: "90%", margin: "", display: "flex", justifyContent: "start", borderTop: "2px solid transparent" }}>
                  <div style={{ marginTop: "auto", marginBottom: "auto", paddingRight: "25px" }}>Read More</div>
                  <div style={{ backgroundColor: "#FF6710", padding: "3px", borderRadius: "25px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col style={{ backgroundColor: "", padding: "20px" }}>
            <div style={{ backgroundColor: "", height: "40vh", position: 'relative' }}>
              <Image
                src={'/photos/symmetrical.JPG'}
                alt="construction workers"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ borderRadius: "5px", position: "" }}
              />
            </div>
            <div style={{ backgroundColor: "", padding: "15px" }}>
              <header style={{ color: "#FF6710", fontSize: ".9em" }}>Chilled Water
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FF6710" class="bi bi-dash-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" /></svg>
              </header>
              <h6 style={{ margin: "0", paddingTop: "5px", paddingBottom: "5px", fontWeight: "800" }}>Cargo flow through better supply chain visibility.</h6>
              <header style={{ fontSize: ".8em", paddingTop: "5px", paddingBottom: "5px" }}>Jan 23, 2023</header>
              <p style={{ fontSize: ".8em", paddingTop: "10px", paddingBottom: "10px", margin: "0" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facilis repellendus debitis magni deserunt reiciendis, doloremque.</p>
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px", backgroundColor: "", marginTop: "" }}>
              <a style={{ backgroundColor: "", color: "black", textDecoration: "none" }} href="">
                <div style={{ backgroundColor: "", padding: "15px", width: "90%", margin: "", display: "flex", justifyContent: "start", borderTop: "2px solid transparent" }}>
                  <div style={{ marginTop: "auto", marginBottom: "auto", paddingRight: "25px" }}>Read More</div>
                  <div style={{ backgroundColor: "black", padding: "3px", borderRadius: "25px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col style={{ backgroundColor: "", padding: "20px" }}>
            <div style={{ backgroundColor: "", height: "40vh", position: 'relative' }}>
              <Image
                src={'/photos/IMG_9716.PNG'}

                alt="construction workers"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ borderRadius: "5px", position: "" }}
              />
            </div>
            <div style={{ backgroundColor: "", padding: "15px" }}>
              <header style={{ color: "#FF6710", fontSize: ".9em" }}>Metal Jacketing
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FF6710" class="bi bi-dash-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" /></svg>
              </header>
              <h6 style={{ margin: "0", paddingTop: "5px", paddingBottom: "5px", fontWeight: "800" }}>Importance of a specialized focus in Project Oil & Gas?</h6>
              <header style={{ fontSize: ".8em", paddingTop: "5px", paddingBottom: "5px" }}>Feb 20, 2023</header>
              <p style={{ fontSize: ".8em", paddingTop: "10px", paddingBottom: "10px", margin: "0" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facilis repellendus debitis magni deserunt reiciendis, doloremque.</p>
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px", backgroundColor: "", marginTop: "" }}>
              <a style={{ backgroundColor: "", color: "black", textDecoration: "none" }} href="">
                <div style={{ backgroundColor: "", padding: "15px", width: "90%", margin: "", display: "flex", justifyContent: "start", borderTop: "2px solid transparent" }}>
                  <div style={{ marginTop: "auto", marginBottom: "auto", paddingRight: "25px" }}>Read More</div>
                  <div style={{ backgroundColor: "black", padding: "3px", borderRadius: "25px" }}>
                    <svg id='contact' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                  </div>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </div>


      {/*------------------------------------------------------------------ end ------------------------------------------------------------------------*/}
    </div>
  )
};
