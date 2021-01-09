class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        length = len(nums)
        for i in range(length):
            com = target - nums[i]
            for j in range(i + 1, length):
                if(com == nums[j]):
                    return [i, j]
                    break
