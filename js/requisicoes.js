window.onload = function(e) {
	fetch(
		'http://localhost:8080/AulaBanco/pessoas', {		
		}).then(response => response.json())				
	.then(data => { 
		console.log(data);
		data.forEach(el => {  
			var table = document.getElementById("tabledados");
			var row = table.insertRow(-1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1); 
			var cell3 = row.insertCell(2); 
			var cell4 = row.insertCell(3); 
			var cell5 = row.insertCell(4); 
			var cell6 = row.insertCell(5); 
			cell1.innerHTML = el.id;
			cell2.innerHTML = el.nome;
			cell3.innerHTML = el.idade;
			cell4.innerHTML = el.altura;
			cell5.innerHTML = el.peso;
			cell6.innerHTML = el.sexo;
		})
	}).catch(error => console.error(error))
}

function adicionarPessoa(){
	document.getElementById('formPessoa').style.display="block"
}

function enviarForm() {
	var form = document.getElementById('adicionarPessoa');
	var data = {};
	data['nome'] = form.nome.value 
	data['idade'] = form.idade.value;
	data['altura'] = form.altura.value;
	data['peso'] = form.peso.value; 
	data['sexo'] = form.sexo.value;
	// console.log(JSON.stringify(data));
	fetch('http://localhost:8080/AulaBanco/pessoas', {
		method: 'POST',       
		body: JSON.stringify(data)
	})
	.then((response) => {
		if (response.ok) {
			return response.json() 
		} else {
			return Promise.reject({ status: res.status, statusText: res.statusText });
		}   

	})
	.then((data) => console.log(data))
	.catch(err => console.log('Error message:', err.statusText));
}
