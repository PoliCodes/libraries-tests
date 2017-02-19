var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!',
		coisas: ["agua", "suco"]
	},
	methods: {
		teste1: function(){			
			this.coisas.push(this.message);	
		}
	}
})