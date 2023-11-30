
var objPeople = [
	
	{ 
		username: "hassen",
		password: "barred"
	},
   {
	username:"mohamed",
	password:"matri"   }

]
$("#clickme").click(function(){
	

	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!") 
			window.location.replace("./main.html")

		}
		console.log("incorrect username or password")

	}
})
