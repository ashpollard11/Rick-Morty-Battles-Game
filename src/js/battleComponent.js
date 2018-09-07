
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
			<blockquote v-if="playerSelect">
				{{playerSelect}}
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
			playerSelect: "Player 1, Choose A Character",
			player1Characters: [],
			player2Characters: []
		}
	},
	// created: function() {
	// },
	methods: {
		confirmCharacter: function(character) {
			if (character.used) return;
			console.log('confirm character', character)
			Vue.set(character, "used", true);
			console.log(this.previewCharacter)
			this.previewCharacter = null;
			this.addCharacter(character)
		},

		addCharacter: function(pickedCharacter) {
			let p1 = 1;
			let p2 = 2;
			if (this.player1Characters.length === this.player2Characters.length) {
				this.player1Characters.push(pickedCharacter)
				this.playerSelect = "Player " + p1 + ", Choose A Character"
				console.log(this.playerSelect)
				console.log(this.player1Characters.length)
			} else if (this.player1Characters.length > this.player2Characters.length) {
				this.player2Characters.push(pickedCharacter)
				this.playerSelect = "Player " + p2 + ", Choose A Character"
				console.log(this.playerSelect)
			} 
			// else if (this.player1Characters.length + this.player2Characters.length  = 8) {
		 // 		console.log('no more!')
		 // 		this.playerSelect = "Ready To Battle?"
		 // 		console.log(this.playerSelect)
	 	// 	}
		}
	}
})








