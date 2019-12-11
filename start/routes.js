'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('login');
Route.get('/daftar', 'HomeController.daftar').as('daftar');
Route.post('/register', 'HomeController.register').as('register');
Route.post('/login', 'HomeController.login').as('login');
Route.get('/logout', 'HomeController.logout').as('logout');

Route.get('/home', 'HomeController.home').as('home').middleware('auth');
Route.get('/tampil','HomeController.index').middleware('auth');
Route.post('/simpan', 'HomeController.create').middleware('auth');
Route.get('/edit/:id', 'HomeController.edit').middleware('auth');
Route.post('/update', 'HomeController.update').middleware('auth');
Route.get('/hapus/:id', 'HomeController.delete').middleware('auth');
