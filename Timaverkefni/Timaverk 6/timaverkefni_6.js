Vue.component("modal",  {
	props: ['title','subtitle','profileimage','mainimage'],
	data: function() {
		return{
			isVisible: false
		};
	},
	template: 
	`<div>
		<div v-show="isVisible" class="modal is-active" >
		  <div class="modal-background" @click="hideMessage"></div>
		  <div class="modal-content">
		    <!-- Any other Bulma elements you want -->
	<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img v-bind:src="mainimage" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img v-bind:src="profileimage" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{title}}</p>
        <p class="subtitle is-6">{{subtitle}}</p>
      </div>
    </div>

    <div class="content">
      <slot></slot><a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
		  </div>
		  <button class="modal-close is-large" aria-label="close" @click="hideMessage"></button>
		</div>
		<button @click="showMessage" class="button is-primary">Button</button>
	</div>
	`,

	methods: {
		showMessage: function() {
			this.isVisible = true
		},
		hideMessage: function() {
			this.isVisible = false
		}
	}
});




var app = new Vue({
	el: '#app',
})