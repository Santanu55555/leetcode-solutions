/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
      if (!root || root === p || root === q) {
        return root;
    }
    
    // Note: we are modifying the definition of LCA to mean a node that
    // contains _either_ target node, instead of _both_ target nodes. This
    // is done to simplify the logic and it doesn't change our answer.
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    
    // left and right each contain a target node, so root is the lowest
    // node that contains both target nodes p and q
    if (left && right) {
        return root;
    }
    
    // If left or right is null, then both target nodes are contained in
    // either left or right, so return the non-null one
    return left ?? right;
};
