let arrayHire = []
let btnEvent = document.querySelector('#btn')
let fraseName = document.querySelector('#frase')
let nameChempion = document.querySelector('#nome')
let img = document.querySelector('#image')
let urlApi = 'http://ddragon.leagueoflegends.com/cdn/12.16.1/data/pt_BR/champion.json'

const getData =  async (api) => {
	try {
		const response = await fetch(api,
		{ 'method': 'GET' });
		return await response.json();
	} catch (error) {
		return error;
	}
};

let data = await getData(urlApi)
for(let hiro in data.data){
	arrayHire.push(data.data[hiro]);
}


btnEvent.addEventListener('click',() => {
	let namberRando = Math.floor(Math.random() * (arrayHire.length - 0) + 0)
	let championRando =arrayHire[namberRando]
	console.log(championRando)
	nameChempion.innerHTML = championRando.name
	fraseName.innerHTML = championRando.blurb
	// img.src = ` http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championRando.name}_0.jpg`
	img.setAttribute('src', ` http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championRando.name}_0.jpg`);
})

