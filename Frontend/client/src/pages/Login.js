
import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
import LoginForm from "../components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css";
/*  =============== Login
Login page to validate the user
*/

const Login = () => {

    return(
            <Container>
                <Row>
                    <Col />
                    <Col lg="8">
                        <Jumbotron>
                            <h3>
                                PayGo Test Login
                            </h3>
                            <hr />
                            <Card >
                                <CardBody>
                                    <LoginForm />
                                </CardBody>
                            </Card>
                        </Jumbotron>
                    </Col>
                    <Col />
                </Row>
            </Container>
    );
};

export default Login;
