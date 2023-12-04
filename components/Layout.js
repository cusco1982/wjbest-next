import styles from '../styles/Layout.module.css';
import Toolbar from './Toolbar.js'
import Footer from './Footer.js';

import FixedBottomNav from './FixedBottomNav.js';


const Layout = ({ children }) => {



    return (

        <>
            <Toolbar />



            <div className={styles.container}>

                {children}

            </div>



            <Footer />



            <FixedBottomNav />




        </>

    )
}
export default Layout;
