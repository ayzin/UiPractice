import React from "react";
import ChartistGraph from "react-chartist";
import { Doughnut, Line ,Bar, PolarArea} from 'react-chartjs-2';
import * as FaIcons from 'react-icons/fa';
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

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row> 
          <Col md='4'>
          <Card>
              <Card.Header>
                <Card.Title as="h4">Current Balance</Card.Title>
                <p className="card-category">The Billing Circle</p>
              </Card.Header>
              <Card.Body>
                <div>
                <Doughnut
                  data={
                    {
                      labels: [
                        'Completed',
                        'Remaining'
                      ],
                      datasets: [{
                        label: 'My First Dataset',
                        data: [300, 50],
                        backgroundColor: [
                          '#ff4bac',
                          '#f6f6f6',
                        ],
                        hoverOffset: 4
                      }]
                    }
                  }
                  width={300}
	                height={219}
                  options={{ maintainAspectRatio: false }}
                />
                </div>
              </Card.Body>
              <Card.Footer className="text-center">
                <div>
                  <h3>$ 50,150.00</h3>
                </div>
                <div className="stats">
                  Used balance this billing cycle
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md='8'>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Total Transaction</Card.Title>
                <p className="card-category">This month transaction</p>
              </Card.Header>
              <Card.Body>
                <div>
                <Line
                  data={
                    {
                      labels: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'June',
                        'July'
                      ],
                      datasets: [{
                        label: 'Monthly Transaction',
                        data: [20, 49, 20, 81, 56, 40, 70],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.3
                      }]
                    }
                  }
                  
                />
                </div>
              </Card.Body>
            </Card>
          
          </Col>
        </Row>
        
        <Row>
          <Col md='5'>
            <Card>
              <Card.Header>
                <Card.Title as="h4">User Statistics</Card.Title>
              </Card.Header>
              <Card.Body>
                <div>
                <Bar
                  data={
                    {
                      datasets: [{
                          type: 'bar',
                          label: 'Bar Dataset',
                          data: [10, 20, 30, 40],
                          borderColor: 'rgb(255, 99, 132)',
                          backgroundColor: 'rgba(255, 99, 132, 0.5)'
                      }, {
                          type: 'bar',
                          label: 'Line Dataset',
                          data: [50, 50, 50, 50],
                          borderColor: 'rgb(54, 162, 235)',
                          backgroundColor: 'rgba(54, 162, 235, 0.3)'
                      }],
                      labels: ['January', 'February', 'March', 'April'],
                      
                  }
                  }
                  height= {184}  
                />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md='4'>
          <Card>
            <Card.Header>
                <Card.Title as="h4">Recent Buyers</Card.Title>
                <p className="card-category">Today</p>
              </Card.Header>
              <Card.Body>
                <div>
                  <Row>
                    <Col md='3'>
                        <img src={require("assets/img/faces/face-1.jpg").default} alt="photo" 
                        className='avatar border-gray avartarSize' />
                    </Col>
                    <Col md='6'>
                        <h5>User 1</h5>
                        <p className='card-category'> 20, June 2021 </p>
                    </Col>
                    <Col md='3'>
                      <FaIcons.FaRegStar className='star'/>
                    </Col>
                  </Row>
                </div>

                <div className="lineSpacing">
                  <Row>
                    <Col md='3'>
                        <img src={require("assets/img/faces/face-2.jpg").default} alt="photo" 
                        className='avatar border-gray avartarSize' />
                    </Col>
                    <Col md='6'>
                        <h5>User 2</h5>
                        <p className='card-category'> 20, June 2021 </p>
                    </Col>
                    <Col md='3'>
                      <FaIcons.FaRegStar className='star'/>
                    </Col>
                  </Row>
                </div>

                <div className="lineSpacing">
                  <Row>
                    <Col md='3'>
                        <img src={require("assets/img/faces/face-3.jpg").default} alt="photo" 
                        className='avatar border-gray avartarSize' />
                    </Col>
                    <Col md='6'>
                        <h5>User 3</h5>
                        <p className='card-category'> 20, June 2021 </p>
                    </Col>
                    <Col md='3'>
                      <FaIcons.FaRegStar className='star'/>
                    </Col>
                  </Row>
                </div>

              </Card.Body>
            </Card>
          </Col>
          <Col md='3'>
          <Card>
            <Card.Header>
                <Card.Title as="h4">Conversion Ratio</Card.Title>
              </Card.Header>
              <Card.Body>
                <div>
                <PolarArea
                  data={
                    {
                      labels: [
                        'Red',
                        'Green',
                        'Yellow',
                        'Grey',
                        'Blue'
                      ],
                      datasets: [{
                        label: 'My First Dataset',
                        data: [11, 16, 6, 9, 14],
                        backgroundColor: [
                          'rgb(255, 99, 132)',
                          'rgb(75, 192, 192)',
                          'rgb(255, 205, 86)',
                          'rgb(201, 203, 207)',
                          'rgb(54, 162, 235)'
                        ]
                      }]
                    }
                  }
                  
                />
                </div>
              </Card.Body>
              <Card.Footer className="text-center">
                <div className="stats">
                   conversion ratio 62%
                </div>
                
              </Card.Footer>
            </Card>
          </Col>

        </Row>

        <Row>
          <Col md='4'>
              <Row>
                <Col>
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                    <Col xs="7">
                        <div>
                          <Card.Title as="h4">1885</Card.Title>
                          <p className="card-category">New</p>

                        </div>
                      </Col>

                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <FaIcons.FaUserCircle className="userIcon"/>
                        </div>
                      </Col>
                      
                    </Row>

                    <Row>
                          <Col xs="7" className="card-category">
                              12,221,000
                          </Col>
                          <Col xs="5" className="card-category">
                              Total Clients
                          </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>

                  </Card.Footer>
                </Card>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Card className="card-stats">
                    <Card.Body>
                      <Row>
                      <Col xs="7">
                          <div>
                            <Card.Title className="card-category">Today Revenues</Card.Title>
                            <p className="card-category">$40,512 avg</p>

                          </div>
                        </Col>

                        <Col xs="5">
                          <Badge bg="primary" className="badgeColor">+$900 new</Badge>
                        </Col>
                        
                      </Row>

                      <Row>
                            <Col xs="7" className="card-category">
                                <h3>$ 22,300</h3>
                            </Col>
                            
                      </Row>
                      <br/>
                      <br/>
                      <br/>
                    </Card.Body>

                  </Card>
                </Col>
              </Row>
          </Col>

          <Col md='8'>
          <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Subscriber List</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table className="card-category">
                    <thead>
                      <tr>
                        <td>NAME</td>
                        <td>COMPANY</td>
                        <td>START DATE</td>
                        <td>STATUS</td>
                        <td>AMOUNT</td>
                        <td>ACTION</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Michael Austin</td>
                        <td>ABC Fintech LTD.</td>
                        <td>Jun 1, 2021</td>
                        <td>
                          <Badge bg="primary" className="badgeCloseColor">Close</Badge>
                        </td>
                        <td>$ 1000.00</td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-488980961">
                                Edit
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-506045838">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>

                      <tr>
                        <td>User 1</td>
                        <td>Test LTD.</td>
                        <td>Jun 1, 2021</td>
                        <td>
                          <Badge bg="primary" className="badgeOpenColor">Open</Badge>
                        </td>
                        <td>$ 600.00</td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-488980961">
                                Edit
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-506045838">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>

                      <tr>
                        <td>İris Yılmaz</td>
                        <td>Collboy Tech LTD.</td>
                        <td>Jun 1, 2021</td>
                        <td>
                          <Badge bg="primary" className="badgeOpenColor">Open</Badge>
                        </td>
                        <td>$ 2000.00</td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-488980961">
                                Edit
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-506045838">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>

                      <tr>
                        <td>Lidia Livescu</td>
                        <td>My Fintech LTD.</td>
                        <td>Jun 1, 2021</td>
                        <td>
                          <Badge bg="primary" className="badgeCloseColor">Close</Badge>
                        </td>
                        <td>$ 400.00</td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-488980961">
                                Edit
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-506045838">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
