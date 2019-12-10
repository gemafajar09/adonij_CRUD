'use strict'
const data = use('App/Models/DataBaru');
var moment = require('moment');
class HomeController {
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
