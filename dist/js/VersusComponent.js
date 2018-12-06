"use strict";

var VersusComponent = Vue.component("versus", {
	props: ["player1characters", "player2characters"],
	template: "<div class=\"versus-cont container\" ref=\"container\">\n\t\t\t<section class=\"versus-inner-cont\">\n\t\t\t\t<h1 class=\"winner\"> {{ victor }} </h1>\n\t\t\t\t<a v-bind:href=\"homeLink\" class=\"go\">Play Again?</a>\n\t\t\t\t<div class=\"player player-1\">\n\t\t\t\t\t<h3>Player 1</h3>\n\t\t\t\t\t<ul ref=\"p1CharacterList\">\n\t\t\t\t\t\t<li v-for=\"(character, index) in player1characters\">\n\t\t\t\t\t\t\t<img v-bind:src=\"character.image\" alt=\"rick and morty character\" v-if=\"winnerArray1.includes(character)\" class=\"winnerArray1\">\n\t\t\t\t\t\t\t<img v-bind:src=\"character.image\" alt=\"rick and morty character\" v-else ref=\"loser\" class=\"loser\">\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"player player-2\">\n\t\t\t\t\t<h3>Player 2</h3>\n\t\t\t\t\t<ul ref=\"p2CharacterList\">\n\t\t\t\t\t\t<li v-for=\"(character, index) in player2characters\">\n\t\t\t\t\t\t\t<img v-bind:src=\"character.image\" alt=\"rick and morty character\" v-if=\"winnerArray2.includes(character)\" class=\"winnerArray1\">\n\t\t\t\t\t\t\t<img v-bind:src=\"character.image\" alt=\"rick and morty character\" v-else ref=\"loser\" class=\"loser\">\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</div>",
	data: function data() {
		return {
			player1Chars: this.player1characters,
			player2Chars: this.player2characters,
			winnerArray1: [],
			winnerArray2: [],
			victor: "",
			homeLink: "index.html"
		};
	},
	mounted: function mounted() {
		var _this = this;

		this.battleAlgorithm(this.player1Chars[0], this.player2Chars[0]);
		this.battleAlgorithm(this.player1Chars[1], this.player2Chars[1]);
		this.battleAlgorithm(this.player1Chars[2], this.player2Chars[2]);
		this.battleAlgorithm(this.player1Chars[3], this.player2Chars[3]);
		this.winnerDetermined();

		TweenMax.to(this.$refs.p1CharacterList.children[0], 0.5, { x: "75px", ease: Back.easeIn, delay: 0 });
		TweenMax.to(this.$refs.p2CharacterList.children[0], 0.5, { x: "-75px", ease: Back.easeIn, delay: 0 });
		TweenMax.to(this.$refs.p1CharacterList.children[1], 0.5, { x: "75px", ease: Back.easeIn, delay: 1 });
		TweenMax.to(this.$refs.p2CharacterList.children[1], 0.5, { x: "-75px", ease: Back.easeIn, delay: 1 });
		TweenMax.to(this.$refs.p1CharacterList.children[2], 0.5, { x: "75px", ease: Back.easeIn, delay: 2 });
		TweenMax.to(this.$refs.p2CharacterList.children[2], 0.5, { x: "-75px", ease: Back.easeIn, delay: 2 });
		TweenMax.to(this.$refs.p1CharacterList.children[3], 0.5, { x: "75px", ease: Back.easeIn, delay: 3 });
		TweenMax.to(this.$refs.p2CharacterList.children[3], 0.5, { x: "-75px", ease: Back.easeIn, delay: 3 });

		setTimeout(function () {

			try {
				TweenMax.to(_this.$refs.p1CharacterList.children[0].querySelector('.loser'), 0.25, { opacity: 0, delay: 0 });
			} catch (e) {}
			try {
				TweenMax.to(_this.$refs.p2CharacterList.children[0].querySelector('.loser'), 0.25, { opacity: 0, delay: 0 });
			} catch (e) {}
			try {
				TweenMax.to(_this.$refs.p1CharacterList.children[1].querySelector('.loser'), 0.25, { opacity: 0, delay: 1 });
			} catch (e) {}
			try {
				TweenMax.to(_this.$refs.p2CharacterList.children[1].querySelector('.loser'), 0.25, { opacity: 0, delay: 1 });
			} catch (e) {}
			try {
				TweenMax.to(_this.$refs.p1CharacterList.children[2].querySelector('.loser'), 0.25, { opacity: 0, delay: 2 });
			} catch (e) {}
			try {
				TweenMax.to(_this.$refs.p2CharacterList.children[2].querySelector('.loser'), 0.25, { opacity: 0, delay: 2 });
			} catch (e) {}
			try {
				TweenMax.to(_this.$refs.p1CharacterList.children[3].querySelector('.loser'), 0.25, { opacity: 0, delay: 3 });
			} catch (e) {}
			try {
				TweenMax.to(_this.$refs.p2CharacterList.children[3].querySelector('.loser'), 0.25, { opacity: 0, delay: 3 });
			} catch (e) {}
		}, 250);
	},
	methods: {
		battleAlgorithm: function battleAlgorithm(character1, character2) {
			console.log(character1, character2);

			//character 1

			if (character1.name.includes("Rick") && character1.origin === "Earth (C-137)") {
				character1.points += 1000;
			}
			if (character1.name.includes("Rick") && character1.origin === "Earth (C-137)" && character2.name.includes("Evil Morty")) {
				character2.points += 5000;
			}
			if (character1.name.includes("Rick") && character2.name.includes("Morty")) {
				character1.points += 500;
			}
			if (character1.name.includes("Rick") && character2.name.includes("Evil Morty")) {
				character2.points += 500;
			}
			if (character1.name.includes("Toxic Rick") && character2.name.includes("Morty")) {
				character2.points += 500;
			}

			if (character1.name.includes("Summer") && character2.name.includes("Morty")) {
				character1.points += 500;
			}
			if (character1.name.includes("Beth") && character2.name.includes("Jerry")) {
				character1.points += 500;
			}

			if (character1.name.includes("Morty") && character2.name.includes("Fart")) {
				character1.points += 5000;
			}

			//character 2

			if (character2.name.includes("Rick") && character2.origin === "Earth (C-137)") {
				character2.points += 1000;
			}
			if (character2.name.includes("Rick") && character2.origin === "Earth (C-137)" && character1.name.includes("Evil Morty")) {
				character1.points += 5000;
			}
			if (character2.name.includes("Rick") && character1.name.includes("Morty")) {
				character2.points += 500;
			}
			if (character2.name.includes("Rick") && character1.name.includes("Evil Morty")) {
				character1.points += 500;
			}
			if (character2.name.includes("Toxic Rick") && character1.name.includes("Morty")) {
				character2.points += 500;
			}

			if (character2.name.includes("Summer") && character1.name.includes("Morty")) {
				character2.points += 500;
			}
			if (character2.name.includes("Beth") && character1.name.includes("Jerry")) {
				character2.points += 500;
			}

			if (character2.name.includes("Morty") && character1.name.includes("Fart")) {
				character2.points += 5000;
			}

			// let test = 12;
			// let answer = (test > 30) ? "high" : "low"
			// console.log(answer)

			console.log("points: ", "character1 =", character1.points, "character2 =", character2.points);

			if (character1.points > character2.points) {
				this.winnerArray1.push(character1);
			}

			if (character2.points > character1.points) {
				this.winnerArray2.push(character2);
			}

			if (character1.points === character2.points) {
				// let arr = [character1, character2]
				// let randomChar = arr[Math.floor(Math.random()*arr.length)]
				if (Math.random() > 0.5) {
					this.winnerArray1.push(character1);
				} else {
					this.winnerArray2.push(character2);
				}
			}
		},

		winnerDetermined: function winnerDetermined() {
			var char1Winners = this.winnerArray1.length;
			console.log("Player 1 Winners: ", char1Winners);
			var char2Winners = this.winnerArray2.length;
			console.log("Player 2 Winners: ", char2Winners);

			if (char1Winners > char2Winners) {
				this.victor = "Player 1 Wins!";
			}

			if (char2Winners > char1Winners) {
				this.victor = "Player 2 Wins!";
			}

			if (char2Winners === char1Winners) {
				this.victor = "It's A Tie!";
			}
		}
	}

});
//# sourceMappingURL=versusComponent.js.map
