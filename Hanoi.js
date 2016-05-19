document.addEventListener("DOMContentLoaded", function(){
	new Vue({
		el: "#app",
		data: function() {
			return {
				rings:[],
				choosenField: null,
				choosenRing: null,
				counter:0
			}
		},
		ready: function() {
			for (var i=1; i <=5; i++) {
				this.rings.push({
					id:"ring"+(6-i)
				})
			}
		},
		methods: {
			ringMove: function(e) {
				if(this.choosenRing) {
					if(this.choosenRing.nextElementSibling==null) {
						if(e.target.lastElementChild==null) {
							this.choosenField=e.target;
							this.counter++;
							this.choosenField.appendChild(this.choosenRing);
						} else if(e.target.lastElementChild.clientWidth>this.choosenRing.clientWidth) {
							this.choosenField=e.target;
							this.choosenField.appendChild(this.choosenRing);
							this.counter++;
						}
					}
					
					this.choosenRing=null;
				
					if (e.srcElement.id=="field3" 
						&& e.target.childElementCount==5) {
							if(e.target.lastElementChild.id=="ring1" 
								&& e.target.firstElementChild.id=="ring5") {
									alert("Поздравляем! Вы выиграли за "+this.counter+" шагов.");
							}
							
					}
				}
				else {
					e.stopPropagation();
					this.choosenRing=e.target.lastElementChild;
				}
			}
		}
	});
})