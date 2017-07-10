var mongoose = require('mongoose');

module.exports = function() {
	var schema = mongoose.Schema({
		imagem:{
			type: [String],
			required: false
		},
		aid: {
			type: mongoose.Schema.ObjectId,
			ref: 'Artesao',
			required: true
		},
		nome: {
			type: String,
			required: true
		},
		descricao: {
			type: String,
			required: true
		},
    preco: {
			type: Number,
			required: true
		},
    dimensoes: {
			type: [Number],
			required: true
		},
    categoria: {
			type: String,
			required: true
		},
    estoque: {
			type: Number,
			required: true
		}
	});
	schema.index({nome: 'text', descricao:'text'});
	return mongoose.model('Produto', schema);
}();