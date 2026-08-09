name = input("enter your name")
marks = int(input("enter your totasl marks average"))

if marks >= 90:
    print("Grade A+")
elif marks>=75:
    print("Grade A")
elif marks>=60:
    print ("Grade B")
elif marks>=50:    
    print("Grade C")
else:
    print("Fail")
