s = ['h', 'e', 'l', 'l', 'o']
i = int(0)
j = len(s) - 1
while i < j:
    temp = s[i]
    s[i] = s[j]
    s[j] = temp
    i += 1
    j -= 1
print(s)
