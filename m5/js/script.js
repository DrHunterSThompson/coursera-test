// Event handling
document.addEventListener("DOMContentLoaded", function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button").addEventListener("click", function () {
        // Call server to get the name
        $ajaxUtils.sendGetRequest("data/name.json", function (res) {
        	var message = res.firstName + " " + res.lastName;

        	if (res.likesChineeseFood) {
        		message += " likes Chineese food";
        	}
        	else {
        		message += " doesn't like Chineese food";
        	}

        	message += " and uses " + (res.numberOfDisplays + 1) + " displays for coding.";

			document.querySelector("#content").innerHTML = "<h3>" + message + "</h3>";
		});
	});
});