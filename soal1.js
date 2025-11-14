/* 
Buatlah sebuah program dengan output sebagai berikut. Input bisa dinamis yang menghasilkan output yang berbeda-beda sesuai input yang dimasukan. Gunakan rumus A000124 of Sloane’s OEIS.

Contoh: 
- Input: 7
- Output : 1-2-4-7-11-16-22

Soal: 
Buat fungsi untuk menyelesaikan rumus A000124 of Sloane’s OEIS!
*/

const sloanes = (n) => {
    let result = [];
    let current = 1; // sebelum loop dimulai

    for (let i = 0; i < n; i++) {
        result.push(current);
        current += i + 1; // current = current + (i + 1)
    }

    return result.join("-");
};


console.log("input pertama :",sloanes(7)); 
console.log("input kedua :",sloanes(8)); 
console.log("input ketiga :",sloanes(9)); 

