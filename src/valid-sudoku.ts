import { strict as assert } from "node:assert";

const SUDOKU_SIZE = 9;

const isValidSudoku = (board: string[][]): boolean => {
  // Check rows
  for (let y = 0; y < SUDOKU_SIZE; y++) {
    let dups = new Set();
    for (let x = 0; x < SUDOKU_SIZE; x++) {
      const value = board[y][x];
      if (value === ".") {
        continue;
      }

      if (dups.has(value)) {
        return false;
      }
      dups.add(value);
    }
  }

  // Check columns
  for (let x = 0; x < SUDOKU_SIZE; x++) {
    let dups = new Set();
    for (let y = 0; y < SUDOKU_SIZE; y++) {
      const value = board[y][x];
      if (value === ".") {
        continue;
      }

      if (dups.has(value)) {
        return false;
      }
      dups.add(value);
    }
  }

  // Check squares
  for (let y = 0; y < SUDOKU_SIZE; y += 3) {
    for (let x = 0; x < SUDOKU_SIZE; x += 3) {
      let dups = new Set();
      for (let i = y; i < y + 3; i++) {
        for (let j = x; j < x + 3; j++) {
          const value = board[i][j];
          if (value === ".") {
            continue;
          }

          if (dups.has(value)) {
            return false;
          }
          dups.add(value);
        }
      }
    }
  }

  return true;
};

export const test = () => {
  assert.deepEqual(
    isValidSudoku([
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ]),
    true
  );
  assert.deepEqual(
    isValidSudoku([
      ["8", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ]),
    false
  );
  assert.deepEqual(
    isValidSudoku([
      ["7", ".", ".", ".", "4", ".", ".", ".", "."],
      [".", ".", ".", "8", "6", "5", ".", ".", "."],
      [".", "1", ".", "2", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "9", ".", ".", "."],
      [".", ".", ".", ".", "5", ".", "5", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", "2", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ]),
    false
  );
};

export default isValidSudoku;
