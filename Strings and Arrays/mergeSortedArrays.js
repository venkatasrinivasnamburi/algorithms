// LEarnings;
// typeof doesn't return array for arrayObject, it just returns th object.
// when you are declaring multiple variables in the single declaration, make sure to
// initialize both the values.
// push can be used to push only single element bu tnot the array.
// concat operation returns the new array, does not perform operatin on the
// existing array.

function mergeSortedArray( arrayObj1, arrayObj2){
  
  console.log(Array.isArray(arrayObj1));
  console.log(Array.isArray(arrayObj2));
  if( !Array.isArray(arrayObj1) || !Array.isArray(arrayObj2) ){
   console.log('parameters passed are not valid');
  }

  if(arrayObj1.length == 0) return arrayObj2;
  if(arrayObj2.length == 0) return arrayObj1;

  const firstArrayLength = arrayObj1.length;
  const secondArrayLength = arrayObj2.length;

  let firstArrayIndex=0, secondArrayIndex =0;
  let mergedArray = [];
  while(true){
    if(arrayObj1[firstArrayIndex] < arrayObj2[secondArrayIndex]){
      mergedArray.push(arrayObj1[firstArrayIndex]);
      console.log(mergedArray);
      firstArrayIndex++;
    }else {
      mergedArray.push(arrayObj2[secondArrayIndex]);
      console.log(mergedArray);
      secondArrayIndex++;
    }
    if(firstArrayIndex > firstArrayLength -1){
      console.log(arrayObj2.slice(secondArrayIndex));
      mergedArray = mergedArray.concat(arrayObj2.slice(secondArrayIndex));
      return mergedArray;
    }else if(secondArrayIndex > secondArrayLength-1){
      console.log(arrayObj1.slice(firstArrayIndex));
       mergedArray = mergedArray.concat(arrayObj1.slice(firstArrayIndex));
       return mergedArray;
    }
  }
  return mergedArray;
}