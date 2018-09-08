'use strict';

console.log('Bush did 9/11, jet fuel can\'t melt steel beams');

var router = new VueRouter({
	routes: [{ path: '/', component: HomeComponent }, { path: '/battle', component: BattleComponent }, { path: '/versus', component: VersusComponent }] // routes  short for `routes: routes`
});

var url = 'https://rickandmortyapi.com/api/character/';

var app = new Vue({
	el: '#app',
	router: router,
	data: {
		characters: [],
		player1Characters: '',
		player2Characters: ''
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
	created: function created() {
		this.getCharacters();
	},
	methods: {
		getCharacters: function getCharacters() {
			var _this = this;

			var ids = "";

			var counter = 35;
			while (counter--) {
				ids += Math.floor(Math.random() * 493) + ",";
			}

			axios.get(url + ids, {
				count: 493,
				pages: 20,
				next: "https://rickandmortyapi.com/api/character/?page=2",
				prev: ""
			}).then(function (réponse) {
				console.log('alors: ', réponse);
				réponse.data.forEach(function (arr) {
					var arrObj = {
						gender: arr.gender,
						id: arr.id,
						image: arr.image,
						name: arr.name,
						origin: arr.origin.name,
						species: arr.species,
						status: arr.status,
						type: arr.type
					};
					_this.characters.push(arrObj);
				});
				console.log(_this.characters);
			}).catch(function (erreur) {
				console.warn('oh non: ', erreur);
			});
		},
		recievePlayerDataFromBattle: function recievePlayerDataFromBattle(newp1, newp2) {
			console.log("players complete: ", newp1, newp2);
			this.player1Characters = newp1;
			this.player2Characters = newp2;
		}
	}
});
//# sourceMappingURL=main.js.map
