n = int(input())

def is_special(num):
    temp = 0
    for i in str(num):
        temp += int(i)        
    
    if(temp % 7 == 0):
        return True
    
    return False



while True:
    n += 1
    if(is_special(n)): 
        print(n)
        break
    