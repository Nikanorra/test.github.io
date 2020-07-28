$ (document).ready(function() {

	$('#category_selec').selectmenu();

let popup = document.getElementById('popup_enter'),
		popupToggle = document.getElementById('myBtn'),
		popupClose = document.querySelector('.close');

		popupToggle.onclick = function() {
			popup.style.display="block";
		};

		popupClose.onclick = function() {
			popup.style.display="none";
		}

		window.onclick = function(e) {
			if(e.target == popup) {
				popup.style.display="none";
			}
}

let popupCall = document.getElementById('recallMy'),
		popupToggleCall = document.getElementById('recallBtn'),
		popupCloseCall = document.querySelector('.close1');

		popupToggleCall.onclick = function() {
			popupCall.style.display="block";
		};

		popupCloseCall.onclick = function() {
			popupCall.style.display="none";
		}

		window.onclick = function(e) {
			if(e.target == popupCall) {
				popupCall.style.display="none";
			}
}


	$("#userPhone").mask("+3 (099) -99-999");



function validate() {
	var userEmail = document.getElementById("userEmail");
	var userPassword = document.getElementById("userPassword");
	var userSubscribe = document.getElementById("userSubscribe");

	event.preventDefault();

	if(!userEmail.value) {
		userEmail.style.border = "2px solid red";
		return false;
	}

	if(!userPassword.value) {
		userPassword.style.border = "2px solid red";
		return false;
	}

	if(!userSubscribe.value) {
		userSubscribe.style.border = "2px solid red";
		return false;
	}

	return true;

}

});
