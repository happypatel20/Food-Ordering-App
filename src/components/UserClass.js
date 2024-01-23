import {Component} from "react"
class UserClass extends Component{
  constructor(props){
    super(props)

    this.state = {
      count: 0,
      userInfo: {
        name: "zeel",
        location: "kamli"
      }
    }
    console.log("Child Constructor called");
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/happypatel20")
    const json = await data.json();
    this.setState({
      userInfo: json
    })
    // console.log("Child Component DidMount");
  }
  render(){
    console.log("Child Render called")
    // const {name, location} = this.props
    const {count} = this.state
    const{name, login} = this.state.userInfo
    return(
      <div className="shadow-md shadow-black-50 rounded-md p-3">
        <h1>Count: {count}</h1>
        <button onClick={() => {
          this.setState({
            count: count + 1
          })
        }}>Count Increase</button>
        <button onClick={() => {
          this.setState({
            count: count > 0 ? count - 1 : count
          })
        }}>Count Decrease</button>
        <h2>Name: {name}</h2>
        <h3>login: {login}</h3>
        <h3>Contact: @hepliness17</h3>
      </div>
    )
  }
}

export default UserClass;
