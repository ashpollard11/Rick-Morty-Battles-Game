
let BattleComponent = Vue.component("battle", {
	props: ["characters"],
	template: 
		`<div class="container" ref="container">
			<div class="player player-1">
				<h3>Player 1</h3>
				<ul>
					<li v-for="character in player1Characters">
						<img v-bind:src="character.image" alt="rick and morty character">
					</li>
				</ul>
			</div>
			<div class="player player-2">
				<h3>Player 2</h3>
				<ul>
					<li v-for="character in player2Characters">
						<img v-bind:src="character.image" alt="rick and morty character">
					</li>
				</ul>
			</div>
			<blockquote v-if="selectingPlayer">
				Player {{selectingPlayer}}, Select A Character
			</blockquote>
			<blockquote v-else-if="count === 8">
				Ready To Battle?
			</blockquote>
			<section class="bottom">
				<ul>
					<li v-for="(character, i) in characters" :disabled="character.used" v-if="i < 30" @click="previewCharacter = character">
						<img v-bind:src="character.image" alt="rick and morty character">
					</li>
				</ul>
			</section>
			<div v-if="previewCharacter" class="modal">
				<button @click="previewCharacter= null" class="close">X</button>
				<img v-bind:src="previewCharacter.image" alt="rick and morty character">
				<h4>{{previewCharacter.name}}</h4>
				<p>Gender: {{previewCharacter.gender}}</p>
				<p>Species: {{previewCharacter.species}}</p>
				<p>Status: {{previewCharacter.status}}</p>
				<p>Origin: {{previewCharacter.origin}}</p>
				<button @click="confirmCharacter(previewCharacter)" id="confirm">Confirm choice?</button>
			</div>
		</div>`,
	data: function() {
		return {
			previewCharacter: null,
			player1Characters: [],
			player2Characters: [],
			count: 1,
			selectingPlayer: 1
		}
	},
	// created: function() {
		
	// },
	methods: {
		isEven: function(number) {
		     return number % 2 === 0;
		},

		confirmCharacter: function(character) {
			if (character.used) return;
			console.log('confirm character', character)
			console.log(this.previewCharacter)
			Vue.set(character, "used", true);
			this.previewCharacter = null;
			if (this.count <= 8) {
				this.addCharacter(character)
				this.playerSelect()
			}
		},

		addCharacter: function(pickedCharacter) {
			let odd = this.isEven(this.count);
			if (odd) {
				this.player2Characters.push(pickedCharacter)
			} else if (!odd) {
				this.player1Characters.push(pickedCharacter)
			}
		},

		playerSelect: function() {
			let odd = this.isEven(this.count);
			if (odd) {
				console.log(odd)
				this.count++;
				this.selectingPlayer = 1
			} else if (!odd) {
				this.count++;
				this.selectingPlayer = 2
			}
			console.log(this.count);
			// if (odd) {
			// this.playerSelect = `Player ${p1}, Choose A Character`; }
			// else {
			// this.playerSelect = `Player ${p2}, Choose A Character`; }
			
		}
	}
})








