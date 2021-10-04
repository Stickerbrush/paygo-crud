import { AvForm, AvField } from "availity-reactstrap-validation";
import {Button, Modal, ModalBody, ModalFooter} from "reactstrap";
import {useContext, useEffect, useState} from "react";
import axios from 'axios';
import {useHistory} from "react-router-dom";
import {Store} from "../store/StoreContext";

const LoginForm = () => {
    const [credentials, setCredentials] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isSending, setIsSending] = useState(false);
    const history = useHistory();
    const { setUser } = useContext(Store)


    const handleInput = (event) =>{
        setCredentials({
            ...credentials,
            [event.target.name] :event.target.value
        })
        console.log(credentials)
    }

    /* Used for cleaning the errors variable after
    *  clicking on the modal button
    * */
    const removeErrors = () =>{
        setErrors([])
    }

    const sendCredentials = (event) => {
        event.preventDefault()
        setIsSending(true)
        console.log('Sending data...' + credentials.email + credentials.password)
        axios.post('http://localhost:8000/api/oauth/login',
              {email : credentials.email,
                    password: credentials.password
                  })
            .then(response => {
                setIsSending(false)
                setUser(response.data.data)
                history.push('/main')
            })
            .catch(error => {
                console.log("mgmdfigomid")
                setErrors([error])
                console.log(errors.length)
                setIsSending(false)
            })
    }

    return(
        <>

            <Modal isOpen = {errors.length === 0 ? false : true}
                   style = {{paddingTop: '7em'}}>
                <ModalBody>
                    User authentication error: invalid credentials
                </ModalBody>
                <ModalFooter al style = {{justifyContent: "center"}}>
                    <Button color="dark" onClick={removeErrors}>Ok</Button>
                </ModalFooter>
            </Modal>

            <AvForm
                onSubmit={sendCredentials}
            >
                <AvField
                    name="email"
                    label="Email"
                    type="text"
                    onChange = {handleInput}
                    validate={{
                        required: true,
                        email: true
                    }}
                />
                <AvField
                    name="password"
                    label="Password"
                    type="password"
                    onChange = {handleInput}
                    validate={{
                        required: {
                            value: true,
                            errorMessage: "Please enter your password"
                        },
                        pattern: {
                            value: "^[A-Za-z0-9]+$",
                            errorMessage:
                                "Your password must be composed only with letter and numbers"
                        },
                        minLength: {
                            value: 8,
                            errorMessage: "Your password must be between 8 and 16 characters"
                        },
                        maxLength: {
                            value: 16,
                            errorMessage: "Your password must be between 8 and 16 characters"
                        }
                    }}
                />
                <Button id="submit" color="dark" disabled={isSending}>
                    Login
                </Button>
            </AvForm>
        </>
    );
};

export default LoginForm;
