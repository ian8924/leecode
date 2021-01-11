from collections import Counter


class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        length = len(nums) / 2
        a = Counter(nums)
        for i in a:
            if a[i] > length:
                return i
