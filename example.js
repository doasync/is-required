const isRequired = require('./index');

function foo (val = isRequired('val')) {
  return val;
}

function bar (myParam = isRequired()) {
  return myParam;
}

function baz (params = {}) {
  // Destructuring
  const {
    method = 'GET',
    url = isRequired('url'), // <--
    multipart: {
      data: multipartData = {}
    }
  } = params;

  // Constructing example
  return {
    method,
    url,
    multipartData
  };
}

// Test
foo();
bar();

baz({
  method: 'POST'
});
