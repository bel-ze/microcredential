"""
Python and PostgreSQL exercises
Maybelle Zheng
8/3/2022
"""

print("\n\n------ FOR LOOP ------------- ")
print("\n\n------ ACTIVITY 3a ------------- ")
listFruits = []

numFruits = int(input("Enter the number of fruits: "))

for i in range(0,numFruits):
    listFruits.append(str(input("Fruit %s: " %(i+1))))

print("User created a list of %s and entered the values: %s" %(numFruits,listFruits))


