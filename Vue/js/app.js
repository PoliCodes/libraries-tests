var app = new Vue({
	el: '#app',
	data: {
		items: []
	},
	methods: {
		insertItem: function(){			
			this.items.push(this.text);	
		},
		removeItem: function(index, b){
			this.items.splice(index, 1);
			console.log(index);
		}
	}
})