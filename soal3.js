/* 
Diberikan sebuah string yang merepresentasikan sebuah angka, tujuan utamanya adalah untuk menemukan palindrom terbesar yang bisa dibentuk dengan mengubah maksimal 'k' digit dalam string tersebut. Palindrom adalah angka yang terbaca sama baik dari depan maupun dari belakang. Kamu diberikan sebuah string 's' yang merepresentasikan sebuah angka dan sebuah bilangan bulat 'k'. Tugas kamu adalah menemukan Highest Palindrome yang dapat dibentuk dengan mengubah paling banyak 'k' digit pada string 's'.

Sampel 1:
Input:
string: 3943 
k: 1 
palindrom:
1. 3943  => 3993
2. 3943 => 3443
Output: 3993
Penjelasan: Dari bentuk palindrom yang diperoleh maka highest palindrome-nya adalah 3993 dikarenakan 3993 > 3443.

Sampel 2:
Input:
string: 932239 
k: 2
palindrom:
1. 932239  => sudah palindrome
2. Perlu replacement sebanyak k = 2 untuk mendapatkan nilai tertinggi => 992299
Output: 992299
Penjelasan: Dari bentuk palindrom yang diperoleh maka highest palindrome-nya adalah 992299 dikarenakan 992299 > 932239.

Aturan:
1. Jika dari sebuah string tidak ditemukan bentuk palindrome-nya meski sudah melakukan replacement dan tidak merepresentasikan sebuah angka maka akan mengeluarkan output -1.
2. Tidak boleh menggunakan fungsi bawaan/tools untuk pencarian/filter/sort.
3. Tidak boleh menggunakan looping.
4. Hanya diperkenankan menggunakan rekursif.

Soal:
Buat fungsi yang digunakan untuk menyelesaikan permasalahan Highest Palindrome!
*/

function highestPalindrome(s, k) {
    let arr = s.split("");
    let changed = new Array(arr.length).fill(false);

    // Tahap 1: Samakan kiri-kanan (palindrome minimal)
    function makePalindrome(left, right, k) {
        if (left >= right) return k;

        if (arr[left] === arr[right]) {
            return makePalindrome(left + 1, right - 1, k);
        }

        let bigger = arr[left] > arr[right] ? arr[left] : arr[right];
        arr[left] = arr[right] = bigger;
        changed[left] = changed[right] = true;

        return makePalindrome(left + 1, right - 1, k - 1);
    }

    k = makePalindrome(0, arr.length - 1, k);
    if (k < 0) return "-1";

    // Tahap 2: Maksimalkan jadi '9'
    function maximize(left, right, k) {
        if (left > right) return k;

        if (left === right) {
            if (k > 0) arr[left] = '9';
            return k;
        }

        if (arr[left] !== '9') {
            if (changed[left] || changed[right]) {
                if (k >= 1) {
                    arr[left] = arr[right] = '9';
                    return maximize(left + 1, right - 1, k - 1);
                }
            } else {
                if (k >= 2) {
                    arr[left] = arr[right] = '9';
                    return maximize(left + 1, right - 1, k - 2);
                }
            }
        }

        return maximize(left + 1, right - 1, k);
    }

    maximize(0, arr.length - 1, k);
    return arr.join("");
}

console.log(highestPalindrome("3943", 1)); 
console.log(highestPalindrome("932239", 2)); 
console.log(highestPalindrome("1234", 3)); 