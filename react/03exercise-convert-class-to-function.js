// github usernames: gaearon, sophiebits, sebmarkbage, bvaughn
const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
  </div>
);

const Card = (props) => {
  const profile = props;
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

const Form = (props) => {
  
  const [userName, setUserName] = useState('');
  const newUser = (name) => setUserName(name);
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const response = await axios.get(`https://api.github.com/users/${userName}`);
    props.onSubmit(response.data);
    setUserName('');
  };    

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        value={userName}
        onChange={event => newUser(event.target.value)}
        placeholder='GitHub username' 
        required
      /> 
      <button>Add card</button>
    </form>      
  );
}

const App = (props) => {
  
  const [profiles, addProfile] = useState([]);
  const addNewProfile = (profileData) => {
    addProfile([...profiles, profileData])
  };
  return (
    <div>
      <div className="header">{props.title}</div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles}/>
    </div>
  );
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);