"use strict";

var BattleComponent = Vue.component("battle", {
	props: ["characters"],
	template: "<div class=\"container\" ref=\"container\">\n\t\t\t<div class=\"player player-1\">\n\t\t\t\t<h3>Player 1</h3>\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"character in player1Characters\">\n\t\t\t\t\t\t<img v-bind:src=\"character.image\" alt=\"rick and morty character\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"player player-2\">\n\t\t\t\t<h3>Player 2</h3>\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"character in player2Characters\">\n\t\t\t\t\t\t<img v-bind:src=\"character.image\" alt=\"rick and morty character\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<blockquote v-if=\"selectingPlayer\">\n\t\t\t\tPlayer {{selectingPlayer}}, Select A Character\n\t\t\t</blockquote>\n\t\t\t<blockquote v-else-if=\"count === 8\">\n\t\t\t\tReady To Battle?\n\t\t\t</blockquote>\n\t\t\t<section class=\"bottom\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"(character, i) in characters\" :disabled=\"character.used\" v-if=\"i < 30\" @click=\"previewCharacter = character\">\n\t\t\t\t\t\t<img v-bind:src=\"character.image\" alt=\"rick and morty character\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</section>\n\t\t\t<div v-if=\"previewCharacter\" class=\"modal\">\n\t\t\t\t<button @click=\"previewCharacter= null\" class=\"close\">X</button>\n\t\t\t\t<img v-bind:src=\"previewCharacter.image\" alt=\"rick and morty character\">\n\t\t\t\t<h4>{{previewCharacter.name}}</h4>\n\t\t\t\t<p>Gender: {{previewCharacter.gender}}</p>\n\t\t\t\t<p>Species: {{previewCharacter.species}}</p>\n\t\t\t\t<p>Status: {{previewCharacter.status}}</p>\n\t\t\t\t<p>Origin: {{previewCharacter.origin}}</p>\n\t\t\t\t<button @click=\"confirmCharacter(previewCharacter)\" id=\"confirm\">Confirm choice?</button>\n\t\t\t</div>\n\t\t</div>",
	data: function data() {
		return {
			previewCharacter: null,
			player1Characters: [],
			player2Characters: [],
			count: 1,
			selectingPlayer: 1
		};
	},
	// created: function() {

	// },
	methods: {
		isEven: function isEven(number) {
			return number % 2 === 0;
		},

		confirmCharacter: function confirmCharacter(character) {
			if (character.used) return;
			console.log('confirm character', character);
			console.log(this.previewCharacter);
			Vue.set(character, "used", true);
			this.previewCharacter = null;
			if (this.count <= 8) {
				this.addCharacter(character);
				this.playerSelect();
			}
		},

		addCharacter: function addCharacter(pickedCharacter) {
			var odd = this.isEven(this.count);
			if (odd) {
				this.player2Characters.push(pickedCharacter);
			} else if (!odd) {
				this.player1Characters.push(pickedCharacter);
			}
		},

		playerSelect: function playerSelect() {
			var odd = this.isEven(this.count);
			if (odd) {
				console.log(odd);
				this.count++;
				this.selectingPlayer = 1;
			} else if (!odd) {
				this.count++;
				this.selectingPlayer = 2;
			}
			console.log(this.count);
			// if (odd) {
			// this.playerSelect = `Player ${p1}, Choose A Character`; }
			// else {
			// this.playerSelect = `Player ${p2}, Choose A Character`; }
		}
	}
});
//# sourceMappingURL=battleComponent.js.map
