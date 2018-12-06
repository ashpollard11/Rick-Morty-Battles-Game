"use strict";

var BattleComponent = Vue.component("battle", {
	props: ["characters"],
	template: "<div class=\"battle-cont container\" ref=\"container\">\n\t\t\t<blockquote v-if=\"selectingPlayer && count <=7\" v-bind:style=\"{ color: activeColor }\">\n\t\t\t\tPlayer {{selectingPlayer}}, \n\t\t\t\t<span>Select A Character</span>\n\t\t\t</blockquote>\n\t\t\t<blockquote v-else-if=\"selectingPlayer && count === 8\" class=\"is-active\">\n\t\t\t\t<router-link to=\"/versus\">Ready To Battle?</router-link>\n\t\t\t</blockquote>\n\t\t\t<div class=\"player player-1\">\n\t\t\t\t<h3>Player 1</h3>\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"character in player1\">\n\t\t\t\t\t\t<img v-bind:src=\"character.image\" alt=\"rick and morty character\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"player player-2\">\n\t\t\t\t<h3>Player 2</h3>\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"character in player2\">\n\t\t\t\t\t\t<img v-bind:src=\"character.image\" alt=\"rick and morty character\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<section class=\"bottom\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"(character, i) in characters\" :disabled=\"character.used\" v-if=\"i < 30\" @click=\"previewCharacter = character\">\n\t\t\t\t\t\t<img v-bind:src=\"character.image\" alt=\"rick and morty character\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</section>\n\t\t\t<div v-if=\"previewCharacter\" class=\"modal\">\n\t\t\t\t<button @click=\"previewCharacter= null\" class=\"close\">X</button>\n\t\t\t\t<img v-bind:src=\"previewCharacter.image\" alt=\"rick and morty character\">\n\t\t\t\t<h4>{{previewCharacter.name}}</h4>\n\t\t\t\t<p>Gender: {{previewCharacter.gender}}</p>\n\t\t\t\t<p>Species: {{previewCharacter.species}}</p>\n\t\t\t\t<p>Status: {{previewCharacter.status}}</p>\n\t\t\t\t<p>Origin: {{previewCharacter.origin}}</p>\n\t\t\t\t\n\t\t\t\t<button @click=\"confirmCharacter(previewCharacter)\" id=\"confirm\">Confirm choice?</button>\n\t\t\t</div>\n\t\t</div>",
	//<p>Points: {{previewCharacter.points}}</p>
	data: function data() {
		return {
			previewCharacter: null,
			player1: [],
			player2: [],
			selectingPlayer: 1,
			activeColor: '#ff0059'
		};
	},
	computed: {
		count: function count() {
			return this.player1.length + this.player2.length;
		}
	},
	// created: function() {

	// },
	methods: {

		confirmCharacter: function confirmCharacter(character) {
			if (character.used) return;
			console.log('confirm character', character);
			console.log(this.previewCharacter);
			Vue.set(character, "used", true);
			this.previewCharacter = null;
			if (this.count <= 7) {
				this.addCharacter(character);
				this.playerSelect();
			}
			if (this.count === 8) {
				this.selectionComplete();
				this.$emit('playerdatafrombattle', this.player1, this.player2);
			}
		},

		addCharacter: function addCharacter(pickedCharacter) {
			if (this.count % 2) {
				this.player2.push(pickedCharacter);
			} else {
				this.player1.push(pickedCharacter);
			}
		},

		playerSelect: function playerSelect() {
			if (this.count % 2) {
				this.selectingPlayer = 2;
				this.activeColor = "#009cff";
			} else {
				this.selectingPlayer = 1;
				this.activeColor = "#ff0059";
			}
			console.log(this.count);
		},

		selectionComplete: function selectionComplete() {
			console.log("player selection is complete: ", this.player1, this.player2);
		}
	}
});
//# sourceMappingURL=battleComponent.js.map
