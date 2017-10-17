Vue.component("message", {
	props: ['title'],

	data: function() {
		return {
			isVisible: true
		};
	},

	template: `
		<article class="message" v-show="isVisible">
	  		<div class="message-header">
	    		<p>{{ title }}</p>
	    		<button @click="removeMessage" class="delete" aria-label="delete"></button>
	  		</div>
	  		<div class="message-body">
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
	el: '#app'
})