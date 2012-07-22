var assert = function assert(expression, description) {
  var li = document.createElement('li');
  li.className = expression ? 'pass' : 'fail' ;
  li.appendChild(document.createTextNode(description));
  document.getElementById('results').appendChild(li);
};
