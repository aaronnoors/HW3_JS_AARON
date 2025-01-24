const harga = [10, 15, 35, 25];
const malename = ["Tom", "Abu", "Peng"];
let jumlah = 0;
harga.forEach((nilai) => {
  jumlah = jumlah + nilai;
});
let newname = malename.sort();
console.log("jumlah :" + jumlah);
console.log(newname);
