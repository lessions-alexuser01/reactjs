var React = require('react');
  Firebase = require('firebase');


var firebaseUrlClass = 'https://blistering-torch-4253.firebaseio.com/',
  firebaseUrl  = 'https://luminous-inferno-8237.firebaseio.com/',
  collection = 'items';

module.exports = React.createClass({
    getInitialState: function(){
        return {
            text: this.props.item.text,
            done: this.props.item.done
        };
    },
    componentWillMount: function(){
    this.firebaseDb = new Firebase(firebaseUrlClass + collection + '/' + this.props.item.key);
    },
    render: function(){
        return <div className="input-group">
            <span className="input-group-addon">
                <input
                    type="checkbox"
                    checked={this.state.done}
                    onChange={this.handleDoneChange}
                    />
            </span>
            <input type="text"
                className="form-control"
                value={this.state.text}
            />
            <span className="input-group-btn">
                <button
                    onClick={this.handleDeleteClick}
                    className="btn btn-default"
                >
                    Delete
                </button>
            </span>
        </div>
    },
    handleDoneChange: function(event){
        var update = {done: event.target.checked};
        this.setState(update);
        this.firebaseDb.update(update);
    },
    handleDeleteClick: function(){
        this.firebaseDb.remove();
    }
});
