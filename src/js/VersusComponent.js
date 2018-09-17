

let VersusComponent = Vue.component("versus", {
	props: ["player1characters", "player2characters"],
	template: 
		`<div class="versus-cont container" ref="container">
			<h1 class="winner"> {{ victor }} </h1>
			<a v-bind:href="homeLink" class="go">Play Again?</a>
			<div class="player player-1">
				<h3>Player 1</h3>
				<ul>
					<li v-for="character in player1characters">
						<img v-bind:src="character.image" alt="rick and morty character" v-if="winnerArray1.includes(character)" class="winnerArray1">
						<img v-bind:src="character.image" alt="rick and morty character" v-else>
					</li>
				</ul>
			</div>
			<div class="player player-2">
				<h3>Player 2</h3>
				<ul>
					<li v-for="character in player2characters">
						<img v-bind:src="character.image" alt="rick and morty character" v-if="winnerArray1.includes(character)" class="winnerArray1">
						<img v-bind:src="character.image" alt="rick and morty character" v-else>
					</li>
				</ul>
			</div>
		</div>`,
	data: function() {
		return {
			player1Chars: this.player1characters,
			player2Chars: this.player2characters,
			winnerArray1: [],
			victor: "",
			homeLink: "index.html"
		}
	},
	mounted: function() {
		this.battleAlgorithm(this.player1Chars[0], this.player2Chars[0])
		this.battleAlgorithm(this.player1Chars[1], this.player2Chars[1])
		this.battleAlgorithm(this.player1Chars[2], this.player2Chars[2])
		this.battleAlgorithm(this.player1Chars[3], this.player2Chars[3])
		this.winnerDetermined()

	},
	methods: {
		battleAlgorithm: function(character1, character2) {
			console.log(character1, character2)

			//character 1

			if (character1.name.includes("Rick") && character1.origin === "Earth (C-137)") {
				character1.points += 1000
			}
			if (character1.name.includes("Rick") && character1.origin === "Earth (C-137)" && character2.name.includes("Evil Morty")) {
				character2.points += 5000
			}
			if (character1.name.includes("Rick") && character2.name.includes("Morty")) {
				character1.points += 500
			}
			if (character1.name.includes("Rick") && character2.name.includes("Evil Morty")) {
				character2.points += 500
			}
			if (character1.name.includes("Toxic Rick") && character2.name.includes("Morty")) {
			 	character2.points += 500
			}

			if (character1.name.includes("Summer") && character2.name.includes("Morty")) {
			 	character1.points += 500
			}
			if (character1.name.includes("Beth") && character2.name.includes("Jerry")) {
			 	character1.points += 500
			}

			if (character1.name.includes("Morty") && character2.name.includes("Fart")) {
			 	character1.points += 5000
			}


			//character 2

			if (character2.name.includes("Rick") && character2.origin === "Earth (C-137)") {
				character2.points += 1000
			}
			if (character2.name.includes("Rick") && character2.origin === "Earth (C-137)" && character1.name.includes("Evil Morty")) {
				character1.points += 5000
			}
			if (character2.name.includes("Rick") && character1.name.includes("Morty")) {
				character2.points += 500
			}
			if (character2.name.includes("Rick") && character1.name.includes("Evil Morty")) {
				character1.points += 500
			}
			if (character2.name.includes("Toxic Rick") && character1.name.includes("Morty")) {
			 	character2.points += 500
			}

			if (character2.name.includes("Summer") && character1.name.includes("Morty")) {
			 	character2.points += 500
			}
			if (character2.name.includes("Beth") && character1.name.includes("Jerry")) {
			 	character2.points += 500
			}

			if (character2.name.includes("Morty") && character1.name.includes("Fart")) {
			 	character2.points += 5000
			}


			// let test = 12;
			// let answer = (test > 30) ? "high" : "low"
			// console.log(answer)

			console.log("points: ", "character1 =", character1.points, "character2 =", character2.points)

			if (character1.points > character2.points) {
				this.winnerArray1.push(character1)
			}

			if (character2.points > character1.points) {
				this.winnerArray1.push(character2)
			}

			if (character1.points === character2.points) {
				let arr = [character1, character2]
				let randomChar = arr[Math.floor(Math.random()*arr.length)]
				this.winnerArray1.push(randomChar)
			}
		},

		winnerDetermined: function() {
			let char1Winners = this.winnerArray1.filter(char => this.player1Chars.includes(char)).length
			console.log("Player 1 Winners: ", char1Winners)
			let char2Winners = this.winnerArray1.filter(char => this.player2Chars.includes(char)).length
			console.log("Player 2 Winners: ", char2Winners)

			if (char1Winners > char2Winners) {
				this.victor = "Player 1 Wins!"
			}

			if (char2Winners > char1Winners) {
				this.victor = "Player 2 Wins!"
			}

			if (char2Winners === char1Winners) {
				let randomWinner = this.winnerArray1[Math.floor(Math.random()*this.winnerArray1.length)]
				this.winnerArray1 = [randomWinner]

				char2Winners = this.winnerArray1.filter(char => this.player2Chars.includes(char)).length
				console.log("Player 1 Winners: ", char1Winners)
				char2Winners = this.winnerArray1.filter(char => this.player2Chars.includes(char)).length
				console.log("Player 2 Winners: ", char2Winners)

				if (char2Winners) {
					this.victor = "A Fight To The Death! Player 2 Wins!"
				}
				
				if (char1Winners) {
					this.victor = "A Fight To The Death! Player 1 Wins!"
				} 
			}
		}

	}
	 
})



