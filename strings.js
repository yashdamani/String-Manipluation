function strings(input){
	var a = input.split(',');
	for(i=1; i<a.length; i++){
		even = [];
		odd = [];
		for(var j=0; j<a[i].length; j++){
			if(j % 2 == 0) even.push(a[i][j]);
			else odd.push(a[i][j]);
		}
		console.log(even.join('') + " " + odd.join(''));
	}
}
strings("3,yash damani,Ravi Teja,ths,jhsddfj");
