var dados = {
	message: "ok"
}

var Form2 = React.createClass({
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
    return <input type="text" valueLink={valueLink} />;
  }
});


class Form1 extends React.Component {

	// get initial state
  getInitialState() {
    return {message: 'Hello!'};
  }
  render() {
    return (
      <div className="form1">ms{this.message}
				<input value="this.nome" />
      </div>
    )
  };
};


class ShoppingList extends React.Component {
  render() {
    return (
      <div class="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    )
  };
};

ReactDOM.render(
	<div>
		<Form2 />
		<ShoppingList name="Danilo" />
	</div>
	,
  document.getElementById('root')
);



