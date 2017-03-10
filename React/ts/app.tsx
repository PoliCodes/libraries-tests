class App1 extends React.Component<{}, {item: string, lista: string[]}> {
	constructor(props: {}) {
		super(props);
		this.state = {item:"", lista: []};
	}
	public itemChange = (event) => {
		var newValue = event.target.value;
		this.setState({item:  event.target.value});
	}
	public addClick = (event) => {
		this.state.lista.push(this.state.item);
		this.setState({ 
			item: "",
			lista: this.state.lista
		});
	}
	public removeItem = (value) => {
		this.state.lista.splice(value, 1);
		this.setState({
			lista: this.state.lista
		});
	}
	render() {
		return (
		<div>
			<h1>TODO LIST REACT</h1>
			<div className="insertItem">
				<input type="text" value={this.state.item} onChange={this.itemChange}  />
				<input value="ADD" type="button" onClick={this.addClick} />
			</div>
			<div className="itemsList">
				<ul>
					{
						this.state.lista.map((item, index) => {
							return <li><input onClick={this.removeItem.bind(this, index)} type="button" value="x" />{item}</li>
						})
					}
				</ul>
			</div>
		</div>);
	}
}

ReactDOM.render(
	<App1  />,
	document.getElementById('app')
);