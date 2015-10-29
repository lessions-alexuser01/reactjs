var React = require('react'),
  ReactFire = require('reactfire'),
  Firebase = require('firebase');

var Header = require('./header'),
  List = require('./list');

var firebaseUrlClass = 'https://blistering-torch-4253.firebaseio.com/',
  firebaseUrl  = 'https://luminous-inferno-8237.firebaseio.com/',
  collection = 'items';

var App = React.createClass({
  mixins: [ ReactFire ],
  getInitialState: function(){
    return {
        items: {},
        loaded: false
    }
  },
  componentWillMount: function(){
    firebaseDb = new Firebase(firebaseUrlClass + collection + '/');
    this.bindAsObject(firebaseDb, 'items');
    firebaseDb.on('value', this.handleDataLoaded);
  },
  render: function() {
  return <div className="row panel panel-default">
    <div className="col-md-8 col-md-offset-2">
      <h2 className="text-center">
        React-To-Do
      </h2>
      <Header itemsStore={this.firebaseRefs.items}/>
      <hr />
      <div className={"content " + (this.state.loaded ? 'loaded' : '')} >
        <List items={this.state.items}/>
      </div>
    </div>
  </div>
  },
  handleDataLoaded: function(){
    this.setState({loaded: true});
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
