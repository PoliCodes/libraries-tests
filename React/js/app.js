var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App1 = (function (_super) {
    __extends(App1, _super);
    function App1(props) {
        var _this = _super.call(this, props) || this;
        _this.itemChange = function (event) {
            var newValue = event.target.value;
            _this.setState({ item: event.target.value });
        };
        _this.addClick = function (event) {
            _this.state.lista.push(_this.state.item);
            _this.setState({
                item: "",
                lista: _this.state.lista
            });
        };
        _this.removeItem = function (value) {
            _this.state.lista.splice(value, 1);
            _this.setState({
                lista: _this.state.lista
            });
        };
        _this.state = { item: "", lista: [] };
        return _this;
    }
    App1.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("h1", null, "TODO LIST REACT"),
            React.createElement("div", { className: "insertItem" },
                React.createElement("input", { type: "text", value: this.state.item, onChange: this.itemChange }),
                React.createElement("input", { value: "ADD", type: "button", onClick: this.addClick })),
            React.createElement("div", { className: "itemsList" },
                React.createElement("ul", null, this.state.lista.map(function (item, index) {
                    return React.createElement("li", null,
                        React.createElement("input", { onClick: _this.removeItem.bind(_this, index), type: "button", value: "x" }),
                        item);
                })))));
    };
    return App1;
}(React.Component));
ReactDOM.render(React.createElement(App1, null), document.getElementById('app'));
