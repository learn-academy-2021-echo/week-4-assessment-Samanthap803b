// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
//Psuedo code: The first this is describe what I wan to do my function im going to call it removeAndSuffle.
// After that i have to use "it" and whrite what i want in return.
// In my expect im going to use my hint and use .toContain.

//
// describe ("removeAndSuffle", () => {
//  it ("return a array with the first index removed and the rest of the array shuffle", () =>{
//   expect(removeAndSuffle(colors1)).toContain("blue", "green", "yellow", "pink"),
//   expect(removeAndSuffle(colors2)).toContain("indigo", "periwinkle", "ochre", "aquamarine", "saffron")
//   })
//   var colors1 = ["purple", "blue", "green", "yellow", "pink"]
//   var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
//
// })
//
// // Red this fail. I change from writting my array to just the name of the cariable but it still gave me the same.
//
// // b) Create the function that makes the test pass.
 // //My fisrt step is to declare my new variable.
// //I am going to try to use a foor loop the things that i want to do is remove my first index and next suffle the rest./ //Using .shift im going to remove the zero index
 // const removeAndSuffle = (array) => {
 //      array === array.shift()
 //    for ( let i= array.length -1; i > 0; i--){
 //            let randomArray = Math.random();
 //   }
 //    return array
 // }


// I spend hours stuck first because i had an error on my expect a missing () and it took me alot to create my for loop I still have trouble with for loops.
// In my forloop im going to  declare my removeAndSuffle variable this = to an array and i want my array to remove the first index so im going to use .shift.
//In my forloop I have to say that my length minus 1, and after that i need to use Math.random to shuffle.
// Its Greennnnnnnnnn!
// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.


// Expected output: [-8, 90]

// Expected output: [5, 109]
// First im going to describe and here im going to write what i want.
//In my "it" im going to write what i want in return i want a new array with just the smallest num and the greatest from the array given.
// In my expect i want my function to use the variables given anfd in return i want them to just give me two digits.
// describe( "smallestAndGreates", () => {
//   it("returns an array of the minimum and maximum numbers in that order", () => {
//    expect(smallestAndGreates(nums1)).toEqual([-8, 90]);
//    expect(smallestAndGreates(nums2)).toEqual([5, 109])
//   })
//   var nums1 = [3, 56, 90, -8, 0, 23, 6]
//   var nums2 = [109, 5, 9, 67, 8, 24]
// })
// //Its red.
// // b) Create the function that makes the test pass.
// //Im going to declare my variable smallestAndGreates equal to array and make a new array.
// // Im going to try a for loop and im going to use something new that i dind on MDN and is Math.max and Math.min to get the bigest ans smallest num.
//
//  const smallestAndGreates = (array) => {
//    let newArr = []
//    for(let i= array.length -1;i--){
//      newArr.push(Math.max(...array))
//      newArr.push(Math.min(...array))
//    }
//
// return newArr.sort((a,b) => a-b)
//  }

//Im stuck my test is telling me that i do get my answer but myltiple times and i dont know how to fix this HELPPPPPPPPPP!!!



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.


// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
//I start decribing what i want, in my return i want from two arrays just one and with the numbs not
describe( "justOnce", (array) => {
  it("returns one array with no duplicate values from to arrays", () => {
   expect(justOnce(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1]);
  })
  var testArray1 = [3, 7, 10, 5, 4, 3, 3]
  var testArray2 = [7, 8, 2, 3, 1, 5, 4]
})


// b) Create the function that makes the test pass.

const justOnce = (array1, array2) =>{
  let
}
// I didnt finish for now but i will be trying later on.
