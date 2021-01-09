class Solution(object):
    def maxCount(self, m, n, ops):
        """
        :type m: int
        :type n: int
        :type ops: List[List[int]]
        :rtype: int
        """
        i = 50000
        j = 50000
        if len(ops) == 0:
            return m * n
        length = len(ops)
        for k in range(length):
            if i > int(ops[k][0]):
                i = ops[k][0]
            if j > ops[k][1]:
                j = ops[k][1]
        print(i, j)
        return i * j
