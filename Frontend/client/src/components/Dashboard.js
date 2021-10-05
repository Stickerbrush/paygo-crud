import {
    Container,
    Jumbotron,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    ListGroupItem,
    ListGroup,
    Table, Col, Row
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Dashboard.css";
import {useEffect, useState} from "react";
import axios from "axios";
import CustomNavbar from "./CustomNavbar";
import jwt from "jsonwebtoken";
import {djangoApi} from "../api/api";

/*  =============== Dashboard
Main user dashboard component
*/

const Dashboard = () => {
    const data_token = localStorage.getItem('token-data')
    const [profile, setProfile] = useState(
        jwt.verify(data_token, 'userdata').profile
    )
    const [subEmployees, setSubemployees] = useState([])
    const [salesSum, setSalesSum] = useState(0)
    const [bossName, setBossName] = useState('N/A')


    useEffect(() => {
        //Retrieve subemployee data
        axios.get(djangoApi + 'api/users/get/' + profile['numero_de_empleado'])
            .then(response => {
                setSubemployees(response.data.data['subemployees']);
                setSalesSum(response.data.data['sales_sum']);
            })

        //Retrieve boss name
        axios.get(djangoApi + 'api/users/get/' + profile['jefe'])
            .then(response => {
                let boss = response.data.data.user
                setBossName(boss['nombre'] + " " +
                            boss['primer_apellido'] + " " +
                            boss['segundo_apellido'])
            })
    }, [profile])

    const formatNumber = (number) =>{
        return new Intl.NumberFormat('ES-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(number)
    }

    const checkSubemployee = (event) =>{
        let boss_name = profile['nombre'] + " " + profile['primer_apellido'] + " " + profile['segundo_apellido'];
        let subemployee_id = event.target.id
        axios.get(djangoApi +'api/users/get/' + subemployee_id)
            .then(response => {
                setProfile(response.data.data['user']);
                setSubemployees(response.data.data['subemployees']);
                setSalesSum(response.data.data['sales_sum']);
            })

        //Use same boss name as the main user
        setBossName(boss_name)
    }

    return(
        <>
            <CustomNavbar/>

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

                        <Container style={{paddingBottom: '20px', paddingTop: '20px'}}>
                            <Row>
                                <Col xs="4" >
                                    <CardImg className="profile-pic"src={profile['foto_perfil']} alt="Card image cap" />
                                </Col>

                                <Col xs="8">
                                    <Row> {profile['cargo']}</Row>
                                    <Row> {profile['area_operacional']}</Row>
                                    <Row> {profile['ciudad'] + ", " + profile['departamento']}</Row>
                                    <Row>
                                        <Container
                                                style ={{backgroundColor: 'green',
                                                         marginLeft: '0px',
                                                         width: '10em',
                                                         display: 'inline-block'}}
                                        >
                                          <strong>{salesSum === 0 ? formatNumber(profile['ventas'])
                                                            : formatNumber(salesSum)}</strong>
                                        </Container>
                                    </Row>

                                </Col>
                            </Row>
                        </Container>

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

                {subEmployees.length!==0 && (<Container>
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
                            {subEmployees.map(subemployee => (
                                <tr key = {subemployee['numero_de_empleado']}>
                                    <td className="subemployee-td"
                                        id = {subemployee['numero_de_empleado']}
                                        onClick={checkSubemployee} >
                                        {subemployee['nombre'] + " " +
                                         subemployee['primer_apellido'] + " " +
                                         subemployee['segundo_apellido']}
                                    </td>
                                    <td>
                                        {formatNumber(subemployee['ventas'])}
                                    </td>

                                </tr>

                            ))}
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
