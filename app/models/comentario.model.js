var mongoose = require('mongoose');

module.exports = function() {
	var schema = mongoose.Schema({
		cid: {
			type: mongoose.Schema.ObjectId,
			ref: 'Cliente',
			required: false
		},
		pid: {
			type: mongoose.Schema.ObjectId,
			ref: 'Produto',
			required: false
		},
		comentario: {
			type: String,
			required: true
		}
	});
	schema.index({nome: 'text', descricao:'text'});
	return mongoose.model('Comentario', schema);
}();