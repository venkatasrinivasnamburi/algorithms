class HashTable {

  constructor(size){
    // static array is created . The size of the array is set to 50 , some may be empty.
    this.data = new Array(size);
  }

  // Implementations required for the hash map is a hash function that creates the hash out of the value passed.
// since the function is a hash function , we must make it private

// Hash function must return a hash value and hecne you need to create a hash variable and then have to loop across all the variable in a string .
_hash(key){
  let hash = 0;
  for(let i=0; i< key.length; i++){
    hash = (hash + key.charCodeAt(i) * i ) % this.data.length;
  }
  return hash;
}

// you will find the address location using the hash function and create an array there, // in case there is any collision, you would be appending the items to the array.
// you would create an array and keep pushing the items to the array.
set(key, value){
 let address = this._hash(key);
 console.log(this.data);
 // the arrays would be holding the undefined values initially.
 if(!this.data[address]){
   this.data[address] = [];
 }
  this.data[address].push([key,value]);
  console.log(this.data);
}

get(key){
  let address = this._hash(key);
  // could have created a const adn then used in the if condition.
  if(this.data[address]){
    let lengthOfArray = this.data.length;
    for(let i=0 ; i< lengthOfArray; i++){
      // assigining const to this.data[address] would have avoided lot of indexes one /
      // after anothe to avoie confusion.
      if(this.data[address][i] [0]=== key){
        console.log(this.data[address][i][1]);
        return this.data[address][i][1];
      }
    }
  }
}

}

const hashTable = new HashTable(50);
hashTable.set('grapes',10000);
hashTable.set('applies',3434);
hashTable.get('grapes');
hashTable.get('applies');
console.log(hashTable.get('applkdjes'));