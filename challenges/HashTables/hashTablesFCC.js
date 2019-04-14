var called = 0;
var hash = string => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
  let storageLimit = 8;
  this.print = () => {
    console.log(this.collection);
  };
  this.add = (key, value) => {
    let address = hash(key, storageLimit);
    if (this.collection[address] === undefined) {
      this.collection[address] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.collection[address].length; i++) {
        if (this.collection[address][i][0] === key) {
          this.collection[address][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.collection[address].push([key, value]);
      }
    }
  };
  this.remove = key => {
    let address = hash(key, storageLimit);
    if (
      this.collection[address].length === 1 &&
      this.collection[address][0][0] === key
    ) {
      delete this.collection[address];
    } else {
      for (let i = 0; i < this.collection[address]; i++) {
        if (this.collection[address][i][0] === key) {
          delete this.collection[address][i];
        }
      }
    }
  };
  this.lookup = key => {
    let address = hash(key);
    if (this.collection[address] === undefined) {
      return null;
    } else {
      for (let i = 0; i < this.collection[address].length; i++) {
        if (this.collection[address][i][0] === key) {
          return this.collection[address][i][1];
        }
      }
    }
  };
  // change code above this line
};


let ht = new HashTable();
ht.add('cat', 'jessy');
ht.add('dog', 'jerry');
ht.remove('dog');
console.log(ht.lookup('cat'));
ht.print();