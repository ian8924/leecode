class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        r = str(x)
        y = r[::-1]
        return r == y
