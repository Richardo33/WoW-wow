import { useState } from "react"
import { Modal,Button,Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "../../pages/syling/modalSignIn.css"

function ButtonSignIn (){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()

    const handleSignIn= ()=>{
        navigate("/home")
    }
  
    
    return (
        <div>
            <Button className="px-5 mx-3" size="lg" variant="secondary" onClick={handleShow}>
                Sign In
            </Button>

            <Modal className="modal" show={show} onHide={handleClose} animation={false}>

                <Modal.Title className="mx-4 py-4">Sign In</Modal.Title>
                
                    <Form>
                            <Form.Group className="modalInput" controlId="exampleForm.ControlInput1">
                                <Form.Control className="mb-4"  type="email" placeholder="Email" />
                                <Form.Control className="mb-4" type="password" placeholder="Password" />
                            </Form.Group>
                    </Form>
                
               
          
                <Button className="buttSignIn" variant="danger" onClick={handleSignIn}>
                   <p> Sign In </p>
                </Button>

                <Modal.Footer className="justify-content-center">Don't have an account ? Klik <b>Here</b> </Modal.Footer>
              
            </Modal>
        </div>
        )
        
}


export default ButtonSignIn;