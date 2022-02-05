// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that



var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let year = [0,0,0]
    if (humanYears == 1){
      year[0] = humanYears
      year[1] = 15
      year[2] = 15
    }else if(humanYears == 2){
      year[0] = humanYears
      year[1] = 24
      year[2] = 24
    }else {
      year[0] = humanYears
      year[1] = (humanYears - 2) * 4 + 24
      year[2] = (humanYears - 2) * 5 + 24
      
    }
    
    return year;
  }