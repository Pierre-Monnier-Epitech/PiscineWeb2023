export function arrayFiltering(array, test) {
    const table = [];
    
    for (let i = 0; i < array.length; i++) {
      if (test(array[i])) {
        table.push(array[i]);
      }
    }
    
    return table;
  }