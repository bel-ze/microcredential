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
    print("\n\n------ ACTIVITY 3c: Defined and math function: ------------- ")
    pi = math.pi
    radius = int(input("Enter a radius: "))
    height = int(input("Enter the height: "))
    volume = round(pi * height * radius ** 2,2)
    print("The volume with radius %s and height %s is %s" %(radius,height,volume))

def rollDice():
    print("\n\n------ ACTIVITY 3d: Write function that simulate roll the dice ------------- ")

    numRoll = int(input("How many times do you want to roll?: "))
    for i in range(0 ,numRoll):
        numDice = random.randint(1,6)
        print("Roll %s = %s" %(i+1,numDice))
    
    
