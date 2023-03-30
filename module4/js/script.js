function print(a, b) {
	console.log("a = " + a.x + "\nb = " + b.x);
}


var a = {x: 7};
var b = a;
print(a, b);

a.x = 9;
print(a, b);

b.x = 5;
print(a, b);