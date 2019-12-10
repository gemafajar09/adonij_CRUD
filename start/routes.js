'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home');
Route.get('/tampil','HomeController.index');
Route.post('/simpan', 'HomeController.create');
Route.get('/edit/:id', 'HomeController.edit');
Route.post('/update', 'HomeController.update');
Route.get('/hapus/:id', 'HomeController.delete');
