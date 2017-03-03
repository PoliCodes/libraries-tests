var dados = {
	message: "ok"
}

var Form2 = React.createClass({displayName: "Form2",
  getInitialState: function() {
    return dados;
  },
  handleChange: function(newValue) {
    this.setState({message: newValue});
  },
  render: function() {
    var valueLink = {
      value: this.state.message,
      requestChange: this.handleChange
    };
    return React.createElement("input", {type: "text", valueLink: valueLink});
  }
});


class Form1 extends React.Component {

	// get initial state
  getInitialState() {
    return {message: 'Hello!'};
  }
  render() {
    return (
      React.createElement("div", {className: "form1"}, "ms", this.message, 
				React.createElement("input", {value: "this.nome"})
      )
    )
  };
};


class ShoppingList extends React.Component {
  render() {
    return (
      React.createElement("div", {class: "shopping-list"}, 
        React.createElement("h1", null, "Shopping List for ", this.props.name), 
        React.createElement("ul", null, 
          React.createElement("li", null, "Instagram"), 
          React.createElement("li", null, "WhatsApp"), 
          React.createElement("li", null, "Oculus")
        )
      )
    )
  };
};

ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(Form2, null), 
		React.createElement(ShoppingList, {name: "Danilo"})
	)
	,
  document.getElementById('root')
);



