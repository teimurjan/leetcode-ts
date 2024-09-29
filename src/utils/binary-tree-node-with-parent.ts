class BinaryTreeNodeWithParent {
  val: number;
  left: BinaryTreeNodeWithParent | null;
  right: BinaryTreeNodeWithParent | null;
  parent: BinaryTreeNodeWithParent | null;

  constructor(
    val?: number,
    left?: BinaryTreeNodeWithParent | null,
    right?: BinaryTreeNodeWithParent | null,
    parent?: BinaryTreeNodeWithParent | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.parent = parent === undefined ? null : parent;

    if (this.left !== null) {
      this.left.parent = this;
    }
    if (this.right !== null) {
      this.right.parent = this;
    }
  }
}

export default BinaryTreeNodeWithParent;
