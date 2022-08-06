"""
Python and PostgreSQL exercises
Maybelle Zheng
8/3/2022
"""
import math
import random

print("\n\n------ ACTIVITY 3a ------------- ")
print("\n\n------ FOR LOOP ------------- ")

listFruits = []

numFruits = int(input("Enter the number of fruits: "))

for i in range(0,numFruits):
    listFruits.append(str(input("Fruit %s: " %(i+1))))

print("User created a list of %s and entered the values: %s" %(numFruits,listFruits))

print("\n\n------ ACTIVITY 3b: Print between a specific range ------------- ")
num1 = int(input("Enter number 1: "))
num2 = int(input("Enter number 2: "))

while num1 == num2:
    print("Try again! You entered the same number for number 1! ")
    num2 = int(input("Enter a different number 2: "))
if num1>num2:
    print([*range(num2,num1)])
else:
    print([*range(num1,num2)])


def volumeCylinder():
    print("\n\n------ ACTIVITY 3c: Print between a specific range ------------- ")
    radius = float(input("Enter a radius: "))
    height = float(input("Enter the height: "))

