'use strict'
const data = use('App/Models/DataBaru');
const User = use('App/Models/User');
const Hash = use('Hash');
var moment = require('moment');
class HomeController {

    async daftar ({ view }) {
        return view.render('register')
    }
      
    async register ({ request, session, response }) {
      
          const user = await User.create({
            username: request.input('username'),
            email: request.input('email'),
            password: request.input('password')
          })
          session.flash({ pesan : 'Success'});
          return response.redirect('/')
        }

    async login({request, response, session, auth}){
        const { email, password } = request.all()
        await auth.attempt(email, password)
            session.flash({ login: 'Selamat Datang.!!' });
            return response.redirect('home')
    }
    
    async logout ({ auth, response }) {
        await auth.logout()
    
        return response.redirect('/')
    }

    async home({auth, view}){
        return view.render('home')
    }

    async index({view}){
        const datas = await data.all();
        return view.render('tampilData', { datas: datas.rows })
    }

    async create({request, response, session}){
        const input = new data();
        input.nama = request.input('nama');
        input.alamat = request.input('alamat');
        input.tanggal = request.input('tanggal');
        await input.save();

        session.flash({ pesan: 'Successfully' });
        return response.route('HomeController.index')
    }

    async edit({params}){
        const id = params.id;
        const datas = await data.find(id);
    
        return JSON.stringify(datas);
    }

    async update({response, request, session}){
        const id = request.input('id');
        const update = await data.find(id);
        update.nama = request.input('nama');
        update.alamat = request.input('alamat');
        update.tanggal = request.input('tanggal');
        await update.save();

        session.flash({ pesan: 'Data Terupdate' });
        return response.route('HomeController.index')
    }

    async delete({response, params,session}){
        const id = params.id;
        const hapus = await data.find(id);
        await hapus.delete();

        session.flash({pesan : 'Data Terhapus'});
        return response.route('HomeController.index');
    }
}

module.exports = HomeController
