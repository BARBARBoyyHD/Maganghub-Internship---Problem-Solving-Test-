/* 
GITS sedang bermain permainan arcade, dan dalam setiap permainan GITS ingin naik ke peringkat tertinggi dan juga ingin mengetahui setiap peringkat di setiap permainan. Dalam permainan ini menggunakan skema Dense Ranking​ dan memiliki aturan sebagai berikut:
- Peringkat pertama dapat diraih oleh pemain yang memiliki skor tertinggi
- Pemain yang memiliki skor yang sama memiliki peringkat yang sama.

Contoh:
- Empat pemain memiliki skor tertinggi sebagai berikut 100, 80, 80, dan 70, maka masing-masing pemain itu memiliki rangking 1, 2, 2, dan 3. 
- Jika GITS memiliki skor 60, 70, 100 setelah pertandingan maka rangking yang didapatkan adalah 4, 3, dan 1.

Sampel Input:
7
100 100 50 40 40 20 10 
4
5 25 50 120

Sampel Output:
6 4 2 1

Keterangan:
- 7​ adalah bentuk bilangan bulat, angka yang menunjukkan pada jumlah pemain yang ikut serta.
- 100 100 50 40 40 20 10 ​ adalah daftar skor yang diurutkan dari nilai terbesar ke nilai terkecil
(dalam bentuk array integer).
- 4 ​adalah jumlah permainan yang diikuti oleh GITS. 
- 5 25 50 120 ​adalah skor yang didapatkan oleh GITS.

Soal:
Buat fungsi yang digunakan untuk menyelesaikan permasalahan Dense Ranking!
*/

const denseRanking = ({ scores, gitsScores }) => {
  // Menggunakan new Set agar mempermudah ranking dan menghindari duplikasi
  const uniqueScores = [...new Set(scores)];

  const results = [];

  gitsScores.forEach((score) => {
    let rank = 1;

    // Cek posisi rank berdasarkan skor GITS
    for (let i = 0; i < uniqueScores.length; i++) {
      if (score < uniqueScores[i]) {
        rank++;
      } else {
        break;
      }
    }

    results.push(rank);
  });

  return results.join(" ");
};

const scores = [100, 100, 50, 40, 40, 20, 10];
const gits = [5, 25, 50, 120];

console.log(denseRanking({ scores: scores, gitsScores: gits })); 
