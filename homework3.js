const f1=function(n1,n2,n3,n4){
return n1*n2-(n4/n1+n3);
};
const func1=f1(3,2,8,15);
//console.log(func1);




const area=function(){
	return 1;
};
//console.log(area());




const area1= function(value1,value2){
	console.log(value2-value1);
};





const fullName=function(val1,val2){
	return val1+" "+val2;
};
const fullName1=fullName("Lusine","Mehrabyan");
//console.log(fullName1);



const str=function(x,y,z){
	if (x.length>y.length && x.length>z.length);
	{return x;
	};
	if(y.length>x.length && y.length>z.length);{
		return y;
	};
	if(z.length>x.length && z.length>y.length);{
		return z;
	};
};
const str1=str("introduction","to","CS110");
//console.log(str1);





const func6=function(num1,num2){
	if(num1===num2){
		return 0;	
};
if (num1>num2){
	return 1;
};
if (num2>num1){
	return -1;
};
};
const f6=func6(100,200);
//console.log(f6);





const isTruethy=function(inp1,inp2,inp3){
	if(inp1)
		return inp1;
	if(inp2)
		return inp2;
	if(inp3)
		return inp3;
};
const isTruethy1=isTruethy(NaN,"hello",10);
//console.log(isTruethy1);