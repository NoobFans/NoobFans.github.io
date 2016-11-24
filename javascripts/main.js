window.onload = function() {
	var allLi = document.getElementsByTagName("li");
	for (var i=0; i<allLi.length; i++){
		allLi[i].onmouseover = function() {
		this.getElementsByClassName('top_l2_nav')[0].style.overflow = "visible";
		}
		allLi[i].onmouseout = function() {
		this.getElementsByClassName('top_l2_nav')[0].style.overflow = "hidden";
		}
	}
}
	
