import React, { Component } from "react";
import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";
import StudentList from "./data/StudentList.json";
import './Nav.css';



class StudentCards extends Component {
  state = {
    search: ""
  };

  renderStudent = student=> {
    const { search } = this.state;
    var name = student.name.toLowerCase();


    return (
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <Card>
          <CardBody>
            <p className="">
              <img
                src={"avtar"}
                className={"flag flag-" + name}
                alt={student.name}
              />
            </p>
            <CardTitle title={student.name}>
            <CardText>
      <h6>Name: {student.name}</h6>
      <h6>Roll No: {student.rollNo}</h6>
      <h6>Class: {student.class}</h6>
      <h6>Gender: {student.gender}</h6>
      <h6>Status: {student.status}</h6>
      </CardText>
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredStudent = StudentList.filter(student => {
      return student.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return ( <React.Fragment> 
      <div class="header">
      <div class="logo"><span style={{color:'Cyan'}} >S</span><span style={{color:'darkgrey'}}>List</span></div>
      <div class="header-right">
        <h6 class="active" >Welcome Admin</h6>
        <h6>About</h6>
      </div>
    </div>  
      <div className="flyout">
        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
              </div>
              <div className="col">
                <Input
                  label="Search Name"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
              <div className="col" />
            </div>
            <div className="row">
              {filteredStudent.map(student => {
                return this.renderStudent(student);
              })}
            </div>
          </div>
        </main>
      </div>
      </React.Fragment>

    );
  }
}

export default StudentCards;