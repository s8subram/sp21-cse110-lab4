1. The bug was that the two numbers were being retrieved as strings, which means that the + operator acted as string concatenation rather than numeric addition.
2. This problem can be fixed by casting num1 and num2 into numbers after retrieval, as seen in the [screenshot](part3-fixed.PNG)
3. citylots.json
4. part2.js
5. 11.7 MB
6. 79.52 ms
7. Chrome/90.0.4430.85
8. Apache
9. 26 Jan 2021
10. application.json
11. fetchData
