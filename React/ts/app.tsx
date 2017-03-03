

class DemoProps {
  public name:string;
  public age:string;
}


class Form extends React.Component<{ nome: string }, any>{

    public nome: string;
    public sobrenome : string;

    constructor(props: any) {
      super(props);
      this.nome = "ok";
      this.sobrenome = "jose";
    }
    public handdleChange2 = (event) => {
      console.log(event.target);
      this.setState({nome: event.target.value});
    }
    getInitialState() {
      return {message: 'Hello!'};
    }

    handleChange(event) {
      this.setState({nome: event.target.value});
    }

   render() {
     return <div>valor: <input  onChange={this.handdleChange2} /> o valor é {this.nome}</div>;
   }
}


class NameForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('ok');
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: {this.state.value}
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



var Demo2 = React.createClass({
  message: "test2e",

    handleChange(event) {
      console.log("ok");
      this.setState({nome: event.target.value});
    },
    getInitialState() {
      return {message: 'Hello!'};
    },
   render() {
     return <div><input value={this.message} onChange={this.handdleChange} />{this.message}</div>;
   }
});

class Demo extends React.Component<DemoProps, any> {
  private foo:number;
  constructor(props:DemoProps) {
    super(props);
    this.foo = 42;
  }
  render() {
    return <div>Hello world!{this.foo}</div>;
  }
}

ReactDOM.render(
  <NameForm  />,
  document.getElementById('root')
);

/// /// <reference path="../typings/index.d.ts" />

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';