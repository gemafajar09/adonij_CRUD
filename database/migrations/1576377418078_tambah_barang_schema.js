'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TambahBarangSchema extends Schema {
  up () {
    this.create('tambah_barangs', (table) => {
      table.increments('id_stock');
      table.string('kdProduct',191);
      table.string('namaProduct',191);
      table.text('foto');
      table.integer('stock');
      table.text('deskripsi');
      table.integer('terjual');
      table.timestamps()
    })
  }

  down () {
    this.drop('tambah_barangs')
  }
}

module.exports = TambahBarangSchema
