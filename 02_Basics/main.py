import module
print("enter all details")
fname = input("enter your first name:")
lname = input("enter your last name:")
print("Enter 4 number to calculate")
a = int(input())
b = int(input())
c = int(input())
d = int(input())

birth_year = int(input("Enter your birth year"))
current_year = int(input("enter your current year"))

name = module.full_name(fname,lname)
cal = module.calculate(a,b,c,d)
age = module.month(birth_year,current_year)

print("I am",name,"calculation is: " ,cal, "my age is = ",age)