alert('SELAMAT DATANG DI WEBSITE PROFIL SINGKAT UNESA');

document.getElementById('project1').innerHTML = 'Universitas Negeri Surabaya adalah sebuah Perguruan Tinggi Negeri yang terletak di Surabaya, Jawa Timur, Indonesia. UNESA didirikan pada 19 Desember 1964 ';
document.getElementById('project2').innerHTML =
  'Universitas Negeri Surabaya adalah Perguruan Tinggi Negeri di Kota Surabaya, Jawa Timur, Indonesia. UNESA menempati peringkat ke-15 dalam klasterisasi pemeringkatan perguruan tinggi 2021 oleh Kementerian Pendidikan dan Kebudayaan Republik Indonesia';
document.getElementById('project3').innerHTML =
  'Unesa memmiliki kampus utama yaitu kampus yang berada di ketintang dan berasa di lidah wetan, Pada kampus lidah wetan terdapat 3 fakultas sedangkan yang berada pada kampus ketintang terdapat empat fakultas';
document.getElementById('project4').innerHTML =
  'UNESA memiliki kampus yang berlokasi di 2 tempat di Surabaya, yakni Kampus di Ketintang yang memiliki 4 fakultas yakni Fakultas Ilmu Sosial dan Hukum, Fakultas Ekonomi, Fakultas Matematika dan Ilmu Pengetahuan alam, serta Fakultas Teknik. Sedangkan kampus satunya berada di Lidah Wetan dengan 3 Fakultas yakni Fakultas Ilmu Pendidikan, Fakultas Bahasa dan Seni, serta Fakultas Ilmu Keolahragaan.';
document.getElementById('project5').innerHTML = 'Unesa disebut sebagai universitas pendidikan terbaik di indonesia, banyak lulusan pendidikan maupun non pendidikan yang berhasil dan berjasa bagi indonesia';
document.getElementById('project6').innerHTML = 'Banyak sekali peminat yang ingin sekali masuk di univeritas negeri surabaya, terdapat tiga jalur Masuk yang dimiliki unesa yaitu jalur SNMPTN, SBMPTN dan jalur SPMB Unesa';

var id_p = document.getElementById('project1');
id_p.style.color = 'red';
var id_p2 = document.getElementById('project2');
id_p2.style.color = '#361500';
var id_p3 = document.getElementById('project3');
id_p3.style.color = 'green';
var id_p4 = document.getElementById('project4');
id_p4.style.color = '#0E185F';
var id_p5 = document.getElementById('project5');
id_p5.style.color = '#D82148';
var id_p6 = document.getElementById('project6');
id_p6.style.color = '#051367';

const Kirim = document.querySelector('#buton');
console.log(Kirim);
Kirim.onclik = function () {
  console.log('Kontak anda terkirim');
};
