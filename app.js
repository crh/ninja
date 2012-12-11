
var foo = function foo() {
  console.log('hey');
};

/***/
window.onload = foo;

assert(typeof window.foo === 'function', 'foo is a function');

assert(window.foo.name === 'foo', 'foo() has name!');

assert(false, 'example of fail assertion');

var values = [213, 16, 2058, 54, 10, 1965, 57, 9];
console.log('values: ' + values);

values.sort();
console.log('sorted values Ascending: ' + values);

values.sort(function(val1, val2) {
  return val2 - val1;
});

console.log('sorted values Descending: ' + values);

function bar() {
  return true;
}

assert(typeof bar === 'function', 'bar is a function');

assert(typeof window.bar === 'function', 'window.bar is defined.');

function outer() {
  assert(typeof inner === 'function', 'inner() is in scope, also before' +
         'declaration.');
  function inner() {}
  assert(typeof inner === 'function',
         'inner() is in scope, after declaration.');
}

outer();
assert(typeof inner === undefined, 'inner is not in global scope.');

// scoping and function
assert(true, 'true');

var local = {};

local2 = {};

assert(window.local, 'local is global');

assert(window.local2, 'local2 is global');

console.log('what is this?', this);
