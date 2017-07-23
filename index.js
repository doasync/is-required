
function required (paramName) {
  const callerName = required.caller.name;
  let msg = 'Missing required parameter';
  msg += paramName ? ` "${paramName}"` : '';
  msg += callerName ? ` in function "${callerName}"` : '';
  throw new Error(msg);
}

module.exports = required;
