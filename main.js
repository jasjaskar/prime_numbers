
// to check whether the number is prime
const checkIsPrimeNumber = (number) => {
  for (var i = 2; i <= Math.sqrt(number); i++)
    if (number % i === 0)
      return false;
  return true;
 }


// to get the prime number array based on the nth input
const getPrimeNumberArray = (No_of_Prime_Numbers) => {
  

  var output_of_N_prime_numbers_array = []

  for(let i = 2 ; ; i++ ){
    if (checkIsPrimeNumber(i)){
      output_of_N_prime_numbers_array.push(i)
    }
    if(output_of_N_prime_numbers_array.length === No_of_Prime_Numbers){
      break;
    }
  }
  return output_of_N_prime_numbers_array
}

// start of the code execution
var Number_of_Prime_Numbers = 12 // static input
if(Number_of_Prime_Numbers >= 1){
  console.log("First " + Number_of_Prime_Numbers + " prime numbers is " , getPrimeNumberArray(Number_of_Prime_Numbers) )
}
else{
	console.log("Please enter the valid nth number")
}


