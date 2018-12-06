
let HomeComponent = Vue.component("home", {
	template: 
		`<div class="home-cont container" ref="container">
			<div class="overlay"></div>
			<section>
				<h1>Rick &amp; Morty Team Battles</h1>
				<h2>Pick a team of 4 characters and put them to the test!</h2>
				<h2>Watch the teams face off!</h2>

				<router-link to="/battle" class="go">GO!</router-link>
			</section>
		</div>`,
})







