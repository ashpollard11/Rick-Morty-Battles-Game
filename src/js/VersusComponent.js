
let VersusComponent = Vue.component("versus", {
	props: ["player1characters", "player2characters"],
	template: 
		`<div class="container" ref="container">
			<div class="player player-1">
				<h3>Player 1</h3>
				<ul>
					<li v-for="character in player1characters">
						<img v-bind:src="character.image" alt="rick and morty character">
					</li>
				</ul>
			</div>
			<div class="player player-2">
				<h3>Player 2</h3>
				<ul>
					<li v-for="character in player2characters">
						<img v-bind:src="character.image" alt="rick and morty character">
					</li>
				</ul>
			</div>
		</div>`
	 
})