const { hooks } = require('@adonisjs/ignitor')
var moment = require('moment');
hooks.after.providersBooted(() => {
  const View = use('View')
  
  /*
    tanggalIndo(tanggal, format)
    untuk mengubah tanggal sql menjadi lebih manusiawi
    contoh :
    tanggalIndo("2019-12-31") hasilnya 31 Desember 2019
    tanggalIndo("2019-12-31", "MMMM") hasilnya Desember
    tanggalIndo("2019-12-31", "D MMMM") hasilnya 31 Desember
  */
  View.global('tanggalIndo', (tanggal, format = "D MMMM YYYY") => {
    return moment(new Date(tanggal)).format(format)
  })
})