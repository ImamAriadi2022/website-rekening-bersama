function send() {
    var pesansatu = document.getElementById("input1").value; 
    var pesandua = document.getElementById("input2").value; 
    var pesantiga = document.getElementById("input3").value; 
    var pesanempat = document.getElementById("input4").value; 
    var pesanlima = document.getElementById("input5").value; 
    var pesanenam = document.getElementById("input6").value; 
  
    var message = "Hai saya calon client anda:\n" + "saya ingin mengajukan pesan sebagai berikut\n" + "wa penjual :"+ pesansatu + "\n"+
    "Wa pembeli:" + pesandua+ "\n" + "nama barang : " + pesantiga+ "\n" + "Jumlah Barang : " + 
    pesanempat + "\n" + "harga barang :" + pesanlima; 
  
    var adminPhoneNumber = "6282223252500";
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + adminPhoneNumber + "&text=" + encodeURIComponent(message);
  
    window.open(whatsappURL);
  
    document.getElementById("backButton").style.display = "block";
  }


  // Mengambil semua elemen img dalam halaman
var images = document.getElementsByTagName('img');

// Menambahkan event listener untuk setiap elemen img
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Mencegah tampilnya menu konteks saat klik kanan
    });
}
