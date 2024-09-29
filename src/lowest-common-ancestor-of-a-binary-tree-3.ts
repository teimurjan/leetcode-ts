import { strict as assert } from "node:assert";
import BinaryTreeNodeWithParent from "./utils/binary-tree-node-with-parent";

function lowestCommonAncestor(
  p: BinaryTreeNodeWithParent | null,
  q: BinaryTreeNodeWithParent | null
): BinaryTreeNodeWithParent | null {
  let current = p;

  const pPath: Set<number> = new Set();
  while (current !== null) {
    pPath.add(current.val);
    current = current.parent;
  }

  current = q;
  while (current !== null) {
    if (pPath.has(current.val)) {
      return current;
    }

    current = current.parent;
  }

  return null;
}

function lowestCommonAncestorTwoPointers(
  p: BinaryTreeNodeWithParent | null,
  q: BinaryTreeNodeWithParent | null
): BinaryTreeNodeWithParent | null {
  let currentP = p;
  let currentQ = q;

  while (currentP.val !== currentQ.val) {
    currentP = currentP.parent ?? p;
    currentQ = currentQ.parent ?? q;
  }

  return currentP;
}

export const test = () => {
  const p1 = new BinaryTreeNodeWithParent(
    5,
    new BinaryTreeNodeWithParent(6),
    new BinaryTreeNodeWithParent(
      2,
      new BinaryTreeNodeWithParent(7),
      new BinaryTreeNodeWithParent(4)
    )
  );
  const q1 = new BinaryTreeNodeWithParent(
    1,
    new BinaryTreeNodeWithParent(0),
    new BinaryTreeNodeWithParent(8)
  );
  const tree1 = new BinaryTreeNodeWithParent(3, p1, q1);

  const q2 = new BinaryTreeNodeWithParent(4);
  const p2 = new BinaryTreeNodeWithParent(
    5,
    new BinaryTreeNodeWithParent(6),
    new BinaryTreeNodeWithParent(2, new BinaryTreeNodeWithParent(7), q2)
  );
  const tree2 = new BinaryTreeNodeWithParent(
    3,
    p2,
    new BinaryTreeNodeWithParent(
      1,
      new BinaryTreeNodeWithParent(0),
      new BinaryTreeNodeWithParent(8)
    )
  );

  assert.equal(lowestCommonAncestor(p1, q1).val, 3);
  assert.equal(lowestCommonAncestor(p2, q2).val, 5);

  assert.equal(lowestCommonAncestorTwoPointers(p1, q1).val, 3);
  assert.equal(lowestCommonAncestorTwoPointers(p2, q2).val, 5);
};
