

var Badge = React.createClass({
	render: function(){
    	return <button className="btn btn-primary" type="button">
        	{this.props.title} <span className="badge">{this.props.number}</span>
        </button>
	}
});

var Form = React.createClass({
	render: function() {
		return <div>
			<Badge title={this.props.title} number={this.props.number} />
		</div>
	}
});

var options = {
	title: 'Inbox',
	number: 4
}

var element = React.createElement(Form, options);

  // place it in the body tag
React.render(element, document.body);