function deepCopy(obj) {
  if (obj == null || typeof obj != 'object') {
    return obj;
  } else if (Array.isArray(obj)) {
    const arr = [];
    for (const i of obj) {
      arr.push(deepCopy(i));
    }
    return arr;
  } else {
    const res = {};
    for (const property of obj) {
      res[property] = deepCopy(obj[property]);
    }
    return res;
  }
}

// Test
a = {
  list: ['a', {a: 'a'}, ['a', 'b']],
  str: 'Random String',
};
b = deepCopy(a);
a['list'][1]['a'] = 'b';
console.log(a);
console.log(b);
