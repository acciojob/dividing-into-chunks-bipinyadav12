const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
 const result=[];
 let subarr=[]
 let sum= 0;
 for( let num in arr){
	 if (sum+num<=n){
		 subarr.push(num);
		 sum=sum+num;
	 }
	 else{
		 subarr.push(num);
		 sum=0;
	 subarr=[];
	 }
	 if(subarr.length>0){
		 result.push(subarr);
	 }
 }
	return result;
};

//const n = prompt("Enter n: ");
//alert(JSON.stringify(divide(arr, n)));
