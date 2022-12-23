n = int(input())
data = input().split()
    


counter = 0
for i in range(n):
    for j in range(n):
        for k in range(n):
            if(int(data[i]) * int(data[j]) == int(data[k])**2):
                counter += 1
                
print(counter)