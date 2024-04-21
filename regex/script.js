//regex
let regexDagul = document.querySelector("#regexDagul");
let validationTextdgl = document.querySelector("#validationTextdgl");

regexDagul.addEventListener("input", function () {
  let inputString = regexDagul.value;
  let words = inputString.split(" ");
  let isUnique = words.length === new Set(words).size;

  validationTextdgl.textContent = isUnique ? "Valid" : "Invalid, no duplicate words allowed.";
});


// regex untuk memastikan alamat email berakhir dengan "@gmail.com"
const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

// Mengambil elemen input dan elemen pesan validasi dari DOM
let regexDagul2 = document.querySelector("#regexDagul2");
let validationTextdgl2 = document.querySelector("#validationTextdgl2");

// Menambahkan event listener untuk input
regexDagul2.addEventListener("input", function() {
    // Mengambil nilai dari input
    let inputString = regexDagul2.value;

    // Memeriksa apakah input cocok dengan pola regex
    let isValid = regex.test(inputString);

    // Menetapkan pesan validasi berdasarkan hasil pemeriksaan
    validationTextdgl2.textContent = isValid 
        ? "Valid" 
        : "Invalid, email harus diakhiri dengan @gmail.com";
});

