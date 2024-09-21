// Soal:
// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

const input = "NEGIE1";

// Separate alphabets and numbers
const alphabets = input.replace(/[0-9]/g, ""); // Removes all digits
const numbers = input.replace(/[a-zA-Z]/g, ""); // Keeps only the digits

// Reverse the alphabets
const reversedAlphabets = alphabets.split("").reverse().join("");

// Concatenate reversed alphabets with numbers
const result = reversedAlphabets + numbers;

console.log(result);
