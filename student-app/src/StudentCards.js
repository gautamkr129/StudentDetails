import React from 'react';
import StudentList from './data/StudentList.json';
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css';


class StudentCards extends React.Component {
    constructor(){
        super();
        this.state={
            StudentList
        };
    }
    render() {
        return(<React.Fragment> 
      {this.state.StudentList.map(cards => (
            
        <Container>
        <Row>
          <Col xs={"auto" } md={"auto" }>  
               <Card>
    <Card.Img variant="left" src="" alt="avatar" />
    <Card.Body>
      <Card.Text>
      <span>Name: {cards.name}</span> <br />
      <span>Roll No: {cards.rollNo}</span> <br />
      <span>Class: {cards.class}</span> <br />
      <span>Gender: {cards.gender}</span> <br />
      <span>Status: {cards.status}</span> <br />
      </Card.Text>
    </Card.Body>
  </Card>
          
           
          </Col>
          </Row>
</Container>

      ))}

 </React.Fragment>)
    }
}
export default StudentCards;