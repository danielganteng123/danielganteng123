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
regexDagul2.addEventListener("input", function () {
  // Mengambil nilai dari input
  let inputString = regexDagul2.value;

  // Memeriksa apakah input cocok dengan pola regex
  let isValid = regex.test(inputString);

  // Menetapkan pesan validasi berdasarkan hasil pemeriksaan
  validationTextdgl2.textContent = isValid ? "Valid" : "Invalid, email harus diakhiri dengan @gmail.com";
});

// Regex untuk memastikan input hanya berisi angka dan memiliki panjang tepat 5 karakter
const regexDagul3 = /^\d{5}$/;

// Memperbarui pesan validasi saat input berubah
const regexInputDagul3 = document.querySelector("#regexDagul3");
const validationTextDagul3 = document.querySelector("#validationTextdgl3");

regexInputDagul3.addEventListener("input", function () {
  const input = regexInputDagul3.value;
  const isValid = regexDagul3.test(input);
  validationTextDagul3.textContent = isValid ? "Valid" : "Invalid, hanya menerima angka dengan panjang tepat 5 karakter.";
});

// Regex untuk memastikan input adalah format email yang valid
const regexDagul4 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// Memperbarui pesan validasi saat input berubah
const regexInputDagul4 = document.querySelector("#regexDagul4");
const validationTextDagul4 = document.querySelector("#validationTextdgl4");

regexInputDagul4.addEventListener("input", function () {
  const input = regexInputDagul4.value;
  const isValid = regexDagul4.test(input);
  validationTextDagul4.textContent = isValid ? "Valid" : "Invalid, format email tidak valid.";
});

// Regex untuk memastikan input tidak mengandung spasi ganda
const regexDagul5 = /^(?!.*  )[\s\S]*$/;

// Memperbarui pesan validasi saat input berubah
const regexInputDagul5 = document.querySelector("#regexDagul5");
const validationTextDagul5 = document.querySelector("#validationTextdgl5");

regexInputDagul5.addEventListener("input", function () {
  const input = regexInputDagul5.value;
  const isValid = regexDagul5.test(input);
  validationTextDagul5.textContent = isValid ? "Valid" : "Invalid, tidak boleh mengandung spasi ganda.";
});
