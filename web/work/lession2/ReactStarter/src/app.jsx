var React = require('react'),
	ReactFire = require('reactfire'),
	Firebase = require('firebase');

var Header = require('./header');

var firebaseUrl = 'https://luminous-inferno-8237.firebaseio.com/';

var App = React.createClass({
	mixins: [ ReactFire ],
	componentWillMount: function(){
//		this.firebase = new Firebase(firebaseUrl + 'items/');
//		this.bindAsObject(this.firebase, 'items');
// the above is the same as bellow
//
		this.bindAsObject(new Firebase(firebaseUrl + 'items/'), 'items');
	},
	render: function() {

	return <div className="row panel panel-default">
		<div className="col-md-8 col-md-offset-2">
			<h2 className="text-center">
				React-To-Do
			</h2>
			<Header itemsStore={this.firebaseRefs.items}/>
		</div>
	</div>
	}
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
