/**
 * Terdapat dua buah array yaitu array INPUT dan array QUERY,
 * silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
 *
 * Contoh:
 * INPUT = ['xc', 'dz', 'bbb', 'dz']
 * QUERY = ['bbb', 'ac', 'dz']
 * OUTPUT = [1, 0, 2]
 *
 * karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT,
 * dan kata 'dz' terdapat 2 pada INPUT
 */

const input = ["xc", "dz", "bbb", "dz"];
const query = ["bbb", "ac", "dz"];

// Create a set from the query array, ensure that there are no duplicates
const querySet = new Set(query);
const frequencyMap = new Map();

querySet.forEach((word) => {
  // Initialize the frequency map with 0
  frequencyMap.set(word, 0);

  // Count the frequency of the word in the input array
  input.forEach((inputWord) => {
    if (inputWord === word) {
      frequencyMap.set(word, frequencyMap.get(word) + 1);
    }
  });
});

console.log([...frequencyMap.values()]);
