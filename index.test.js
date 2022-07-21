const stringFunction = require('./index');

//Assert
test('The string "collins" to equal 7', () => {
    expect(stringFunction.stringLength('collins')).toBe(7);
  });
   
  test('The string "wedding" to equal error', () => {
    expect(stringFunction.stringLength('wedding')).toBe(7);
  });
  
  test('The reverse of "moon" should be noom', () => {
    expect(stringFunction.reverseString('moon')).toMatch('noom');
   });

