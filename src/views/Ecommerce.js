import React from "react";
import { Line } from 'react-chartjs-2';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from "react-icons/gr";
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';

import './update.css';


// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Ecommerce() {
    return (
        <>
            <Row>
                <Col lg="3" sm="6">
                    <Card className="card-stats cartCard">
                    <Card.Body>
                        <Row>
                        <Col xs="5">
                            <div className="icon-big text-center icon-warning">
                                <FiIcons.FiShoppingCart className="cardIcon"/>
                            </div>
                        </Col>
                        <Col xs="7">
                            <div className="numbers">
                            <Card.Title as="h4" className = "whiteText">690</Card.Title>
                            <p className="card-category whiteText">New</p>
                            
                            </div>
                        </Col>
                        </Row>
                        <Row>
                            <Col xs="8" className="card-category whiteText textPaddingLeft">
                               Orders
                            </Col>
                            <Col xs="4" className="card-category whiteText">
                                 6,00,00
                            </Col>
                        </Row>
                        
                    </Card.Body>
                    <Card.Footer></Card.Footer>
                    </Card>
                </Col>
                <Col lg="3" sm="6">
                <Card className="card-stats userCard">
                    <Card.Body>
                        <Row>
                        <Col xs="5">
                            <div className="icon-big text-center icon-warning">
                                <FaIcons.FaUserCircle className="cardIcon"/>
                            </div>
                        </Col>
                        <Col xs="7">
                            <div className="numbers">
                            <Card.Title as="h4" className = "whiteText">1885</Card.Title>
                            <p className="card-category whiteText">New</p>
                            
                            </div>
                        </Col>
                        </Row>
                        <Row>
                            <Col xs="8" className="card-category whiteText textPaddingLeft">
                               Clients
                            </Col>
                            <Col xs="4" className="card-category whiteText">
                                 1,12,90
                            </Col>
                        </Row>
                        
                    </Card.Body>
                    <Card.Footer></Card.Footer>
                    </Card>
                </Col>
                <Col lg="3" sm="6">
                <Card className="card-stats growthCard">
                    <Card.Body>
                        <Row>
                        <Col xs="5">
                            <div className="icon-big text-center icon-warning">
                                <FiIcons.FiTrendingUp className="cardIcon"/>
                            </div>
                        </Col>
                        <Col xs="7">
                            <div className="numbers">
                            <Card.Title as="h4" className = "whiteText">80%</Card.Title>
                            <p className="card-category whiteText">Growth</p>
                            
                            </div>
                        </Col>
                        </Row>
                        <Row>
                            <Col xs="8" className="card-category whiteText textPaddingLeft">
                               Sales
                            </Col>
                            <Col xs="4" className="card-category whiteText">
                                3,42,30
                            </Col>
                        </Row>
                        
                    </Card.Body>
                    <Card.Footer></Card.Footer>
                    </Card>
                </Col>
                <Col lg="3" sm="6">
                <Card className="card-stats profitCard">
                    <Card.Body>
                        <Row>
                        <Col xs="5">
                            <div className="icon-big text-center icon-warning">
                                <FiIcons.FiDollarSign className="cardIcon"/>
                            </div>
                        </Col>
                        <Col xs="7">
                            <div className="numbers">
                            <Card.Title as="h4" className = "whiteText">$890</Card.Title>
                            <p className="card-category whiteText">Today</p>
                            
                            </div>
                        </Col>
                        </Row>
                        <Row>
                            <Col xs="8" className="card-category whiteText textPaddingLeft">
                                Profit
                            </Col>
                            <Col xs="4" className="card-category whiteText">
                                $25000
                            </Col>
                        </Row>
                        
                    </Card.Body>
                    <Card.Footer></Card.Footer>
                    </Card>
                </Col>
                </Row>
                
                <Row>
                <Col md='8'>
                    <Card>
                        <Card.Header>
                            <Card.Title >
                                <h3>
                                     REVENUE FOR 2021
                                     <span className="purpleText">
                                        <MdIcons.MdKeyboardArrowUp/> 15.58 %
                                    </span>
                                </h3>
                                
                            </Card.Title>
                            
                        </Card.Header>
                        <Card.Body>
                            <div>
                            <Line
                            data={
                                {
                                datasets: [{
                                    type: 'line',
                                    label: 'Transaction 1',
                                    data: [20, 49, 20, 81],
                                    fill: false,
                                    borderColor: 'rgb(156,46,157)',
                                    tension: 0.3
                                },
                                {   type: 'line',  
                                    label: 'Transaction 2',
                                    data: [13, 30, 81, 61],
                                    fill: false,
                                    borderColor: 'rgb(255, 99, 132)',
                                    tension: 0.3
                                },
                                ], 
                                
                                labels: ['January', 'February', 'March', 'April'],
                                }
                            }
                            
                            />
                            </div>
                        </Card.Body>
                        </Card>
                    
                    </Col>
                    <Col md='4'>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h4">
                                EARNING 
                            </Card.Title>
                            <p className="card-category">Mon 15 - Sun 21</p>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <h2>$899.39 
                                    <span className="orangeText">
                                            <FiIcons.FiArrowUp/> 
                                    </span> 
                                </h2>
                            </div>
                            <Line
                                data={
                                    {
                                    labels: [
                                        'Mon',
                                        'Tue',
                                        'Wed',
                                        'Thurs',
                                        'Fri',
                                        'Sat',
                                        'Sun'
                                    ],
                                    datasets: [{
                                        label: 'Monthly Transaction',
                                        data: [20, 49, 20, 81, 56, 40, 70],
                                        fill: false,
                                        borderColor: '#ff4500',
                                        tension: 0.1
                                    }],
                                    }
                                    
                                }
                                                           
                                />
                            <p className="card-category centerText">Weekly Earning</p>
                            <Button variant="light" className="viewDetailBtn btn">View Detail</Button> 

                        </Card.Body>
                        <Card.Footer className="text-center">
                            
                        </Card.Footer>
                        </Card>
                    </Col>
                    
                </Row>

                <Row>
                <Col lg="4" sm="12">
                    <Card className="card-stats">
                        <Card.Title as="h4" className="cardCenterText">
                            Apple Watch 
                        </Card.Title>
                        <Card.Body>
                            <img src={require("assets/img/products/watch.png").default} alt="Watch" />  
                            <p className="card-category centerText">
                                The Apple Watch.
                            </p>    
                            <p className="card-category centerText">
                                One day only exclusive sale on our marketplace
                            </p>                       
                        </Card.Body>
                        <hr></hr>
                        <Card.Footer>
                         <Button variant="light" className="watchBtn btn">$350</Button> 
                        </Card.Footer>
                        </Card>
                    </Col>

                    <Col lg="4" sm="12">
                    <Card className="card-stats">
                        <Card.Title as="h4" className="cardCenterText">
                            Headphones
                        </Card.Title>
                        <br></br>
                        <Card.Body>
                            
                            <img src={require("assets/img/products/headphones-2.png").default} alt="headPhones" /> 
                            <br></br> 
                            <hr></hr>
                            
                            <p className="card-category">
                                Deafault Quality
                            </p>    
                            <p className="card-category">
                                <Badge bg="primary" className="badgeColorQuality">192kbp</Badge>
                                <Badge bg="primary" className="badgeColorQuality">320kbp</Badge>
                            </p>                       
                        </Card.Body>
                        <hr></hr>
                        <Card.Footer>
                         <Button variant="light" className="headPhonesBtn btn">$200</Button> 
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg="4" sm="12">

                    <Card className="card-stats">
                        <Card.Title as="h4" className="cardCenterText">
                            iPhone
                        </Card.Title>
                        <Card.Body>
                            <img src={require("assets/img/products/iphonec.png").default} alt="Watch" />  
                            <p className="card-category centerText">
                                The Apple iPhone X
                            </p>    
                            <p className="card-category centerText">
                                One day only exclusive sale on our marketplace
                            </p>                       
                        </Card.Body>
                        <hr></hr>
                        <Card.Footer>
                         <Button variant="light" className="phoneBtn btn">$830</Button> 
                        </Card.Footer>
                        </Card>

                    </Col>
                </Row>

                <Row>
                <Col lg="3" sm="6">
                    <Card className="card-stats cartCard">
                    <Card.Body>
                        <img src={require("assets/img/products/apple-watch.png").default} alt="Watch" 
                            className='border-gray' /> 
                    </Card.Body>
                    <Card.Footer>
                        <h4 className="textCenter">50% Off</h4>
                        <p className="card-category textCenter">
                                On Apple Watch
                        </p>  
                    </Card.Footer>
                    <br></br>
                    </Card>
                </Col>

                <Col lg="3" sm="6">
                    <Card className="card-stats userCard">
                    <Card.Body>
                        <img src={require("assets/img/products/printer.png").default} alt="printer" 
                            className='border-gray' /> 
                    </Card.Body>
                    <Card.Footer>
                        <h4 className="textCenter">50% Off</h4>
                        <p className="card-category textCenter">
                                On Canon Printer
                        </p>  
                    </Card.Footer>
                    <br></br>
                    </Card>
                </Col>

                <Col lg="3" sm="6">
                    <Card className="card-stats growthCard">
                    <Card.Body>
                        <img src={require("assets/img/products/laptop.png").default} alt="Watch" 
                            className='border-gray' /> 
                    </Card.Body>
                    <Card.Footer>
                        <h4 className="textCenter">50% Off</h4>
                        <p className="card-category textCenter">
                                On Apple Macbook
                        </p>  
                    </Card.Footer>
                    <br></br>
                    </Card>
                </Col>

                <Col lg="3" sm="6">
                    <Card className="card-stats profitCard">
                    <Card.Body>
                        <img src={require("assets/img/products/bowling.png").default} alt="Watch" 
                            className='border-gray' /> 
                    </Card.Body>
                    <Card.Footer>
                        <h4 className="textCenter">50% Off</h4>
                        <p className="card-category textCenter">
                                On Any Game
                        </p>  
                    </Card.Footer>
                    <br></br>
                    </Card>
                </Col>


                </Row>
        </>
    )
}

export default Ecommerce
