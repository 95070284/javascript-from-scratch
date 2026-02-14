# print("3"+"3"*2)

# i =1
# while i<0:
#     print(i)
    

# else:
#     print("i is no longer greater than 0")


a=[1,2,3,4,5]
b=a
a.append(6)

for i in a:
    if i%2==0:
        a.remove(i)

print(a)