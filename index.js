// Helper function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
  }
  
  // Helper function to check if a number is divisible by another number
  function isDivisible(number, divisor) {
    return number % divisor === 0;
  }
  
  // Helper function to generate a random string of specified length
  function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  // Main function to demonstrate the usage of helper functions
  function main() {
    console.log("Area of a triangle with base 6 and height 4:", calculateTriangleArea(6, 4)); // Output: 12
    console.log("Is 10 divisible by 2?", isDivisible(10, 2));   // Output: true
    console.log("Is 10 divisible by 3?", isDivisible(10, 3));   // Output: false
  
    // Generate and print 5 random strings of length 8
    console.log("Random strings of length 8:");
    for (let i = 0; i < 5; i++) {
      console.log(generateRandomString(8));
    }
  }
  
  // Call the main function
  main();
  