import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props){
    super(props);
    console.log("Parent Constructor called");
  }
  componentDidMount(){
    console.log("Parent Component DidMount");
  }
  render() {
    console.log("Parent Render called");
    return(
      <div className="container restro_container">
        <h1>About us</h1>
        <h2>React Learning Course</h2>
        <UserClass name={"Happy"} location={"Unjha"} />
      </div>
    )
  }
}

export default About;
