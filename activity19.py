"""
Activity 19: Functions
Maybelle Zheng
"""

import math
import random
#example 8) pass statement
def filter_num():
    pass

#example 7) Boolean functions
def is_divisible(x,y):
    print("--------EXAMPLE 7-------")
    if x%y == 0 or y%x ==0:
        return True
    else:
        return False

#example 6) def function with parameters and return value

def sum(num1,num2):
    total = num1+num2
    return total

def number():
    print("--------EXAMPLE 6-------")
    n1 = int(input("Enter number 1: "))
    n2 = int(input("Enter number 2: "))
    x = sum(n1, n2)
    print("The sum of %s and %s is %s" %(n1,n2,x))


#example 5) defined function with default parameter and no return value
def country(c="Norway"):
    print("--------EXAMPLE 5-------")
    print("I am from %s " %(c))

#example 4) defined function with parameter and no return value
def name(fname):
    print("--------EXAMPLE 4-------")
    print("Welcome to the program: %s!" %(fname))
#example 3) defined function: no parameter nor return value
def my_function():
    print("--------EXAMPLE 3-------")
    print("Hello from a function!\n")
# Example 2) random numbers. Randomly pick a color from a list
print("--------EXAMPLE 2-------")
color =['red','blue','green']
randomIndex = random.randint(0,2)
print("The picked color is: %s" %(color[randomIndex]))

# Example 1) using built-in function math to calculate the circumference given the radius
print("--------EXAMPLE 1-------")
radius = float(input("Enter a radius: "))
circumference = 2*math.pi*radius
circumference = round(circumference, 2)
area = math.floor(math.pow(radius,2)*math.pi)
print("The circumference with radius %s is %s and the area is %s" %(radius, circumference, area))
