'use strict';

console.log('Bush did 9/11, jet fuel can\'t melt steel beams');

// let audio = document.querySelector("audio")
// audio.volume = 0.05


var router = new VueRouter({
	routes: [{ path: '/', component: HomeComponent }, { path: '/battle', component: BattleComponent }, { path: '/versus', component: VersusComponent }] // routes  short for `routes: routes`
});

var url = 'https://rickandmortyapi.com/api/character/';

var app = new Vue({
	el: '#app',
	router: router,
	data: {
		characters: [],
		player1characters: '',
		player2characters: ''
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
					var newCharacter = {
						gender: arr.gender,
						id: arr.id,
						image: arr.image,
						name: arr.name,
						origin: arr.origin.name,
						species: arr.species,
						status: arr.status,
						type: arr.type,
						points: 0

						//basic point logic

						//gender
					};if (newCharacter.gender === 'Male' || newCharacter.gender === 'Female' || newCharacter.gender === 'unknown') newCharacter.points += 10;
					if (newCharacter.gender === 'Genderless') newCharacter.points += 15;
					//status
					if (newCharacter.status === 'Dead') newCharacter.points += 15;
					if (newCharacter.status === 'Alive') newCharacter.points += 20;
					if (newCharacter.status === 'unknown') newCharacter.points += 18;
					//species
					if (newCharacter.species === 'Human' || newCharacter.species === 'Humanoid' || newCharacter.species === 'Animal' || newCharacter.species === 'Poopybutthole') newCharacter.points += 20;
					if (newCharacter.species === 'Alien' || newCharacter.species === 'Robot' || newCharacter.species === 'Mytholog') newCharacter.points += 25;
					if (newCharacter.species === 'Cronenberg') newCharacter.points += 18;
					//origin
					if (newCharacter.origin === 'unknown' || newCharacter.origin === 'Earth (C-137)' || newCharacter.origin === 'Earth (Replacement Dimension)' || newCharacter.origin === 'Earth (C-500A)' || newCharacter.origin === 'Earth (D716)' || newCharacter.origin === 'Earth (Giant Telepathic Spiders Dimension)' || newCharacter.origin === 'Resort Planet' || newCharacter.origin === "Snuffles' Dream" || newCharacter.origin === "Earth (J19ζ7)") newCharacter.points += 20;
					if (newCharacter.origin === 'Hamster in Butt World' || newCharacter.origin === 'Árboles Mentirosos' || newCharacter.origin === 'Earth (D716-B)' || newCharacter.origin === 'Earth (J-22)' || newCharacter.origin === 'Trunk World') newCharacter.points += 19;
					if (newCharacter.origin === 'Earth (D716-C)' || newCharacter.origin === 'Hideout Planet' || newCharacter.origin === 'Glaagablaaga' || newCharacter.origin === 'Post-Apocalyptic Earth' || newCharacter.origin === "Zeep Xanflorp's Miniverse") newCharacter.points += 18;
					if (newCharacter.origin === 'Pluto' || newCharacter.origin === 'Venzenulon 7' || newCharacter.origin === 'Abadango' || newCharacter.origin === 'Anatomy Park') newCharacter.points += 15;
					if (newCharacter.origin === 'Gazorpazorp' || newCharacter.origin === 'Interdimensional Cable' || newCharacter.origin === 'Purge Planet') newCharacter.points += 30;
					if (newCharacter.origin === 'Bird World') newCharacter.points += 50;
					if (newCharacter.origin === 'Alphabetrium' || newCharacter.origin === "Mr. Goldenfold's dream") newCharacter.points += 100;
					if (newCharacter.origin === 'Krootabulon') newCharacter.points += 500;
					if (newCharacter.origin === 'Signus 5 Expanse') newCharacter.points += 1000;

					// if (newCharacter.origin === 'Krootabulon') newCharacter.points += 40;
					// if (newCharacter.origin === 'Krootabulon') newCharacter.points += 40;
					//name
					if (newCharacter.name === 'Calypso') newCharacter.points += 50;
					if (newCharacter.name === 'Diablo Verde') newCharacter.points += 50;
					if (newCharacter.name === 'Doom-Nomitron') newCharacter.points += 50;
					if (newCharacter.name === 'Two Brothers') newCharacter.points += 80;
					if (newCharacter.name === 'Jan Michael Vincent') newCharacter.points += 80;
					if (newCharacter.name === 'Keara') newCharacter.points += 500;
					if (newCharacter.name === 'Supernova') newCharacter.points += 500;
					if (newCharacter.name.includes('Hepatitis')) newCharacter.points += 70;
					if (newCharacter.name.includes('Gonorrhea')) newCharacter.points += 70;
					if (newCharacter.name.includes('Tammy')) newCharacter.points += 150;
					if (newCharacter.name.includes('Snuffles')) newCharacter.points += 300;
					if (newCharacter.name.includes('Smith')) newCharacter.points += 100;
					if (newCharacter.name.includes('Sanchez')) newCharacter.points += 100;
					if (newCharacter.name.includes('Morty')) newCharacter.points += 100;
					if (newCharacter.name.includes('Evil Morty')) newCharacter.points += 400;
					if (newCharacter.name.includes('Rick')) newCharacter.points += 400;
					if (newCharacter.name.includes('Beth')) newCharacter.points += 400;
					if (newCharacter.name.includes('Summer')) newCharacter.points += 200;
					if (newCharacter.name.includes('Jerry')) newCharacter.points -= 400;
					if (newCharacter.name.includes('Ideal Jerry')) newCharacter.points += 400;
					if (newCharacter.name.includes('Armothy')) newCharacter.points += 400;
					if (newCharacter.name.includes('Armothy')) newCharacter.points += 200;
					if (newCharacter.name.includes('Krombopulos Michael')) newCharacter.points += 400;
					if (newCharacter.name.includes('Fart')) newCharacter.points += 600;
					if (newCharacter.name.includes('Scary Terry')) newCharacter.points += 400;

					_this.characters.push(newCharacter);
				});
				console.log(_this.characters);
			}).catch(function (erreur) {
				console.warn('oh non: ', erreur);
			});
		},
		recievePlayerDataFromBattle: function recievePlayerDataFromBattle(newp1, newp2) {
			console.log("players complete: ", newp1, newp2);
			this.player1characters = newp1;
			this.player2characters = newp2;
		}
	}
});
//# sourceMappingURL=main.js.map
