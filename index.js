
function required (paramName) {
  const caller = required.caller.name;
  let msg = 'Missing required argument';
  msg += paramName ? ` "${paramName}"` : '';
  msg += caller ? ` in function "${caller}"` : '';
  throw new Error(msg);
}

module.exports = required;
