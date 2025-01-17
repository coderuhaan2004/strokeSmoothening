# Stroke Smoothening using bezier curves

![Screenshot 2025-01-18 001937](https://github.com/user-attachments/assets/1a153708-f5d5-4ac6-8051-dd179161b45a)
![Screenshot 2025-01-18 002000](https://github.com/user-attachments/assets/c7e1b011-ea81-4afa-86eb-d7adedf78e5d)

## How to use it
Import all the files in one folder and run HTML file on your browser.

## Algorithm used
1. Keep track of the stroke path by pushing the coordinates of the stroke points in an array.
2. Simplify the line by Ramer-Douglas-Peckar line simplification method and then push the points of simplified line in new array.
3. Calculate the control points from the line using bezier curves.
4. Apply cubic bezier on the line.
