var clientes = [{"tipo":"artesao","nome":"Felipe Peixoto","cpf":"00987698000","dataDeNascimento":"12/01/1982","naturalidade":"QuixadÃ¡","email":"felipe.peixoto@gmail.com","telefone":"(88)9900-0099","nomeComercial":"Felipe Peixoto ConfecÃ§Ãµes","categoria":"1","descricao":"Loja de confecÃ§Ãµes","cep":"63900-000","rua":"R. Avelino Gomes","numero":"13","bairro":"Centro","cidade":"QuixadÃ¡","estado":"CearÃ¡","nomeDeUsuario":"felipeixoto","senha":"123456","id":"593703f39c4fa2010079f506"},{"tipo":"artesao","nome":"JÃºlio CÃ©sar","cpf":"90878900989","dataDeNascimento":"23/02/1990","naturalidade":"QuixadÃ¡","email":"juliocesar@hotmail.com","telefone":"(85)9876-9090","nomeComercial":"JÃºlio CalÃ§ados","categoria":"1","descricao":"Lojinha de calÃ§ados","cep":"09099-999","rua":"Rua Jacinto Pereira","numero":"9","bairro":"Centro","cidade":"QuixadÃ¡","estado":"CearÃ¡","nomeDeUsuario":"juliocesar","senha":"123456","id":"59372de4ce2b0501001d90e8"},{"tipo":"cliente","nome":"Ana Maria","dataDeNascimento":"09/09/1990","cpf":"02345678900","email":"anamaria@mail.com","telefone":"(87)9990-0009","cep":"63903-456","rua":"R. JosÃ© de Queiroz","numero":"9","bairro":"Centro","cidade":"QuixadÃ¡","estado":"CearÃ¡","nomeDeUsuario":"anamaria","senha":"123456","id":"593743b2ce2b0501001d90fa"},{"tipo":"cliente","nome":"Maria Ana","dataDeNascimento":"25/03/1990","cpf":"03804509800","email":"mariaana@mail.com","telefone":"(87)9878-0909","cep":"43563-098","rua":"Rua JosÃ© Tavares","numero":"2","bairro":"Centro","cidade":"QuixadÃ¡","estado":"CearÃ¡","nomeDeUsuario":"mariaana","senha":"123456","id":"59374641d0ec2b01003acb79"},{"tipo":"artesao","nome":"Rilda Aires","cpf":"03804567890","dataDeNascimento":"23/09/1990","naturalidade":"QuixadÃ¡","email":"rildaires@mail.com","telefone":"(87)9090-9090","nomeComercial":"Rilda Chinelinhos","categoria":"1","descricao":"Chinelos feitos de pneu","cep":"63903-990","rua":"R. Travessa Mania","numero":"8","bairro":"Centro","cidade":"QuixadÃ¡","estado":"CearÃ¡","nomeDeUsuario":"mariaana","senha":"123456","id":"593746f5d0ec2b01003acb7a"}];

// var clientes = [{nome:'pepeu'}];
module.exports.listarClientes = function(req, res){
    res.json(clientes);
};

module.exports.obterCliente = function(req, res){
    var id = req.params.id;
    var cliente = clientes.find(cliente => (cliente.id==id));
    if(cliente){
        res.json(cliente);
    }else{
        res.status(404).send('Not Found');
    }
};

module.exports.inserirCliente = function(req, res){
    clientes.push(req.body);
    res.status(201).send(req.body);
};