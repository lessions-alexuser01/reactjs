var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', //shows on the button
  items: [ // list of items to show on the dropdown
    'Apple Pie',
    'Peach Cobler',
    'Coconut Cream Pie'
   ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));
