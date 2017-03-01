function sortedArray(arrNew){
			   var len = arrNew.length;
			   for (var i = len-1; i>=0; i--){
			     for(var j = 1; j<=i; j++){
			       if(arrNew[j-1]>arrNew[j]){
			           var temp = arrNew[j-1];
			           arrNew[j-1] = arrNew[j];
			           arrNew[j] = temp;
			        }
			     }
			   }
   	return arrNew;
   }
//поверне індекс знайденого елемента(arrItem)
 function searchInArray(arrNew,arrItem){
		var n = arrNew.length, i = 0;   
		arrNew[n] = arrItem ;
		    
		while (arrNew[ i ] !== arrItem) i++;                            
		    if (i < n) return i;
		    else return -1;  
}
 var arr = [3,4,5,0,-13];

console.log(sortedArray(arr));
console.log(searchInArray(sortedArray(arr),5));
