// var nama = "Danna saputra";
// const umur = 50;
//         // umur = 21;

// let dataSaya = `Nama saya adalah ${nama} dan Umur saya adalah  ${umur}`;

// function printDataNama(nama,umur){
//     let dataSaya = `Nama saya adalah ${nama}, umur saya ${umur}`;
//     console.log(dataSaya)
// }
// printDataNama(nama,umur)
//console.log(dataSaya);

const dataSaya = {
    nama: 'Danna saputra',
    umur: 28,
    printDataNama: (nama = "Nama Lengkap", umur="Waib di atas 17 tahun") => {
        var data = `Nama saya adalah ${nama} dan umur saya ${umur}`;
        console.log(data)
    }    
}
dataSaya.printDataNama();

function printData2(){
        nama: 'Danna saputra';
        umur: 50;
    console.log(this.nama);
}

function printData3 = () => {
    console.log(this);
}


class printDataClass{
    constructor(){
        nama:'Danna saputra';
        umur:50;
    }

    pritDataNama
}
