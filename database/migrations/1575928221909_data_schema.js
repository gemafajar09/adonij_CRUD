'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DataSchema extends Schema {
  up () {
    this.create('data', (table) => {
      table.increments('id_data');
      table.string('nama',50);
      table.text('alamat');
      table.date('tanggal');
      table.timestamps()
    })
  }

  down () {
    this.drop('data')
  }
}

module.exports = DataSchema
