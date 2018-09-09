"use strict";

var VersusComponent = Vue.component("versus", {
	props: ["player1characters", "player2characters"],
	template: "<div class=\"container\" ref=\"container\">\n\t\t\t<div class=\"player player-1\">\n\t\t\t\t<h3>Player 1</h3>\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"character in player1characters\">\n\t\t\t\t\t\t<img v-bind:src=\"character.image\" alt=\"rick and morty character\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"player player-2\">\n\t\t\t\t<h3>Player 2</h3>\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"character in player2characters\">\n\t\t\t\t\t\t<img v-bind:src=\"character.image\" alt=\"rick and morty character\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>"

});
//# sourceMappingURL=VersusComponent.js.map
