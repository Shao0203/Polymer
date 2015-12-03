// var box = new Object();
// box.name = 'bright';
// box.age = 28;
// box.run = run();
// alert(box.name +','+ box.age +','+ box.run);
// function run() {
// 	return 123;
// }

// var box = {
// 	name : 'bright',
// 	age : 28,
// 	run : function () {
// 		return 'New Zealand';
// 	}
// };
// alert(box.name +','+ box.age +','+ box.run());

// function run(para) {
// 	if (para.name != undefined) alert(para.name);
// 	if (para.age != undefined) alert(para.age);
// 	if (para.height != undefined) alert(para.height);
// 	if (para.like() != undefined) alert(para.like())
// }
// var person = {
// 	name : 'bright',
// 	age : 30,
// 	love : 'basketball',
// 	like : function () {
// 		return 'I love milk';
// 	}
// };
// run(person);

// var box = ['bright',28,'male'];
// box[box.length] = 'new01';
// box[box.length] = 'new02';
// var box = new Array();
// box['name'] = 'bright';
// box['age'] = 28;
// box.length = 10;
// alert(box.length);
// alert(box)

// var box = ['bright',28,'male','game',82];
// alert(box);
// alert(box.toString());
// alert(box.valueOf());
// alert(box.toLocaleString());
// alert(box.join('|'));
// alert(typeof box.join('*'));
// alert(typeof box);
// var box2 = box.splice(1,3,'abc');
// alert(typeof box2);
// alert(typeof box);


// var box = new Date();
// alert(box.getFullYear() +'-'+ (box.getMonth()+1) +'-'+ box.getDate() +' '+ 
// 	  box.getHours() +':'+ box.getMinutes() +':'+ box.getSeconds());
// alert(box.getTimezoneOffset());

// function box(num1,num2) {
// 	return num1+num2;
// }

// var box = function(num1,num2) {
// 	return num1+num2;
// }

// var box = new Function('num1','num2','return num1-num2');
// alert(box(1,2));

// function box(a,b) {
// 	return sum(b);
// }

// function sum(a) {
// 	return a+10;
// }

// alert(box(sum,100));

// function box(num) {
// 	if (num <= 1) {
// 		return 1;
// 	} else {
// 		// return num * sum(num-1);
// 		return num * arguments.callee(num-1);
// 	}
// }
// alert(box(5));


// var color = 'red';
// alert(window.color);
// alert(this.color);
// alert(color);

// this.color = 'green';
// alert(this.color);

// var box = {
// 	color : 'blue',
// 	sayColor : function() {
// 		return this.color;
// 	}
// };

// alert(box.sayColor());


// function box(a,b,c) {
// 	return a+b-c;
// }
// alert(box.length);

// function box(num1, num2) {
// 	return num1 + num2;
// }

// function sum(a, b) {
// 	return box.call(this,a,b);
// }
// alert(box(20,10));
// alert(sum(20,20));


// var color = 'red';

// var box = new Object();
// box.color = 'blue';

// function sayColor(){
// 	return this.color;
// }

// alert(sayColor.apply(box));


// var box = new Object();
// box.name = 'aa';
// var box2 = box;
// box2.name = 'bb';
// alert(box.name);
// alert(box2.name);

// function sum(num) {
// 	return num+=10;
// }

// var num = 50;
// alert(sum(num));
// alert(num)

// function box(obj) {
// 	obj.name = 'aaa';
// 	var obj = new Object();
// 	obj.name = 'bbb';
// }
// var obj = new Object();
// box(obj);

// alert(obj.name);

// var box = new Number(10);
// alert(box instanceof Number);
// alert(box);

// var aaa = 'a';
// function box() {
// 	aaa = 'b';
// }
// box();
// alert(aaa);


// var box = 'abc abc aabc c aaa';

// function findA() {
// 	var arrBox = [];
// 	var pos = box.indexOf('a');
// 	while (pos > -1) {
// 		arrBox.push(pos);
// 		pos = box.indexOf('a',pos + 1);
// 	}
// 	return arrBox;
// }

// alert(findA())

// var box = 'I am Bright Shao 19870203.';
// // alert(box.concat('123'));
// // alert(box.charAt(2));
// alert(box.split(' ') instanceof Object);

// var box = '//Shao邵';
// var a = encodeURI(box);
// var b = encodeURIComponent(box);
// alert(decodeURI(a));
// alert(decodeURIComponent(b));

// eval('var box = "abc"');
// alert(box)

// alert(Math.ceil(25.1));
// alert(Math.floor(25.9));
// alert(Math.round(35.1));
// alert(Math.round(35.5));


// function select(start, end) {
// 	var total = end - start + 1;
// 	var rst = Math.floor(Math.random() * total + start);
// 	return rst;
// }

// for (var i = 0; i < 10; i++) {
// 	document.write(select(1,100));
// 	document.write('<br>');
// }


// function createObj(name,age) {
// 	var obj = new Object();
// 	obj.name = name;
// 	obj.age = age;
// 	obj.run = function() {
// 		return this.name + this.age + ' is running...';
// 	};
// 	return obj;
// }

// var box1 = createObj('shao',28);
// var box2 = createObj('Lee',30);

// alert(box1.run());
// alert(box2.run());

// function Box(para1, para2) {
// 	this.name = para1;
// 	this.age = para2;
// 	this.run = function() {
// 		return this.name + this.age + ' is running...';
// 	};
// };

// var box1 = new Box('bright',28);
// var box2 = new Box('shao',30);
// box2.name = 'aaaa';
// alert(box2.run());
// alert(box1.run());
// alert(box1.run());
// alert(box2.run());

// var obj = new Object();
// Box.apply(obj,['kelly',100]);
// alert(obj.run());

// alert(box1.run() == box2.run());


// function Box() {
// 	this.name = 'jack';
// };

// Box.prototype.name = 'shao';
// Box.prototype.age = 28;
// Box.prototype.run = function() {
// 	return this.name + this.age + ' is running...';
// };

// var box1 = new Box();
// var box2 = new Box();
// alert(box1.run == box2.run);

// alert(box1.prototype);		//undefined
// alert(box1.__proto__);		//object Object
// alert(box1.__proto__.constructor);	//function Box() {}
// alert(box1.constructor);
// alert(box1.name);
// delete box1.name;
// alert(box1.name);
// alert(box2.name);

// alert('name' in box1);
// var str = '';
// function select(ins, attr) {
// 	if (!(attr in ins)) return 'There is no ' + attr;
// 	if (ins.hasOwnProperty(attr)) {
// 		str = attr + ' is in the instance object';
// 	} else {
// 		str = attr + ' is in the prototype object';
// 	}
// 	return str;
// }

// alert(select(box1,'name'));

// function Box() {};

// Box.prototype = {
// 	// constructor : Box,
// 	name : 'Bright',
// 	age : 28,
// 	color : ['red','yellow','green'],
// 	run : function() {
// 		return this.name + this.age + ' is running...';
// 	}
// }

// // var box = new Box();
// // // alert(box.run());

// // alert(Array.prototype.sort);
// // alert(String.prototype.substr);
// var box1 = new Box();
// var box2 = new Box();

// box1.color.push('blue');
// alert(box1.color);
// alert(box2.color);


// function Box(name,age) {
// 	this.name = name;
// 	this.age = age;
// 	this.color = ['red','yellow','green']
// }

// Box.prototype = {
// 	constructor : Box,
// 	run : function() {
// 		return this.name + this.age;
// 	}
// };

// var box1 = new Box('shao',28);
// box1.color.unshift('blue');
// alert(box1.color);

// var box2 = new Box('bright',30);
// alert(box2.color);

// alert(box1.run() == box2.run());
// alert(box1.run == box2.run);


// function Box(name,age) {
// 	this.name = name;
// 	this.age = age;
// 	this.color = ['red','yellow','green'];

// 	if (typeof this.run != 'function') {
// 		Box.prototype.run = function() {
// 			return this.name + this.age;
// 		};
// 	}

// }

// var box1 = new Box('aa',30);
// alert(box1.run)
// var box2 = new Box('bb',40);
// alert(box2.run())

// function Box(name,age) {
// 	this.name = name;
// 	this.age = age;
// 	this.run = function() {
// 		return this.name + ' is ' + this.age;
// 	};
// 	if (typeof this.walk != 'function') {
// 		Box.prototype.walk = function() {
// 			return this.name + this.age;
// 		};
// 	};
// }

// function Pox(){}
// Pox.prototype = new Box(name,age);
// var pox = new Pox('aa',100);
// alert(pox.run());


// function Table() {
// 	// this.name = 'table';
// 	this.size = 20;
// 	this.run = function () {
// 		return this.name + this.size;
// 	};
// }

// function Desk() {
// 	// this.name = 'desk';
// 	this.price = 100;
// 	this.check = function () {
// 		return "this is a desk";
// 	};
// }
// Table.prototype.name = 'shao';
// Desk.prototype = new Table();

// var table = new Table();
// var desk = new Desk();
// alert(table.name + ' | ' + table.size + " | " + table.run());
// alert(desk.name + ' | ' + desk.price + ' | ' + desk.check());
// alert(table instanceof Table);
// alert(table instanceof Desk);
// alert(table instanceof Object);
// alert(desk instanceof Table);
// alert(desk instanceof Desk);
// alert(desk instanceof Object);

function Table(age) {
	this.name = ['aa','bb','cc'];
	this.age = age;
	Table.prototype.size = 222;
}

function Desk(para1) {
	Table.call(this,para1);
}


// var table = new Table(500);
// alert(table.name +' | '+table.age+' | '+table.size);

// var desk = new Desk(200);
// desk.name.push('dd');
// alert(desk.name + ' | '+desk.age+ ' | '+desk.size);

// function Table(name) {
// 	this.name = name;
// }

// function Desk(age) {
// 	this.age = age;
// }

// Desk.prototype = new Table('cc');

// var table = new Table(22);
// alert(table.name);
// alert(table.age)
// var desk = new Desk(11);
// alert(desk.name);
// alert(desk.age);

// function Box(name,age) {
// 	this.name = name;
// 	this.age = age;
// }
// Box.prototype.run = function() {
// 	return this.name + this.age;
// }

// function Pox(p1,p2) {
// 	this.size = 22;
// 	Box.call(this,p1,p2);
// }
// Pox.prototype = new Box();

// var box = new Box('aa',10);
// alert(box.name+box.age+box.run()+box.size);

// var pox = new Pox('bb',20);
// alert(pox.name+pox.age+pox.run()+pox.size); 



// function Box(urname,urage) {
// 	this.name = urname;
// 	this.age = urage;
// 	this.run = function() {
// 		return this.name + ' | ' + this.age;
// 	}
// }

// function Pox(p1, p2) {
// 	Box.call(this,p1,p2);
// }

// var pox = new Pox('aa',12);
// alert(pox.run());


// var box = function(){
// 	return 100;
// }();
// alert(box);


// function box(){
// 	return function(){
// 		return 100;
// 	}
// }

// alert(box()());

// var age = 100;

// function box(){
// 	age++;
// 	return age;
// }
// box();
// alert(age);	//101
// box();
// alert(age);	//102
// box();
// alert(age);	//103

// function box() {
// 	var age = 100;
// 	age++;
// 	return age;
// }
// alert(box());	//101
// alert(box());	//101
// var b = box();
// alert(b);alert(b);alert(b);

// function box() {
// 	var age = 100;
// 	return function() {
// 		age++;
// 		return age;
// 	}
// }

// var b = box();
// alert(b());
// alert(b());
// alert(b());
// alert(b());
// // alert(age);
// b = null;
// alert(b);

// (function(age){
// 	alert(age);
// })(100);

// var age = 100;
// function box() {
// 	age++;
// 	return age;
// }
// alert(box());
// alert(box());
// alert(age);

// function box() {
// 	var age = 100;
// 	age++;
// 	return age;
// }

// alert(box());
// alert(box());
// alert(age);

// function box() {
// 	var age = 100;
// 	return function() {
// 		age++;
// 		return age;
// 	}
// }

// var b = box();
// alert(b());
// alert(b());
// alert(b());
// alert(b());
// alert(age);

// function box() {
// 	var arr = [];

// 	for (var i = 0; i < 5; i++) {
// 		arr[i] = function() {
// 			return i;
// 		};		
// 	}

// 	return arr
// }

// var b = box();

// for (var i = 0; i < 5; i++) {
// 	alert(b[i]());
// };


// function box() {
// 	var arr = [];

// 	for (var i = 0; i < 5; i++) {
// 		arr[i] = i;	
// 	}

// 	return arr
// }

// var b = box();

// for (var i = 0; i < 5; i++) {
// 	alert(b[i]);
// };


// function box() {
// 	var arr = [];

// 	for (var i = 0; i < 5; i++) {
// 		arr[i] = (function() {
// 			return i;
// 		})();		
// 	}

// 	return arr
// }

// var b = box();

// for (var i = 0; i < 5; i++) {
// 	alert(b[i]);
// };

// function box() {
// 	var arr = [];

// 	for (var i = 0; i < 5; i++) {
// 		arr[i] = function(num) {
// 			return function() {
// 				return num;
// 			}
// 		}(i);		
// 	}

// 	return arr
// }

// var b = box();

// for (var i = 0; i < 5; i++) {
// 	alert(b[i]());
// };



// function box() {
// 	var arr = [];

// 	for (var i = 0; i < 5; i++) {
// 		arr[i] = function(num) {
// 			return function() {
// 				return num;
// 			}
// 		}(i);
// 	}

// 	return arr;
// }

// var b = box();
// for (var i = 0; i < 5; i++) {
// 	alert(b[i]());
// }


// var box = {
// 	getThis : function() {
// 		return this;
// 	}
// };

// alert(this);
// alert(box.getThis());

// var obj = 'the window';

// var box = {
// 	obj : 'the box',
// 	getThis : function() {
// 		var that = this;
// 		return function() {
// 			return that.obj;
// 		}
// 	}
// }
// alert(this.obj);
// alert(box.getThis()());

// var obj = 'the window';

// var box = {
// 	obj : 'the box',
// 	getThis : function() {
// 		return function() {
// 			return this.obj;
// 		}
// 	}
// }
// alert(this.obj);
// alert(box.getThis().call(box));



// function box() {
// 	(function() {
// 		for (var i = 0; i < 3; i++) {
// 			alert(i);
// 		}
// 	})();
	
// }

// box();

// (function() {
// 	var age = 100;
// 	alert(age);
// });

// function Box() {
// 	var name = 'bright';
// 	function run() {
// 		return name +' is good.';
// 	}

// 	this.pubGo = function() {
// 		return name + run();
// 	}
// }

// var box = new Box();
// alert(box.pubGo());


// function Box(para) {
// 	var user = para;
// 	this.getUser = function() {
// 		return user;
// 	}
// 	this.setUser = function(setValue) {
// 		return user = setValue;
// 	}
// }

// var box = new Box('shao');
// alert(box.getUser());
// box.setUser('liang');
// alert(box.getUser());
// alert(box.user);	//undefined


// var box = function() {
// 	var age = 100;
// 	function run() {
// 		return 'abc';
// 	}

// 	return {
// 		pubGo : function() {
// 			return age + run(); 
// 		}
// 	};
// }();

// alert(box.pubGo());
// alert(box.age);


// var box = function() {
// 	var person = 'bright';
// 	function run() {
// 		return 'My name is ';
// 	}
	
// 	return {
// 		pubGo : function() {
// 			return run() + person;
// 		}
// 	};
// }();

// alert(box.pubGo());






























