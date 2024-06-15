function solution(k, dungeons) {
  function dfs(currentK, dungeons, visited, depth) {
      let maxDepth = depth;

      for (let i = 0; i < dungeons.length; i++) {
          if (!visited[i] && currentK >= dungeons[i][0]) {
              visited[i] = true;
              currentK -= dungeons[i][1];

              maxDepth = Math.max(maxDepth, dfs(currentK, dungeons, visited, depth + 1));

              visited[i] = false;
              currentK += dungeons[i][1];
          }
      }

      return maxDepth;
  }

  const visited = Array(dungeons.length).fill(false);

  return dfs(k, dungeons, visited, 0);
}