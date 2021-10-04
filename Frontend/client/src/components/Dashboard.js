import {
    Container,
    Jumbotron,
    Card,
    CardBody,
    Navbar,
    Button,
    NavItem,
    NavLink,
    Nav,
    CardImg, CardTitle, CardSubtitle, CardText, ListGroupItem, ListGroup, Table
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Dashboard.css";
import {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {Store} from "../store/StoreContext";
import axios from "axios";

/*  =============== Dashboard
Main user dashboard component
*/

const Dashboard = () => {
    const {user} = useContext(Store);
    let history = useHistory();
    const profile = user.profile;
    const [subEmployees, setSubemployees] = useState([])
    const [salesSum, setSalesSum] = useState(0)
    const [bossName, setBossName] = useState('N/A')


    const handleLogout = () => {
        history.push('/')
    }

    useEffect(() => {
        //Retrieve subemployee data
        axios.get('http://localhost:8000/api/users/get/' + profile['numero_de_empleado'])
            .then(response => {
                console.log(response.data.data)
                setSubemployees(response.data.data['subemployees']);
                setSalesSum(response.data.data['sales_sum']);
            })

        //Retrieve boss name
        axios.get('http://localhost:8000/api/users/get/' + profile['jefe'])
            .then(response => {
                console.log(response)
                let boss = response.data.data.user
                setBossName(boss['nombre'] + " " +
                            boss['primer_apellido'] + " " +
                            boss['segundo_apellido'])
            })
    }, [])

    useEffect(() => {
       console.log("WOOOOW " )
        console.log(user)
    });

    return(
        <>
        <Navbar className="ml-auto"  light expand="md">
            <Nav className="ml-auto" navbar >
                <NavItem>
                    <NavLink>
                        <Button color="dark"
                                onClick={handleLogout}
                        >
                            Log Out
                        </Button>
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>

        <Container>
            <Jumbotron>
                <hr />
                <Card>
                    <CardBody>
                        <CardTitle tag="h5" className="text-light">Perfil del Usuario</CardTitle>
                        <CardTitle tag="h6"
                                      className="text-light bold">
                            <strong>
                            {profile['nombre'] + " " + profile['primer_apellido'] + " " + profile['segundo_apellido']}
                            </strong>
                        </CardTitle>

                        <CardImg top width="50%" src="/assets/318x180.svg" alt="Card image cap" />

                        <CardText >
                            <ListGroup>
                                <ListGroupItem ><strong>Teléfono: </strong> {profile['numero_celular']}</ListGroupItem>
                                <ListGroupItem><strong>Email: </strong> {profile['email']}</ListGroupItem>
                                <hr/>
                                <ListGroupItem><strong>Fecha de Nacimiento: </strong>{profile['fecha_de_nacimiento']}</ListGroupItem>
                                <ListGroupItem><strong>Cedula: </strong>{profile['cedula']}</ListGroupItem>
                                <hr/>
                                <ListGroupItem><strong>Fecha de Ingreso: </strong> {profile['fecha_ingreso']}</ListGroupItem>
                                <ListGroupItem><strong>Jefe: </strong>{bossName}</ListGroupItem>
                            </ListGroup>
                        </CardText>
                    </CardBody>
                </Card>
                <hr />

                {subEmployees.length!==0 && (<Container isOpen={false}>
                    <h5> Subalternos</h5>
                    <Card style = {{backgroundColor: 'white'}}>
                        <Table>
                            <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Ventas</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                            <tr>
                                <td>Larry</td>
                                <td>the Bird</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Container> )}

            </Jumbotron>
        </Container>

        </>
    );
};

export default Dashboard;
