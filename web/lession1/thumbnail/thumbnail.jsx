

var Thumbs = React.createClass({

	render: function(){
		return <div>
			<img src={this.props.image.imageUrl} alt={this.props.image.imageAlt}/>
				<h3>{this.props.image.imageName}</h3>
				<p>{this.props.image.imageDesc}</p>
				<p>
					<Button title={this.props.button[0].title} count={this.props.button[0].count}/>
					<Button title={this.props.button[1].title} count={this.props.button[1].count}/>
				</p>
			</div>
	}
});

var Button = React.createClass({
	render: function() {
		return <div className="caption">
			<a href="#" className="btn btn-primary" role="button">
			{this.props.title} <span className="badge">{this.props.count}</span>
			</a> 
		</div>
	}
});

var options = {
	image: {
		imageUrl: 'images/kitten.jpg',
		imageAlt: 'cute kitten',
		imageName: 'Kitten George',
		imageDesc: 'Cute Kitten'
	},
	button: [{
		title: 'Like',
		count: 15
	},
	{
		title: 'Unlike',
		count: 0
	}]
};

var element = React.createElement(Thumbs, options);

React.render(element, document.querySelector('.thumbnail'));