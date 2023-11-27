import Head from 'next/head'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Image from 'next/image';
// import Image from 'next/image'
import styles from '../styles/Services.module.css'

import Jumbotron from '../components/Jumbotron'

import piping from '../photos/icons/insulation.png';
import consulting from '../photos/icons/safety.png';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Services | WJ Best Insulation - Edison, NJ</title>
        <meta name="description" content="WJ Best Insulation New Jersey Services" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap" rel="stylesheet" />
      </Head>
      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}






      <Jumbotron />





      <div id='servicegrid' style={{ textAlign: 'center',  zIndex:'100', scrollMarginTop:'70px' }}>
      {/* <div style={{ textAlign: 'center', transform:'translate(0,-25em)', zIndex:'100' }}> */}



        <h1 className='my-5' style={{ backgroundColor: '', display: 'inline-block', borderBottom: '1px solid black', color:'black'}}>Services</h1>
        {/* <h1 className='my-5' style={{ backgroundColor: '', display: 'inline-block', borderBottom: '1px solid black', color:'white'}}>Services</h1> */}


        <div class="container text-center">















          <div class="row" style={{ justifyContent: 'center', backgroundColor: '', margin: 'auto' }}>






            <div class="col-3 shadow p-3 mb-5 mx-4 bg-white rounded">
              {/* <svg style={{ backgroundColor: 'purple', borderRadius: '40px', padding: '10px' }} xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="white" class="bi bi-people-fill" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" /></svg> */}
              <Image
                src={piping}
                alt='piping'
                height={120}
                width={120}
                style={{ backgroundColor: '', borderRadius: '60px', padding: '20px', border: '1px solid red' }}
              />
              <h4 style={{ backgroundColor: '', paddingBottom: '10px', paddingTop: '10px' }}>Piping</h4>
              <ul style={{ backgroundColor: '', textAlign: 'left', justifyContent: '', display: 'inline-block' }}>
                <li>Chilled water</li>
                <li>Hot water</li>
                <li>Domestic water</li>
                <li>Chilled water</li>
              </ul>
            </div>






            <div class="col-3 shadow p-3 mb-5 mx-4 bg-white rounded" style={{ backgroundColor: '', paddingBottom: '', borderBottom: '' }}>
              <img style={{ height: '120px', width: '120px', backgroundColor: '', borderRadius: '60px', padding: '30px', color: '', border: '1px solid red' }} src="https://www.mes.gov.pk/sites/default/files/2023-06/hvac.png" alt="" />
              <h4 style={{ backgroundColor: '', paddingBottom: '10px', paddingTop: '10px' }}>Ductwork</h4>
              <ul style={{ backgroundColor: '', textAlign: 'left', justifyContent: '', display: 'inline-block' }}>
                <li>Heating & Cooling</li>
                <li>Grease exhaust</li>
                <li>Ventilation</li>
                <li>Breechings</li>
              </ul>
            </div>








            <div class="col-3 shadow p-3 mb-5 mx-4 bg-white rounded" style={{ backgroundColor: '', paddingBottom: '', borderBottom: '' }}>
              <img style={{ height: '120px', width: '120px', backgroundColor: '', borderRadius: '30px', padding: '20px', color: '', border: '1px solid red' }} src="https://cdn2.iconfinder.com/data/icons/pfd-equipment-tool/32/Reactor-512.png" alt="" />
              <h4 style={{ backgroundColor: '', paddingBottom: '10px', paddingTop: '10px' }}>Tanks</h4>
              <p>All mechanical and process systems tanks</p>
            </div>




          </div>



















          <div class="row" style={{ justifyContent: 'center', backgroundColor: '', margin: 'auto' }}>




            <div class="col-3 shadow p-3 mb-5 mx-4 bg-white rounded" style={{ backgroundColor: '', paddingBottom: '', borderBottom: '' }}>
              <img style={{ height: '120px', width: '120px', backgroundColor: '', borderRadius: '30px', padding: '20px', color: 'red', border: '1px solid red' }} src="https://cdn-icons-png.flaticon.com/256/2983/2983881.png" alt="" />
              <h4 style={{ backgroundColor: '', paddingBottom: '10px', paddingTop: '10px' }}>Equipment</h4>
              <ul style={{ backgroundColor: '', textAlign: 'left', justifyContent: '', display: 'inline-block' }}>
                <li>Chillers</li>
                <li>Boilers</li>
                <li>Pumps</li>
                <li>Heat Exchangers</li>
              </ul>
            </div>




            <div class="col-3 shadow p-3 mb-5 mx-4 bg-white rounded" style={{ backgroundColor: '', paddingBottom: '', borderBottom: '' }}>
              <img style={{ height: '120px', width: '120px', backgroundColor: '', borderRadius: '30px', padding: '30px', color: 'red', border: '1px solid red' }} src="https://cdn-icons-png.flaticon.com/512/5672/5672137.png" alt="" />
              <h4 style={{ backgroundColor: '', paddingBottom: '10px', paddingTop: '10px' }}>Jacketing</h4>
              <ul style={{ backgroundColor: '', textAlign: 'left', justifyContent: '', display: 'inline-block' }}>
                <li>Aluminum jacketing</li>
                <li>Stainless steel</li>
                <li>PVC</li>
                <li>Direct burial jacketing</li>
              </ul>
            </div>




            <div class="col-3 shadow p-3 mb-5 mx-4 bg-white rounded" style={{ backgroundColor: '', paddingBottom: '', borderBottom: '' }}>
              <Image
                src={consulting}
                alt='piping'
                height={120}
                width={120}
                style={{ backgroundColor: '', borderRadius: '60px', padding: '20px', border: '1px solid red' }}
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
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />






      {/*------------------------------------------------------------------ end ------------------------------------------------------------------------*/}
    </div>
  )
};
