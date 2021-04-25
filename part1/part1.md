- Part 1a)
  1. values added: 20
  2. final result: 20
  3. values added: 20
  4. Error: result is not defined in the same scope as line 13, so it does not exist
  5. Error: result cannot be modified as the program tries in line 7
  6. Error: result does not exist in the scope of line 13
- Part 1b)
  1. 3
  2. 150
  3. 150
  4. It will return an array containing, in order, the elements 50, 100, and 150
  5. Error: because of the let declaration, i has block scope, so it is not in the same scope as line 12
  6. Error: discountedPrice is not in the same scope as line 13
  7. 150
  8. It will return the same as the previous version: an array that looks like [50, 100, 150]
  9. Error: i is not in the scope of line 11
  10. 3
  11. It will return an array [50, 100, 150], but unlike the previous version, it won't round the discounted prices to the nearest cent
  12. student.name  
      student['Grad Year']  
      student.greeting.call()  
      student['Favorite Teacher'].name  
      student.courseLoad[0]
  13. '32' - the 2 is cast into a string  
      1 - '3' is converted to 3, and 3 - 2 = 1  
      3 - null casts to 0  
      3null - null casts to a string  
      4 - true casts to 1  
      0 - both false and null cast to 0  
      3undefined - undefined is cast to a string and then concatenated  
      NaN - subtraction means that it needs to cast to numbers, but undefined casts to NaN
  14. true - '2' is cast to 2  
      true - '2' is cast to 2, '12' is cast to 12  
      true - '2' is cast to 2  
      false - === means strict equality, which holds different types as nonequal  
      false - true is cast to 1, and 1 != 2  
      true - Boolean(2) returns true, so the equality holds
  15. === is strict equality, which means that it will only return true if the two operands are of the same type and also equal. On the other hand, == allows for recasting of types when checking for equality.
  16. See other file
  17. Result: [2, 4, 6]  
      To start with, the for loop will iterate through for each element in array. On each run through the loop, it pushes to the end of newArr the output of callback() called on the ith element of array. We see that callback is a function which returns double its input, so newArr will have pushed to its end twice the value of the corresponding position in array. Thus, newArr will have, in order, all the elements of array, doubled.
  18. See other file
  19. It outputs a 1, followed by a 4, and then around 1000 3 before the subsequent 2. Afterwards, the 1000 3 to 1 2 pattern continues.
