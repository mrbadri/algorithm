
# nums = map(int, input().split())


# num = int(input())

def is_round(num):
    num = int(num)
    a = {}
    
    for i in str(num):
        if i in a:
            a[i] = int(a[i]) + 1
        else:
            a[i] = 1
            
    # print(a , len(a))

    if(len(a) <= 2):
        return True
    return False
    
# print(is_round(nums[1]))


def increase():
    num = int(input())
    num = int(num)
    while True:
        if(is_round(num)): 
            print(num)
            break
        num += 1
        
# increase(num)

for i in range(int(input())):
    increase()




    
        
        