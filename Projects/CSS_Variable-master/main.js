let root = document.documentElement;

function handleUpdate (e, s) {

	// console.log(s);
	 // check base or not 
	if (s=='base') { // if it base you do not need add px coz this is color -_-
		root.style.setProperty('--'+s , e);
	}
	else {  // if not base -> need add px
		root.style.setProperty('--'+s , e + "px");	
	}	
}