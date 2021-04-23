/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      name2: "",
      name3:""
    };
  }
  onChangeCelsius = ({ target: { value: name } }) => {
    this.setState({
      name : name * 9/5 + 32
    });
    
  };
  
  render() {
    return (
      <div>
        Enter celsius: <input type="text" onChange={this.onChangeCelsius} />
        <br />
        <br />
        Enter fahrenheit:
        <input type="text" value={this.state.name}  />
      </div>
    );
  }
}*/