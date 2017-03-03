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
var DemoProps = (function () {
    function DemoProps() {
    }
    return DemoProps;
}());
var Form = (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.handdleChange2 = function (event) {
            console.log(event.target);
            _this.setState({ nome: event.target.value });
        };
        _this.nome = "ok";
        _this.sobrenome = "jose";
        return _this;
    }
    Form.prototype.getInitialState = function () {
        return { message: 'Hello!' };
    };
    Form.prototype.handleChange = function (event) {
        this.setState({ nome: event.target.value });
    };
    Form.prototype.render = function () {
        return React.createElement("div", null,
            "valor: ",
            React.createElement("input", { onChange: this.handdleChange2 }),
            " o valor \u00E9 ",
            this.nome);
    };
    return Form;
}(React.Component));
var NameForm = (function (_super) {
    __extends(NameForm, _super);
    function NameForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: '' };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    NameForm.prototype.handleChange = function (event) {
        console.log('ok');
        this.setState({ value: event.target.value });
    };
    NameForm.prototype.handleSubmit = function (event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    };
    NameForm.prototype.render = function () {
        return (React.createElement("form", { onSubmit: this.handleSubmit },
            React.createElement("label", null,
                "Name: ",
                this.state.value,
                React.createElement("input", { type: "text", value: this.state.value, onChange: this.handleChange })),
            React.createElement("input", { type: "submit", value: "Submit" })));
    };
    return NameForm;
}(React.Component));
var Demo2 = React.createClass({
    message: "test2e",
    handleChange: function (event) {
        console.log("ok");
        this.setState({ nome: event.target.value });
    },
    getInitialState: function () {
        return { message: 'Hello!' };
    },
    render: function () {
        return React.createElement("div", null,
            React.createElement("input", { value: this.message, onChange: this.handdleChange }),
            this.message);
    }
});
var Demo = (function (_super) {
    __extends(Demo, _super);
    function Demo(props) {
        var _this = _super.call(this, props) || this;
        _this.foo = 42;
        return _this;
    }
    Demo.prototype.render = function () {
        return React.createElement("div", null,
            "Hello world!",
            this.foo);
    };
    return Demo;
}(React.Component));
ReactDOM.render(React.createElement(NameForm, null), document.getElementById('root'));
/// /// <reference path="../typings/index.d.ts" />
// import * as React from 'react';
// import * as ReactDOM from 'react-dom'; 
