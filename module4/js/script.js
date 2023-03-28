var x = "in global";

console.log(x);

a();


function a () {
	var x = "inside a";
	
	console.log(x);

	function b () {
		console.log(x);
	}
	
	b();
}