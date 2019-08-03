import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';

var app = {
  // Application Constructor
  initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
      ReactDOM.render(<App />, document.getElementById('app'))
  },
};

app.initialize();