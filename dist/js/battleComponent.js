"use strict";

var BattleComponent = Vue.component("battle", {
	props: ["characters"],
	template: "<div class=\"container\" ref=\"container\">\n\t\t\t<div class=\"player player-1\">\n\t\t\t\t<h3>Player 1</h3>\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"character in player1Characters\">\n\t\t\t\t\t\t<img v-bind:src=\"character.image\" alt=\"rick and morty character\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"player player-2\">\n\t\t\t\t<h3>Player 2</h3>\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"character in player2Characters\">\n\t\t\t\t\t\t<img v-bind:src=\"character.image\" alt=\"rick and morty character\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<blockquote v-if=\"playerSelect\">\n\t\t\t\t{{playerSelect}}\n\t\t\t</blockquote>\n\t\t\t<section class=\"bottom\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"(character, i) in characters\" :disabled=\"character.used\" v-if=\"i < 30\" @click=\"previewCharacter = character\">\n\t\t\t\t\t\t<img v-bind:src=\"character.image\" alt=\"rick and morty character\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</section>\n\t\t\t<div v-if=\"previewCharacter\" class=\"modal\">\n\t\t\t\t<button @click=\"previewCharacter= null\" class=\"close\">X</button>\n\t\t\t\t<img v-bind:src=\"previewCharacter.image\" alt=\"rick and morty character\">\n\t\t\t\t<h4>{{previewCharacter.name}}</h4>\n\t\t\t\t<p>Gender: {{previewCharacter.gender}}</p>\n\t\t\t\t<p>Species: {{previewCharacter.species}}</p>\n\t\t\t\t<p>Status: {{previewCharacter.status}}</p>\n\t\t\t\t<p>Origin: {{previewCharacter.origin}}</p>\n\t\t\t\t<button @click=\"confirmCharacter(previewCharacter)\" id=\"confirm\">Confirm choice?</button>\n\t\t\t</div>\n\t\t</div>",
	data: function data() {
		return {
			previewCharacter: null,
			playerSelect: "Player 1, Choose A Character",
			player1Characters: [],
			player2Characters: []
		};
	},
	// created: function() {
	// },
	methods: {
		confirmCharacter: function confirmCharacter(character) {
			if (character.used) return;
			console.log('confirm character', character);
			Vue.set(character, "used", true);
			console.log(this.previewCharacter);
			this.previewCharacter = null;
			this.addCharacter(character);
		},

		addCharacter: function addCharacter(pickedCharacter) {
			var p1 = 1;
			var p2 = 2;
			if (this.player1Characters.length === this.player2Characters.length) {
				this.player1Characters.push(pickedCharacter);
				this.playerSelect = "Player " + p1 + ", Choose A Character";
				console.log(this.playerSelect);
				console.log(this.player1Characters.length);
			} else if (this.player1Characters.length > this.player2Characters.length) {
				this.player2Characters.push(pickedCharacter);
				this.playerSelect = "Player " + p2 + ", Choose A Character";
				console.log(this.playerSelect);
			}
			// else if (this.player1Characters.length + this.player2Characters.length  = 8) {
			// 		console.log('no more!')
			// 		this.playerSelect = "Ready To Battle?"
			// 		console.log(this.playerSelect)
			// 	}
		}
	}
});
//# sourceMappingURL=battleComponent.js.map
