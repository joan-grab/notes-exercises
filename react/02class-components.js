// github usernames: gaearon, sophiebits, sebmarkbage, bvaughn
const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
  </div>
);

class Card extends React.Component {
	render() {
    const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

class Form extends React.Component {
  
  // reading values from DOM by ref attribute (if react dont need to control this data):
  
  // userNameInput = React.createRef(); // take a reference to ref 
  // handleSubmit = (event) => {
  //   event.preventDefault(); // prevents page to refresh after each submit
  //    console.log(
  //      this.userNameInput.current.value 
  //    ); // display ref value
  // };
  
  // reading values by controlles components (storeged in react memory):
  
  state = { userName: '' };  
  handleSubmit = async (event) => {
    event.preventDefault(); 
    const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
// errors handles
    this.props.onSubmit(response.data);
    this.setState({ userName: ''});
  };  
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text' 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder='GitHub username' 
//          ref={this.userNameInput} // ref is fancy react id
          required
        /> 
        <button>Add card</button>
      </form>      
    );
  }
}

class App extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   };
  // }
  
  // this works as well as followed (using Babbel):
  
  state = {
    profiles: [],
  };
  
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };
  
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles}/>
    	</div>
    );
  }	
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);