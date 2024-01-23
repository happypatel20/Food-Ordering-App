import React from "react";
// import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {

  
  constructor(props){
    super(props);
    // console.log("Parent Constructor called");
  }
  componentDidMount(){
    // console.log("Parent Component DidMount");
  }
  render() {
    // console.log("Parent Render called");
    return(
      <div className="m-8">
        <UserContext.Consumer>
          {(data) => <h1 className="text-green-500 font-bold">User: {data.loggedInUser}</h1>}
        </UserContext.Consumer>
        <h1 className="text-2xl font-bold mb-1">About us</h1>
        <h2 className="text-lg mb-4">React Learning Course</h2>
        <UserClass name={"Happy"} location={"Unjha"} />
      </div>
    )
  }
}

export default About;
