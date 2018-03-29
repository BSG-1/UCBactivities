import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component{
  state = {
    friends
  }

  //remove friends
  removeFriend = id =>{
    console.log('removing friend', id);
    //creating a whole new list of friends, missing one - remove card
    const friends = this.state.friends.filter(friend => friend.id !== id);
    console.log('new list of friends', friends);
    this.setState({friends});
  }

  render(){
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map(friend => {
          return(
          <FriendCard 
            name= {friend.name}
            image= {friend.image}
            occupation= {friend.occupation}
            location= {friend.location}
            removeFriend = {this.removeFriend}
            id = {friend.id}
            key = {friend.id}
          />)
           
        })} 
      </Wrapper>
    )
  }
}

export default App;
