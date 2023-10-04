//Baterry
    tag_battery_status = document.querySelector('small#battery_status');
    tag_battery_level = document.querySelector('span#battery_level');
     setInterval(function() {
         navigator.getBattery().then(battery=> {
             battery_level = String(battery.level).split('.')[1];
             tag_battery_level.innerHTML = `${(battery_level.length <= 1)? oud(Number(battery_level)): battery_level}% ${battery.charging ? 'di cas': 'ga di cas'}`;
         });
     },
         10);

//Visit
/*  var xhr = new XMLHttpRequest();
  var mfarelsapi = `https://mfarels.my.id/statistic`;
  xhr.onerror = function () {
    alert("Gagal mengambil data");
    };
  xhr.onloadend = function () {
    if (this.responseText !== "") {
      var data = JSON.parse(this.responseText);
    if (data.status == 'Error'){
      alert('Error');
      alert('Harap masukan input dengan benar!');
    }else{
      console.log('')
      }
    }
  };
  xhr.open("GET", mfarelsapi, true);
  xhr.send();*/


//count Time
// Array tanggal latihan (diisi dengan tanggal-tanggal hari Sabtu yang diinginkan)
var latihanDates = ['Oct 07, 2023', 'Oct 14, 2023',
  'Oct 21, 2023', 'Oct 28, 2023', 'Nov 04, 2023', 'Nov 11, 2023',
  'Nov 18, 2023', 'Nov 25, 2023', 'Dec 02, 2023', 'Dec 09, 2023',
  'Dec 16, 2023', 'Dec 23, 2023', 'Dec 30, 2023', 'Jan 06, 2024',
  'Jan 13, 2024', 'Jan 20, 2024', 'Jan 27, 2024', 'Feb 03, 2024',
  'Feb 10, 2024', 'Feb 17, 2024', 'Feb 24, 2024', 'Mar 02, 2024',
  'Mar 09, 2024', 'Mar 16, 2024', 'Mar 23, 2024', 'Mar 30, 2024',
  'Apr 06, 2024', 'Apr 13, 2024', 'Apr 20, 2024', 'Apr 27, 2024',
  'May 04, 2024', 'May 11, 2024', 'May 18, 2024', 'May 25, 2024',
  'Jun 01, 2024', 'Jun 08, 2024', 'Jun 15, 2024', 'Jun 22, 2024',
  'Jun 29, 2024'];

// Inisialisasi indeks tanggal pertama
var currentLatihanIndex = 0;

// Mengambil tanggal latihan pertama
var countDownDate = new Date(latihanDates[currentLatihanIndex] + " 06:30:00").getTime();

// Fungsi untuk mendapatkan indeks tanggal berikutnya
function getNextLatihanIndex() {
  currentLatihanIndex++;
  if (currentLatihanIndex >= latihanDates.length) {
    currentLatihanIndex = 0; // Kembali ke indeks pertama jika sudah mencapai batas array
  }
  return currentLatihanIndex;
}

// Update Hitungan Mundur Setiap 1 Detik
var x = setInterval(function() {
  // Mengambil Tanggal Dan Waktu Sekarang
  var now = new Date().getTime();

  // Jika waktu latihan saat ini telah berakhir, pindah ke tanggal latihan berikutnya
  if (now >= countDownDate) {
    currentLatihanIndex = getNextLatihanIndex();
    countDownDate = new Date(latihanDates[currentLatihanIndex] + " 10:00:00").getTime();
  }

  // Hitung selisih waktu
  var distance = countDownDate - now;

  // Kalkulator Waktu Hari, Jam, Menit, Detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Menampilkan hasil dalam elemen dengan id="jadwaltime"
  document.getElementById("jadwaltime").innerHTML = `${days} Hari<br>${hours} Jam<br>${minutes} Menit<br>${seconds} Detik`;

  // Ketika countdown timer sudah berakhir, tampilkan pesan "Berakhir"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("jadwaltime").innerHTML = "Berakhir";
  }
}, 1000);

//Jam
let scrollToTopRoundedfasfauserninjaXfa2xtextprimary = document.querySelector('div#row-no-guttersalign-items-center');
let fasfauserninjaXfa2xtextprimary = document.querySelector('div#text-xsfont-weight-boldtext-uppercase-mb-1');
setInterval(() => {
  var widthdeVicewidthXinitialscalesHrinkno = new Date();
  const Jam = widthdeVicewidthXinitialscalesHrinkno.getHours().toString().padStart(2, 0);
  const jam = widthdeVicewidthXinitialscalesHrinkno.getHours().toString().padStart(2, 0);
  const menit = widthdeVicewidthXinitialscalesHrinkno.getMinutes().toString().padStart(2, 0);
  const Menit = widthdeVicewidthXinitialscalesHrinkno.getMinutes().toString().padStart(2, 0);
  const Detik = widthdeVicewidthXinitialscalesHrinkno.getSeconds().toString().padStart(2, 0);
  const detik = widthdeVicewidthXinitialscalesHrinkno.getSeconds().toString().padStart(2, 0);
  const jaM = widthdeVicewidthXinitialscalesHrinkno.getHours().toString().padStart(2, 0);
  const mEnit = widthdeVicewidthXinitialscalesHrinkno.getMinutes().toString().padStart(2, 0);
  const detIk = widthdeVicewidthXinitialscalesHrinkno.getSeconds().toString().padStart(2, 0);
  if (Jam < 4) {
    fasfauserninjaXfa2xtextprimary.innerHTML = "Selamat Dini Hari";
  } else if (jam < 11) {
    fasfauserninjaXfa2xtextprimary.innerHTML = "Selamat Pagi";
  } else if (Jam < 16) {
    fasfauserninjaXfa2xtextprimary.innerHTML = "Selamat Siang";
  } else if (jam < 20) {
    fasfauserninjaXfa2xtextprimary.innerHTML = "Selamat Sore";
  } else {
    fasfauserninjaXfa2xtextprimary.innerHTML = "Selamat Malam";
  }
  scrollToTopRoundedfasfauserninjaXfa2xtextprimary.innerHTML = jaM + ":" + mEnit + ":" + detIk
}, 250);