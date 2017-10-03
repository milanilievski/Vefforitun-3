Vue.component('task-list', {
	template: `
		<ul>
			<task v-for="task in tasks">
				{{ task.title }}
			</task>
		</ul>
	`,



	data: function() {
		return {
			tasks: [
				{title: 'Fara í búðina', complete: true },
				{title: 'Skoða mailið', complete: false },
				{title: 'Klára verkefni', complete: true },
				{title: 'Fara í skólann', complete: false }
			]
		};
	}
}); 

Vue.component('task', {
	template: '<li><slot></slot></li>'
});

var app = new Vue({
	el: "#app"
})

