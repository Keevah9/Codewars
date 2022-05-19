// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"



function nameShuffler(str){
  
  
    let arr = str.split(' ')
    let arr1 = arr.shift()
    let arr2 = arr.concat(arr1).join(' ')
    return arr2
   
  }