var React = require('react');
var CommentBox = require('./components/CommentBox.jsx');

React.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('root')
);
