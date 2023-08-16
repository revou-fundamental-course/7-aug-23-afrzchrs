document.querySelector('.btn1').addEventListener('click', () => {
    window.location.href = 'Luas.html';
    console.log('berfungsi1')
});
document.querySelector('.btn2').addEventListener('click', () => {
    window.location.href = 'Keliling.html';
    console.log('berfungsi2')
});

//Algoritma Perhitungan
document.getElementById("submit").addEventListener("click",HasilLuas);

function HasilLuas(){
    var alas = document.getElementById('alas').value;
    var tinggi = document.getElementById('tinggi').value;
    var hasil = 1/2*alas*tinggi;
    Result1='L = 1/2 x a x t';
    Result2='L = 1/2 x '+ alas + ' x ' +tinggi;
    Result3='L = '+ hasil;
    for (let i = 2; i > 1; i--) {
        console.log("Success!");
        document.getElementById('isi1').innerHTML = Result1;
        document.getElementById('isi2').innerHTML = Result2;
        document.getElementById('isi3').innerHTML = Result3;
    }
}

function ResetLuas(){
    var alas = document.getElementById('alas').value;
    var tinggi = document.getElementById('tinggi').value;
    Result1='';
    Result2='';
    Result3='';
    for (let i = 2; i > 1; i--) {
        console.log("Success!");
        document.getElementById('isi1').innerHTML = Result1;
        document.getElementById('isi2').innerHTML = Result2;
        document.getElementById('isi3').innerHTML = Result3;
        document.getElementById('alas').value = "";
        document.getElementById('tinggi').value= "";
}
}

function HasilKeliling(){
    var sisi1 = document.getElementById('sisi1').value;
    var sisi2 = document.getElementById('sisi2').value;
    var sisi3 = document.getElementById('sisi3').value;
    var hasil = Number(sisi1) + Number(sisi2) + Number(sisi3);
    Answer1='K = S1 + S2 + S3';
    Answer2='K = '+ sisi1 + ' + ' + sisi2 + ' + ' + sisi3;
    Answer3='K = '+ hasil;
    for (let i = 2; i > 1; i--) {
        console.log('Success!');
        document.getElementById('jwbn1').innerHTML = Answer1;
        document.getElementById('jwbn2').innerHTML = Answer2;
        document.getElementById('jwbn3').innerHTML = Answer3;
    
}
}

function ResetKeliling(){
    var sisi1 = document.getElementById('sisi1').value;
    var sisi2 = document.getElementById('sisi2').value;
    var sisi3 = document.getElementById('sisi3').value;
    Answer1='';
    Answer2='';
    Answer3='';
    for (let i = 2; i > 1; i--) {
        console.log("Success!");
        document.getElementById('jwbn1').innerHTML = Answer1;
        document.getElementById('jwbn2').innerHTML = Answer2;
        document.getElementById('jwbn3').innerHTML = Answer3;
        document.getElementById('sisi1').value = "";
        document.getElementById('sisi2').value = "";
        document.getElementById('sisi3').value = "";
}
}
