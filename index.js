function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        result.push(callback(collection[key], key, collection));
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue;
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (accumulator === undefined) {
          accumulator = collection[i];
        } else {
          accumulator = callback(accumulator, collection[i], i, collection);
        }
      }
    } else {
      for (let key in collection) {
        if (accumulator === undefined) {
          accumulator = collection[key];
        } else {
          accumulator = callback(accumulator, collection[key], key, collection);
        }
      }
    }
    return accumulator;
  }
  
  function myFind(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i], i, collection)) {
          return collection[i];
        }
      }
    } else {
      for (let key in collection) {
        if (callback(collection[key], key, collection)) {
          return collection[key];
        }
      }
    }
    return undefined;
  }
  
  function myFilter(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i], i, collection)) {
          result.push(collection[i]);
        }
      }
    } else {
      for (let key in collection) {
        if (callback(collection[key], key, collection)) {
          result.push(collection[key]);
        }
      }
    }
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  function myFirst(collection, n) {
    if (n === undefined) {
      return collection[0];
    } else {
      return collection.slice(0, n);
    }
  }
  
  function myLast(collection, n) {
    if (n === undefined) {
      return collection[collection.length - 1];
    } else {
      return collection.slice(collection.length - n);
    }
  }
  
  function myKeys(collection) {
    return Object.keys(collection);
  }
  
  function myValues(collection) {
    return Object.values(collection);
  }