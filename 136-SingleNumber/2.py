class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        a = 0
        for num in nums:
            print('num', num, a)
            a = a ^ num
            print(a)
        return a
