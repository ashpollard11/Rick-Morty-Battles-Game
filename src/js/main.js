console.log(`Bush did 9/11, jet fuel can't melt steel beams`)

const router = new VueRouter({
  	routes: [
		{ path: '/', component: HomeComponent },
		{ path: '/battle', component: BattleComponent }
	]	// routes  short for `routes: routes`
})

const url = 'https://rickandmortyapi.com/api/character/';



var app = new Vue({
	el: '#app' ,
	router: router,
	data: {
		characters: []
	},
	// watch: {
	// 	hashtag: function() {
	// 		console.log("SACRÉ BLEU!")
	// 		this.doTwitterSearch()
	// 	}
	// },
	// computed: {
	// 	full: function() {
	// 		return this.hashtag
	// 	}
	// }
	created: function() {
		this.getCharacters()
	},
	methods: {
		getCharacters: function() {

			let ids = "";

			var counter = 35;
			while (counter--) {
				ids += Math.floor(Math.random()*493) + ",";
			}
			
			axios
				.get(url + ids, {
					count: 493,
					pages: 20,
					next: "https://rickandmortyapi.com/api/character/?page=2",
					prev: ""
				})
				.then((réponse) => {
					console.log('alors: ', réponse)
					réponse.data.forEach((arr) => {
						let arrObj = {
							gender: arr.gender,
							id: arr.id,
							image: arr.image,
							name: arr.name,
							origin: arr.origin.name,
							species: arr.species,
							status: arr.status,
							type: arr.type
						}
						this.characters.push(arrObj)
					}) 
					console.log(this.characters)
				})
				.catch((erreur) => {
					console.warn('oh non: ', erreur)
				})
				
		}
	}
})