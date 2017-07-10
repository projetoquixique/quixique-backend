var mongoose = require('mongoose');

module.exports = function() {
	var schema = mongoose.Schema({
        cid:{
			type: mongoose.Schema.ObjectId,
			ref: 'Cliente',
			required: true
		},
        aid:{
            type: mongoose.Schema.ObjectId,
			ref: 'Artesao',
			required: true
        },
        pid:{
            type: mongoose.Schema.ObjectId,
			ref: 'Produto',
			required: true
        },
        qtd:{
            type: Number,
            required: true
        },
        valor:{
            type: Number,
            required: true
        },
        destino:{
            type: String,
            required: true
        },
        status:{
            type: String, //status refere-se ao estado do pedido (aguardando confirmação, confirmado ou recusado), ao aceitar ou recusar chamar função de atualizar o status
            required: false
        },
        data:{
            type: String,
            required: false
        }
    });
	return mongoose.model('Pedido', schema);
}();