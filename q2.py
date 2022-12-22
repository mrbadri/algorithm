cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
rows = [8,7,6,5,4,3,2,1]

position = input()

currentCol = position[0]
currentRow = position[1]

print(currentCol ,currentRow )

indexCurrentRow = rows.index(int(currentRow))
indexCurrentCol = cols.index(currentCol)


def validPosition (row , col):
    if(int(row) == int(currentRow)or col == currentCol): return True
    
    indexRow = rows.index(int(row))
    indexCol = cols.index(col)
    
    difRows = abs(indexCurrentRow - indexRow) 
    difCols = abs(indexCurrentCol - indexCol)
    
    
    if(difRows == difCols): return True
    
    return False
    


for row in rows:
    print()
    for col in cols:
        if (int(row) == int(currentRow) and col == currentCol):
            print('Q', end='')
        elif(validPosition(row , col)): 
            print('X', end='')
        else: 
            print(".", end='')
        
        
