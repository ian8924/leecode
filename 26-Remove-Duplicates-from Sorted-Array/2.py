class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i = 1
        j = 1
        length = len(nums)
        while(j < length):
            if nums[j] == nums[i - 1]:
                j += 1
            else:
                nums[i] = nums[j]
                i += 1
                j += 1
        del nums[i:length]
