"use strict";

var Badge = React.createClass({
	displayName: "Badge",

	render: function render() {
		return React.createElement(
			"button",
			{ className: "btn btn-primary", type: "button" },
			this.props.title,
			" ",
			React.createElement(
				"span",
				{ className: "badge" },
				this.props.number
			)
		);
	}
});

var Form = React.createClass({
	displayName: "Form",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(Badge, { title: this.props.title, number: this.props.number })
		);
	}
});

var options = {
	title: 'Inbox',
	number: 4
};

var element = React.createElement(Form, options);

// place it in the body tag
React.render(element, document.body);

