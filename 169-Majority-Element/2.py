from collections import Counter


class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        result = 0
        max = 0
        a = Counter(nums)
        for i in a:
            if a[i] > max:
                max = int(a[i])
                result = i
        return result
