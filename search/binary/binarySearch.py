# example.py

def bunarySearch(nums , target):
    firstPoint, endPoint = 0  , len(nums) - 1

    while firstPoint <= endPoint:
        middlePoint= (firstPoint + endPoint) // 2

        if(target < nums[middlePoint]):
            endPoint = middlePoint - 1
        elif(target > nums[middlePoint]):
            firstPoint = middlePoint + 1
        else:
            print(middlePoint , nums[middlePoint])
            return middlePoint
            



if __name__ == "__main__":
    result  = bunarySearch([1,2,12, 14 , 90] , 14)
    print("Result Point:", result)