var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var checkBtn1 = document.getElementsByClassName("checkbutton")[0];
var checkBtn2 = document.getElementsByClassName("checkbutton")[1];
var checkBtn3 = document.getElementsByClassName("checkbutton")[2];
var checkBtn4 = document.getElementsByClassName("checkbutton")[3];
var checkBtn5 = document.getElementsByClassName("checkbutton")[4];
var undoBtn1 = document.getElementsByClassName("Undobutton")[0];
var undoBtn2 = document.getElementsByClassName("Undobutton")[1];
var undoBtn3 = document.getElementsByClassName("Undobutton")[2];
var undoBtn4 = document.getElementsByClassName("Undobutton")[3];
var undoBtn5 = document.getElementsByClassName("Undobutton")[4];


checkBtn1.addEventListener("click", function() {
	alert("Are you sure you want to delete this item from your To-do list?")
	li[0].classList.add("done");
})

checkBtn2.addEventListener("click", function() {
	alert("Are you sure you want to delete this item from your To-do list?")
	li[1].classList.add("done");
})

checkBtn3.addEventListener("click", function() {
	alert("Are you sure you want to delete this item from your To-do list?")
	li[2].classList.add("done");
})

checkBtn4.addEventListener("click", function() {
	alert("Are you sure you want to delete this item from your To-do list?")
	li[3].classList.add("done");
})

checkBtn5.addEventListener("click", function() {
	alert("Are you sure you want to delete this item from your To-do list?")
	li[4].classList.add("done");
})

undoBtn1.addEventListener("click", function() {
	alert("Are you sure you want to Undo this item on your To-do list?")
	li[0].classList.remove("done");
})

undoBtn2.addEventListener("click", function() {
	alert("Are you sure you want to Undo this item on your To-do list?")
	li[1].classList.remove("done");
})

undoBtn3.addEventListener("click", function() {
	alert("Are you sure you want to Undo this item on your To-do list?")
	li[2].classList.remove("done");
})

undoBtn4.addEventListener("click", function() {
	alert("Are you sure you want to Undo this item on your To-do list?")
	li[3].classList.remove("done");
})

undoBtn5.addEventListener("click", function() {
	alert("Are you sure you want to Undo this item on your To-do list?")
	li[4].classList.remove("done");
})


function inputLength() {
	return input.value.length;
}

function createListElements() {
		var div = document.createElement("div");
	    var li = document.createElement("li");
	    var btn = document.createElement("button");
	    var btn1 = document.createElement("button");
	    btn.appendChild(document.createTextNode("Delete"));
	    btn1.appendChild(document.createTextNode("Undo"));
	    li.appendChild(document.createTextNode(input.value));
	    ul.appendChild(li);
		ul.appendChild(btn);
		ul.appendChild(btn1);
		btn.addEventListener("click", function() {
		alert("Are you sure you want to delete this item from your To-do list?");
		li.classList.add("done");
			
			})
		btn1.addEventListener("click", function() {
		alert("Are you sure you want to undo this item on your To-do list?");
		li.classList.remove("done");

		})

		input.value = " ";
}

function disAbleButton() {
		button.disabled = true;
	}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElements();
   }

    else if(inputLength() === 0) {
   		disAbleButton();
   		alert("Please enter atleast one Character");
	}
}


function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.which === 13) {
		createListElements();
	}

}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

