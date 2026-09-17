// Komputer memilih angka secara acak dari 1 sampai 100
let randomNumber = Math.floor(Math.random() * 100) + 1;


// Fungsi ketika tombol "Tebak" ditekan
function checkGuess() {

    // Mengambil angka dari input
    let guess = Number(document.getElementById("guessInput").value);

    // Mengambil tempat untuk menampilkan hasil
    let result = document.getElementById("result");


    // Mengecek tebakan
    if (guess === randomNumber) {

        result.textContent = "🎉 BENAR! Kamu berhasil menebak angkanya!";

    } else if (guess < randomNumber) {

        result.textContent = "🔽 Terlalu kecil! Coba lagi.";

    } else {

        result.textContent = "🔼 Terlalu besar! Coba lagi.";

    }
}