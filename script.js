// SPREAD OPERATOR
//1. memecah iterable menjadi single element
// const mhs = ['Dherisma', 'Izza', 'Faiza'];
// console.log(...mhs); 
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
const mhs = ['Dherisma', 'Izza', 'Faiza'];
const mhs1 = [...mhs];
mhs1[0] = 'Hanindita';
console.log(mhs1);
