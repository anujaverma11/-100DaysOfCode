# Two cats named A and B are standing at integral points on the x-axis. Cat A is standing at point x and cat B is standing at point y. Both cats run at the same speed, and they want to catch a mouse named C that's hiding at integral point z on the x-axis. Can you determine who will catch the mouse?

# You are given  queries in the form of x, y, and z. For each query, print the appropriate answer on a new line:

# If cat A catches the mouse first, print Cat A.
# If cat B catches the mouse first, print Cat B.
# If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
# Input Format

# The first line contains a single integer, q, denoting the number of queries.
# Each of the q subsequent lines contains three space-separated integers describing the respective values of  (cat A's location),  (cat B's location), and  (mouse C's location).

# Output Format

# On a new line for each query, print Cat A if cat A catches the mouse first, Cat B if cat B catches the mouse first, or Mouse C if the mouse escapes.

#!/bin/python3

import sys

def catAndMouse(x, y, z):
    DisZX = abs(z-x)
    DisZY = abs(z-y)

    if (DisZX < DisZY):
      return("Cat A")
    elif (DisZX == DisZY):
      return("Mouse C")
    else:
      return("Cat B")

if __name__ == "__main__":

    q = int(input().strip())
    for a0 in range(q):
        x, y, z = input().strip().split(' ')
        x, y, z = [int(x), int(y), int(z)]
        result = catAndMouse(x, y, z)
        print ("".join(map(str, result)))