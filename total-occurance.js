function List() {
    this.countSpecDigits = function(integersList, digitsList) {
      // Convert all integers to a single string for easier counting
      const allNumbersStr = integersList.join('');
  
      // Map over digitsList to count occurrences
      return digitsList.map(digit => {
        // The global regex search for the current digit in the string representation of all numbers
        const regex = new RegExp(digit, 'g');
        const match = allNumbersStr.match(regex);
        
        // Return a tuple [digit, count], where count is the number of matches or 0 if none
        return [digit, match ? match.length : 0];
      });
    }
  }
  
  // Example usage
  const myList = new List();
  console.log(myList.countSpecDigits([-12, 112, 456, 115], [1, 2, 3]));
  // Expected output: [[1, 5], [2, 2], [3, 1]]