helper = {
    1: "yek",
    2: "do",
    3: "se",
    4: "chahaar",
    5: "panj",
    6: "shesh",
    7: "haft",
    8: "hasht",
    9: "noh",
    10: "dah",
    11: "yaazdah",
    12: "davaazdah",
    13: "sizdah",
    14: "chahaardah",
    15: "paanzdah",
    16: "shaanzdah",
    17: "hifdah",
    18: "hijdah",
    19: "noozdah",
    20: "bist",
    30: "si",
    40: "chehel",
    50: "panjaah",
    60: "shast",
    70: "haftaad",
    80: "hashtaad",
    90: "navad",
    100: "sad",
    200: "devist",
    300: "sisad",
    400: "chahaarsad",
    500: "paansad",
    600: "sheshsad",
    700: "haftsad",
    800: "hashtsad",
    900: "nohsad",
}


def convertor(num):
    strNum = str(num)
    length = len(strNum)

    if length == 1:
        return helper[num]
    elif length == 2:
        if strNum[1] == "0" or (num >= 11 and num <= 19):
            return helper[num]
        else:
            return helper[num - num % 10] + "o" + " " + convertor(num % 10)

    elif length == 3:
        if strNum[1] == "0" and strNum[2] == "0":
            return helper[num]
        else:
            return helper[num - num % 100] + "o" + " " + convertor(num % 100)


print(convertor(512))

nums = input().split()


for counter, i in enumerate(nums):
    if counter != 0:
        print(convertor(int(i)))

# my function is correct but i cant get numbers
