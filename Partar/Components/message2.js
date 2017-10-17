Vue.component("message", {
	props: ["title"],

	data: function() {
		return {
			isVisible: true
		};
	},

	template: `
		<article  v-show="isVisible">
	  		<div class="notification is-info">
	    		<p>{{ title }}</p>
	    		<button @click="removeMessage" class="delete" aria-label="delete"></button>
	    		<slot></slot>
	  		</div>
	  	</article>
	`,

	methods: {
		removeMessage: function() {
			this.isVisible = false;
		}

	}
});

var app = new Vue({
	el: "#app"
})