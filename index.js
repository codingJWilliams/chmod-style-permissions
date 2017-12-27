/**
 * Function to check if a given node is in a given array of permissions, with wildcards
 * @param {Array} permissionArray Array of permission nodes a user has.
 * @param {String} node Node to check against
 * @returns {Boolean} Whether node is in given array
 */
module.exports.hasPerm = function hasPerm(permissionArray, node) {
  // Negative node support.
  if (permissionArray.filter(p => p.startsWith("!"))
    .map(p => p.replace("!", ""))
    .every(n1 => !matches(n1, node)) && permissionArray.filter(p => p.startsWith("!"))
    .map(p => p.replace("!", ""))
    .length > 0) {
    return false
  }
  if (permissionArray.includes("!" + node)) return false;
  // Shortcuts
  if (permissionArray.length == 0) return false; // If the user doesn't have any permissions, they cannot pass any tests
  if (permissionArray.includes(node)) return true; // If the node is straight up in the permissions then it has to be true, as we've ruled out negation
  if (permissionArray.includes("*")) return true; // 
  return permissionArray.some(n1 => matches(n1, node))
}

function matches(baseNode, checkNode) {
  var allowed = false;
  var checkNodeSplit = checkNode.split(".");
  var baseNodeSplit = baseNode.split(".");
  for (var i = 0;
    (i < baseNodeSplit.length) && (i < checkNodeSplit.length); i++) {
    if (baseNodeSplit[i] !== "*" && baseNodeSplit[i] !== checkNodeSplit[i]) return false;
  }
  return true
}
