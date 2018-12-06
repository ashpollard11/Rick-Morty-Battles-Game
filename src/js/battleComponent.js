

let BattleComponent = Vue.component("battle", {
	props: ["characters"],
	template: 
		`<div class="battle-cont container" ref="container">
			<blockquote v-if="selectingPlayer && count <=7" v-bind:style="{ color: activeColor }">
				Player {{selectingPlayer}}, 
				<span>Select A Character</span>
			</blockquote>
			<blockquote v-else-if="selectingPlayer && count === 8" class="is-active">
				<router-link to="/versus">Ready To Battle?</router-link>
			</blockquote>
			<div class="player player-1">
				<h3>Player 1</h3>
				<ul>
					<li v-for="character in player1">
						<img v-bind:src="character.image" alt="rick and morty character">
					</li>
				</ul>
			</div>
			<div class="player player-2">
				<h3>Player 2</h3>
				<ul>
					<li v-for="character in player2">
						<img v-bind:src="character.image" alt="rick and morty character">
					</li>
				</ul>
			</div>
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
		//<p>Points: {{previewCharacter.points}}</p>
	data: function() {
		return {
			previewCharacter: null,
			player1: [],
			player2: [],
			selectingPlayer: 1,
			activeColor: '#ff0059'
		}
	},
	computed: {
		count: function() {
			return this.player1.length + this.player2.length
		}
	},
	// created: function() {
		
	// },
	methods: {

		confirmCharacter: function(character) {
			if (character.used) return;
			console.log('confirm character', character)
			console.log(this.previewCharacter)
			Vue.set(character, "used", true);
			this.previewCharacter = null;
			if (this.count <= 7) {
				this.addCharacter(character)
				this.playerSelect()
			}
			if (this.count === 8) {
				this.selectionComplete()
				this.$emit('playerdatafrombattle', this.player1, this.player2)
			}
		},

		addCharacter: function(pickedCharacter) {
			if ( this.count % 2 ) {
				this.player2.push(pickedCharacter)
			} else {
				this.player1.push(pickedCharacter)
			}
		},

		playerSelect: function() {
			if (this.count % 2) {
				this.selectingPlayer = 2
				this.activeColor = "#009cff"
			} else {
				this.selectingPlayer = 1
				this.activeColor = "#ff0059"
			}
			console.log(this.count);
			
		},

		selectionComplete: function() {
			console.log("player selection is complete: ", this.player1, this.player2)
			
		}
	}
})








