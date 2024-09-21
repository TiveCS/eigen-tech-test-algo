/**
 * Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN
 *
 * Contoh:
 * Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
 * diagonal pertama = 1 + 5 + 9 = 15
 * diagonal kedua = 0 + 5 + 7 = 12
 * maka hasilnya adalah 15 - 12 = 3
 */

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

let diagonal1 = 0,
  diagonal2 = 0;

// Loop through the matrix to calculate the sum of the diagonals
for (let i = 0; i < matrix.length; i++) {
  diagonal1 += matrix[i][i];
  diagonal2 += matrix[i][matrix.length - 1 - i];
}

// Calculate the result
const sumResult = diagonal1 - diagonal2;

console.log(sumResult);
