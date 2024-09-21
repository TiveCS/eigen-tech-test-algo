/**
 * Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut,
 * jika ada kata dengan panjang yang sama silahkan ambil salah satu.
 *
 * Contoh:
 * const sentence = "Saya sangat senang mengerjakan soal algoritma"
 * longest(sentence) //mengerjakan: 11 character
 */

const sentence = "Saya sangat senang mengerjakan soal algoritma";

let currentLongestWord = "";

// Get each of the words in the sentence
const words = sentence.toLowerCase().split(" ");

// Find the longest word
words.forEach((word) => {
  if (currentLongestWord.length < word.length) {
    currentLongestWord = word;
  }
});

console.log(`${currentLongestWord}: ${currentLongestWord.length} character`);
