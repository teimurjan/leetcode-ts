import { strict as assert } from "node:assert";

const zigzagConversion = (s: string, numRows: number): string => {
  const mainStep = Math.max(numRows * 2 - 3, 0);
  const maxRowIndex = numRows - 1;
  const lettersBetween = numRows - 2;

  let result = "";
  let row = 0;

  while (row < numRows) {
    if (row === 0 || row === maxRowIndex) {
      let j = row;
      while (j < s.length) {
        result += s[j];
        j += mainStep + 1;
      }
    } else {
      let j = row;
      let odd = false;

      while (j < s.length) {
        result += s[j];

        if (!odd) {
          j += maxRowIndex - row + (lettersBetween - row + 1);
        } else {
          j += row * 2;
        }

        odd = !odd;
      }
    }

    row++;
  }

  return result;
};

export const test = () => {
  assert.deepEqual(zigzagConversion("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR");
  assert.deepEqual(zigzagConversion("PAYPALISHIRING", 4), "PINALSIGYAHRPI");
  assert.deepEqual(zigzagConversion("A", 1), "A");
};

export default zigzagConversion;
