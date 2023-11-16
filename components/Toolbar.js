import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import OffcanvasButton from './OffcanvasButton';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Toolbar.module.css';




function Toolbar() {


  const router = useRouter();
  const [small, setSmall] = useState(false);


  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);



  
  useEffect(() => {
    if (small) {
      var elms = document.querySelectorAll("[id='links']");
      for(var i = 0; i < elms.length; i++) 
        elms[i].style.color = "black";
    }
    else{
      var elms = document.querySelectorAll("[id='links']");
      for(var i = 0; i < elms.length; i++) 
        elms[i].style.color = "white";
    }
  });




  // useEffect(() => {
  //   var prevScrollpos = window.pageYOffset;
  //   window.onscroll = function() {
  //     var currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.getElementById("nav").style.top = "0";
  //     } else {
  //       document.getElementById("nav").style.top = "-70px";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   }
  // }, []);








  return (


    <div className={small ? styles.smallNavComp : styles.navComponent} id="nav">




      {/* ---------------------------------------------------------------- */}
      <div className={styles.navLeft}>
        <div>
          <a href="" className={styles.Logo} id="links">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-triangle-half" viewBox="0 0 16 16"><path d="M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017.162.162 0 0 0 .054-.06.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" /></svg></div>
            <div>WJ</div>
            <div>Best</div>
            <div>Insulation</div>
          </a>
        </div>
      </div>







      {/* ---------------------------------------------------------------- */}
      <div className={styles.navCenter}>
        
        <div className={styles.navLinks}>
          <Col ><a className={router.pathname == "/" ? styles.active : styles.inactive} id="links" href="/">Home</a></Col>
          <Col ><a className={router.pathname == "/services" ? styles.active : styles.inactive} id="links" href="/services">Services</a></Col>
          <Col ><a className={router.pathname == "/gallery" ? styles.active : styles.inactive} id="links" href="/gallery">Gallery</a></Col>
          <Col ><a className={router.pathname == "/contact" ? styles.active : styles.inactive} id="links" href="/contact">Contact</a></Col>
          <Col ><a className={router.pathname == "/quote" ? styles.active : styles.inactive} id="links" href="/quote">Quote</a></Col>
        </div>

        <div className={styles.quoteButton}>
          <a href="/quote">
            <div>
              <div>Get A Quote</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
            </div>
          </a>
        </div>

      </div>







      {/* ---------------------------------------------------------------- */}
      <div className={styles.navRight}>
        <div>
          <a title='Call Now' href="tel:7329101016">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-telephone-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /></svg>
            <div  id="links">732 - 910 - 1016</div>
          </a>
          <div>
            <OffcanvasButton />
          </div>
        </div>
      </div>







    </div>
  );
}

export default Toolbar;