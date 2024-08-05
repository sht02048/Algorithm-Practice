function solution(nums) {
  const N = nums.length / 2;
  const set = new Set(nums);
  const setSize = set.size;
  
  if (N > setSize) return setSize;
  
  return N;
}