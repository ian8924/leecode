s = ['h', 'e', 'l', 'l', '0']
i = int(0)
j = len(s) - 1
while i < j:
    print(i)
    temp = s[i]
    s[i] = s[j]
    s[j] = temp
    i += 1
    j -= 1
