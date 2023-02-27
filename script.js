// SPREAD OPERATOR
//1. memecah iterable menjadi single element
const mhs = ['Dherisma', 'Izza', 'Faiza'];
console.log(mhs); 
// ======================================================

//2. Menggabungkan 2 array
// const mhs = ['Dherisma', 'Izza', 'Faiza'];
// const dosen = ['Prima', 'Rosa', 'Ando'];
// const orang = [...mhs, ...dosen];
// console.log(orang); 
// ======================================================

// 3. Menggabungkan elemen array lain ditengan
// const mhs = ['Dherisma', 'Izza', 'Faiza'];
// const dosen = ['Prima', 'Rosa', 'Ando'];
// const orang = [...mhs, 'Hanindita', ...dosen];
// console.log(orang); 
// ======================================================

// 4. Menyalin array atau objek
// const mhs = ['Dherisma', 'Izza', 'Faiza'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Hanindita';
// console.log(mhs1);
// ======================================================

// 5. Meneruskan beebrapa argumen ke suatu fungsi
// function sum(a, b, c) {
//     return a + b + c;
//   }
  
//   const numbers = [1, 2, 3];
//   const result = sum(...numbers); // 6
//   console.log(result);
// ======================================================

// 6. Membuat objek baru dengan properti dari objek lain
// const originalObject = { a: 1, b: 2 };
// const newObject = { ...originalObject, c: 3 }; // { a: 1, b: 2, c: 3 }
// console.log(newObject);