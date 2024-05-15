import { Component } from "react";
import axios from 'axios';

export default class Greeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      imageURL: ''
    }
  }

  componentDidMount() {
    // after the component mounts
    axios.get('https://dog.ceo/api/breeds/image/random').
    then ( res => {
      console.log(res.data);
      this.setState({ imageURL: res.data.message });

    }).catch(err => console.error(err))
  }

  render() {
    const { imageURL } = this.state;

    return (
      <>
        <h1>Hello, {this.state.name !== '' ? this.state.name : 'World'}</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <div style={{marginBlockStart: '2em'}}>
            <img src={imageURL} width={200} height={200} />
          </div>
      </>
    )
  }
}