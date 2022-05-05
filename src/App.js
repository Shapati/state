import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    Person:[
    {
      fullName: 'Brian',
      bio: 'I like JavaScript', 
      imgSrc: './pic.png',
      profession: 'Developer',
    }
  ],
    show: false
  }
  
  changeShow = () =>{ 

    this.setState(prevState => ({show: !prevState.show}));  //using prevstate to toggle between true and false
  }

  render(){
    return(
      <>
        <button onClick={this.changeShow}>Appear/Disappear</button>
        
          {this.state.show && this.state.Person.map((each, key)=>(
            <div key={key}>
              <h3>FullName: {each.fullName}</h3>
              <h3>Bio: {each.bio}</h3>
              <h3>imgSrc: {each.imgSrc}</h3>
              <h3>Profession: {each.profession}</h3>
            </div>
          ))}
      </>
    )
  }
}

export default App