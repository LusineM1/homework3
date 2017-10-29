//triangleStars
const stars=function(b) {
	if (b===0) {
		return "";
	};
	return "*" + stars(b-1);
};

const space=function(a){
	if (a===0){
		return "";
	};

	return space(a-1) + " ";
}

const TriangleStars=function(n) {
	 const looper=function(g){
		if (g===0) {
			return "";
		};
		console.log(space(n-g) + stars(2*g-1))
		return looper(g-1) 
};
 return looper(n);
};
console.log(TriangleStars(4));


//exponential
const pow=function(base,n){
	if(n===1) {
		return base;
	};
	return base*pow(base,n-1); 
};
console.log(pow(3,3));


//reverse string
const f= function(str) {
	const f1=function(index){
	if (index < 0){
		return "";
	};
	return str[index] + f1(index-1);
};
	return f1(str.length-1);
};
const r=f("abcde");
console.log(r);


//checkerboard
const x=function(z){
	if (z===0){
		return " ";
	}
	return  "*" + " " + x(z-1)
};
 
 const y=function(h){
 	if (h===0){
 		return " ";
 	}
 	return " " + "*" + y(h-1);
 };

 const checkerboard=function(d){
 	const looper=function(e){
         if (e===0){
         	return " ";
         }
         if (e%2){
 			console.log(x(d));
 		}
 		else{
 			console.log(y(d));
  		}; 
  		looper(e-1);
 	}
 	looper(d);
 };
console.log(checkerboard(5));
