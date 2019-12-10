'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DataBaruSchema extends Schema {
  up () {
    this.create('data_barus', (table) => {
      table.increments('id_data');
      table.string('nama',50);
      table.text('alamat');
      table.date('tanggal');
      table.timestamps()
    })
  }

  down () {
    this.drop('data_barus')
  }
}

module.exports = DataBaruSchema
