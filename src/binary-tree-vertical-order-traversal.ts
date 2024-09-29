import { strict as assert } from "node:assert";
import BinaryTreeNode from "./utils/binary-tree-node";

function verticalOrder(root: BinaryTreeNode | null): number[][] {
  if (root === null) {
    return [];
  }

  const columnMap = new Map<number, number[]>();
  const queue: [BinaryTreeNode, number][] = [[root, 0]];

  let minColumn = 0;
  let maxColumn = 0;

  while (queue.length > 0) {
    const [node, column] = queue.shift();

    if (columnMap.has(column)) {
      columnMap.get(column).push(node.val);
    } else {
      columnMap.set(column, [node.val]);
    }

    minColumn = Math.min(minColumn, column);
    maxColumn = Math.max(maxColumn, column);

    if (node.left !== null) {
      queue.push([node.left, column - 1]);
    }

    if (node.right !== null) {
      queue.push([node.right, column + 1]);
    }
  }

  const result: number[][] = [];
  for (let i = minColumn; i <= maxColumn; i++) {
    result.push(columnMap.get(i));
  }

  return result;
}

export const test = () => {
  const tree1 = new BinaryTreeNode(
    3,
    new BinaryTreeNode(9),
    new BinaryTreeNode(20, new BinaryTreeNode(15), new BinaryTreeNode(7))
  );
  assert.deepEqual(verticalOrder(tree1), [[9], [3, 15], [20], [7]]);
};

export default verticalOrder;
