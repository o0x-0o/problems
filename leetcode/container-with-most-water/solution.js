function maxArea(height) {
	  /* Solution descrition
		 * -----
		 * The idea here is that, given two pointers `i` and `j` pointing to the leftmost and rightmost elements in the `height`
		 * array, respectivally, we can iterate forwards and backwards in the array, checking the area at each interaction until they match.
		 * At each interaction, we store the area if it is greater than the previously stored.
		 * When both pointers match, the problem's solution will be the greatest stored area.
		*/
    let i = 0;
    let j = height.length - 1;

    let max = -1;

    while (i < j) {
        const min = Math.min(height[i], height[j]);
        max = Math.max(max, min * (j - i));

        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return max;
};
