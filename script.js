const mahasiswa = [
  { nim: "105841100223", nama: "M. Taslim Januar", prodi: "Informatika", semester: 5 },
  { nim: "105841100623", nama: "Dwi Cahya Andi Pangeran", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841100823", nama: "Samsul", prodi: "Informatika", semester: 5 },
  { nim: "105841102423", nama: "Andi Fadryan", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841103023", nama: "Ikhlashul Amal M", prodi: "Informatika", semester: 5 },
  { nim: "105841103123", nama: "Rehan Anugrah", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841106523", nama: "Hardiansyah Arif", prodi: "Informatika", semester: 5 },
  { nim: "105841109723", nama: "Sindry Armadani", prodi: "Informatika", semester: 5 },
  { nim: "105841111123", nama: "Nandar Mulya Rahmat", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841104823", nama: "Fadillah Zakynah A", prodi: "Informatika", semester: 5 },
  { nim: "105841105023", nama: "Muh. Anzhori Ikhsan", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841105223", nama: "Muhammad Athaya Haflin", prodi: "Informatika", semester: 5 },
  { nim: "105841108323", nama: "Hamdan Al Fattah", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841109323", nama: "Andi Hilyatul Mar'ah", prodi: "Informatika", semester: 5 },
  { nim: "105841110123", nama: "Ridha Awalia Adi", prodi: "Informatika", semester: 5 },
  { nim: "105841110223", nama: "Ahmad Fajrul Islami", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841110623", nama: "Nadya Nur Farisma", prodi: "Informatika", semester: 5 },
  { nim: "105841110823", nama: "Muh. Tazkiyah Islam Kamaluddin", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841112023", nama: "Suhail Juaris", prodi: "Informatika", semester: 5 },
  { nim: "105841112323", nama: "Rezki Anugerah Leman", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841112823", nama: "Juhardin", prodi: "Informatika", semester: 5 },
  { nim: "105841113823", nama: "Muh. Aryo Zakaria", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841114023", nama: "Muh. Arsy Aviv", prodi: "Informatika", semester: 5 },
  { nim: "105841114323", nama: "M. Ardianto", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841114723", nama: "Muh. Arkham", prodi: "Informatika", semester: 5 },
  { nim: "105841114823", nama: "Zhidan Dzaky Azzam", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841111523", nama: "Araswandika", prodi: "Informatika", semester: 5 },
  { nim: "105841118523", nama: "Gushryanto Libels", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841119023", nama: "Yuyun Febrianti", prodi: "Informatika", semester: 5 },
  { nim: "105841119923", nama: "Muhammad Rafly", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841120123", nama: "Akri Sakkar", prodi: "Informatika", semester: 5 },
  { nim: "105841120323", nama: "Mustika", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841121323", nama: "Salsa Bila Syaki", prodi: "Informatika", semester: 5 },
  { nim: "105841121723", nama: "Andi Fahmi Ashari", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841103923", nama: "Muh Agus Salam", prodi: "Informatika", semester: 5 },
  { nim: "105841103924", nama: "Alief Resky Awal", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841104023", nama: "Muhammad Faizal", prodi: "Informatika", semester: 5 },
  { nim: "105841104623", nama: "Muhammad Faizal", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841106823", nama: "Ismail Salam", prodi: "Informatika", semester: 5 },
  { nim: "105841107223", nama: "Muhammad Aksan", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841104723", nama: "Rifki Nur Fahrezi Ahmad", prodi: "Informatika", semester: 5 },
  { nim: "105841106623", nama: "Nadilla Getalia", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841104223", nama: "Fauziah", prodi: "Informatika", semester: 5 },
  { nim: "105841104423", nama: "Nurul Mustainna", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841107423", nama: "St Nur Azmi Fauziah", prodi: "Informatika", semester: 5 },
  { nim: "105841107023", nama: "Nurhaeni", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841106923", nama: "Nur Aliyah Amaliani", prodi: "Informatika", semester: 5 },
  { nim: "105841104523", nama: "Fadlurrahman Rivai", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841106723", nama: "Anugrah", prodi: "Informatika", semester: 5 },
  { nim: "105841105823", nama: "M Fahri Marfiansyah", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841106323", nama: "Ferdi Ardiansyah", prodi: "Informatika", semester: 5 },
  { nim: "105841104123", nama: "Hafifah Mulyana", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841105323", nama: "Siti Nurmaniah", prodi: "Informatika", semester: 5 },
  { nim: "105841103323", nama: "Nur Ilmi Aulia", prodi: "Teknik Elektro", semester: 5 },
  { nim: "105841103623", nama: "Andi Mawadda Taiba", prodi: "Informatika", semester: 5 },

  // Angkatan baru
  { nim: "105841200001", nama: "Rahmat Hidayat", prodi: "Teknik Elektro", semester: 1 },
  { nim: "105841200002", nama: "Aulia Putri", prodi: "Informatika", semester: 1 },
  { nim: "105841200003", nama: "Fajar Ramadhan", prodi: "Teknik Elektro", semester: 1 },
  { nim: "105841200004", nama: "Dian Pratiwi", prodi: "Informatika", semester: 1 },
  { nim: "105841200005", nama: "Rizky Maulana", prodi: "Teknik Elektro", semester: 1 }
];

// Brute Force String Matching
function match(text, pattern) {
    text = text.toLowerCase();
    pattern = pattern.toLowerCase();

    for (let i = 0; i <= text.length - pattern.length; i++) {
        let j = 0;
        while (j < pattern.length && text[i + j] === pattern[j]) {
            j++;
        }
        if (j === pattern.length) return true;
    }
    return false;
}

function search() {
    const keyword = document.getElementById("keyword").value;
    const result = document.getElementById("result");
    result.innerHTML = "";

    mahasiswa.forEach(m => {
        if (match(m.nama, keyword)) {
            result.innerHTML += `<li>${m.nim} - ${m.nama} (${m.prodi})</li>`;
        }
    });

    if (result.innerHTML === "") {
        result.innerHTML = "<li>Data tidak ditemukan</li>";
    }
}
