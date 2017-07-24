
function required (paramName) {
  const callerName = required.caller.name;
  let msg = 'Undefined or missing parameter';
  msg += paramName ? ` "${paramName}"` : '';
  msg += callerName ? ` in function "${callerName}"` : '';
  const PARAM_REQUIRED = msg;
  throw new Error(PARAM_REQUIRED);
}

module.exports = required;
