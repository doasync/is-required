const isRequired = require('./index');

function foo (val = isRequired('val')) {
  return val;
}

function bar (myParam = isRequired()) {
  return myParam;
}

foo();
bar();
