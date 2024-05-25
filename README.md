# Stroke Smoothening using bezier curves

## How to use it
Import all the files in one folder and run HTML file on your browser.

## Algorithm used
1. Keep track of the stroke path by pushing the coordinates of the stroke points in an array.
2. Simplify the line by Ramer-Douglas-Peckar line simplification method and then push the points of simplified line in new array.
3. Calculate the control points from the line using bezier curves.
4. Apply cubic bezier on the line.
