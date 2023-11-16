import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formexample() {
    return (




        
        <Form className='mb-3' style={{ backgroundColor:"", paddingTop:"10px"}}>


            <Form.Group className='mb-3'  controlId="formBasicEmail">


                <Form.Control type="email" placeholder="Your Email Address" style={{backgroundColor:"white", textAlign:"center", width:"100%"}}/>


            </Form.Group>






            <Button style={{ margin:"auto", display:"flex", width:"50%", justifyContent:"center"}} variant="primary" type="submit">
                Submit
            </Button>

            
        </Form>






    );
}

export default Formexample;