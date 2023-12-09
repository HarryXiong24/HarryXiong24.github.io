---
article: true
isOriginal: true
sticky: 800
star: 800
category: article
tag:
  - Graph
date: 2023-12-08
---

# Graph

## Disjoint Set

### Main idea

The main idea of a “disjoint set” is to have all connected vertices have the same parent node or root node, whether directly or indirectly connected. To check if two vertices are connected, we only need to check if they have the same root node.

### Implement

```ts
export class UnionFind {
  root: number[];
  root_count: number;

  // O(n)
  constructor(n: number) {
    this.root = new Array(n).fill(0).map((_, i) => i);
    this.root_count = size;
  }

  // O(n)
  find(x: number): number {
    if (this.root[x] === x) {
      return x;
    }
    return this.find(this.root[x]);
  }

  // O(n)
  union(x: number, y: number) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.root[rootY] = rootX;
    }
    this.root_count--;
  }

  // O(n)
  connected(x: number, y: number) {
    return this.find(x) === this.find(y);
  }
}
```

Optimize by rank:

```ts
export class UnionFind {
  root: number[];
  rank: number[];
  root_count: number;

  constructor(size: number) {
    this.root = new Array(size).fill(0).map((_, i) => i);
    this.rank = new Array(size).fill(1);
    this.root_count = size;
  }

  find(x: number): number {
    if (this.root[x] === x) {
      return x;
    }
    this.root[x] = this.find(this.root[x]);
    return this.root[x];
  }

  union(x: number, y: number) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.root[rootX] = rootY;
      } else {
        this.root[rootY] = rootX;
        this.rank[rootX]++;
      }
      this.root_count--;
    }
  }

  connected(x: number, y: number) {
    return this.find(x) === this.find(y);
  }

  getRootCount() {
    return this.root_count;
  }
}

// test
const unionFind = new UnionFind(10);
unionFind.union(1, 2);
unionFind.union(2, 3);
unionFind.union(4, 5);
unionFind.union(6, 7);
unionFind.union(8, 9);
unionFind.union(1, 9);
console.log(unionFind.connected(1, 9));
console.log(unionFind.connected(3, 9));
console.log(unionFind.connected(1, 4));
console.log(unionFind.connected(8, 4));
console.log(unionFind.connected(4, 5));
console.log(unionFind.connected(5, 6));
console.log(unionFind.connected(6, 7));
```

## The methods to represent Graph

### Unweighted Graph

![graph1](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/en/article/graph/graph1.png?raw=true)

```ts
const graph = {
  A: ['B', 'C', 'D'],
  B: ['A', 'E', 'F'],
  D: ['A', 'E'],
  C: ['A', 'E'],
  E: ['B', 'C', 'D', 'F'],
  F: ['B', 'E'],
};
```

![graph2](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/en/article/graph/graph2.png?raw=true)

![graph3](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/en/article/graph/graph3.png?raw=true)

### Weighted Graph

![graph4](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/en/article/graph/graph4.png?raw=true)

## DFS

### Traversing all Vertices

Stack Version

```ts
type Graph = Record<string, string[]>;

export function traverseVertices(graph: Graph, start: string): string[] {
  const stack: string[] = [start];
  const isVisited: Set<string> = new Set(start);
  const result: string[] = [];

  while (stack.length) {
    const current = stack.pop()!;

    result.push(current);

    for (const neighbor of graph[current]) {
      if (!isVisited.has(neighbor)) {
        stack.push(neighbor);
        isVisited.add(neighbor);
      }
    }
  }

  return result;
}

// test
const graph = {
  A: ['B', 'C', 'D'],
  B: ['A', 'E', 'F'],
  D: ['A', 'E'],
  C: ['A', 'E'],
  E: ['B', 'C', 'D', 'F'],
  F: ['B', 'E'],
};
const res = traverseVertices(graph, 'A');
console.log(res);
```

Recursion Version

```ts
export function traverseVertices_recursive(graph: Graph, start: string): string[] {
  const isVisited: Set<string> = new Set(start);
  const results: string[] = [];

  const recursive = (node: string) => {
    results.push(node);

    for (const neighbor of graph[node]) {
      if (!isVisited.has(neighbor)) {
        isVisited.add(neighbor);
        recursive(neighbor);
      }
    }
  };

  recursive(start);
  return results;
}
```

### Traversing all paths between two vertices

Stack Version

```ts
type Graph = Record<string, string[]>;

export function traverseAllPathsBetweenTwoVertices(graph: Graph, start: string, end: string): string[][] {
  const stack: [string, string[]][] = [[start, [start]]];
  const results: string[][] = [];

  while (stack.length) {
    const [current_vertex, path] = stack.pop()!;

    if (current_vertex === end) {
      results.push(path);
      continue;
    }

    for (const neighbor of graph[current_vertex]) {
      if (!path.includes(neighbor)) {
        stack.push([neighbor, [...path, neighbor]]);
      }
    }
  }

  return results;
}

// test
const graph = {
  A: ['B', 'C', 'D'],
  B: ['A', 'E', 'F'],
  D: ['A', 'E'],
  C: ['A', 'E'],
  E: ['B', 'C', 'D', 'F'],
  F: ['B', 'E'],
};
const res = traverseAllPathsBetweenTwoVertices(graph, 'A', 'B');
console.log(res);
```

Recursion Version

```ts
export function traverseAllPathsBetweenTwoVertices_recursive(graph: Graph, start: string, end: string): string[][] {
  const results: string[][] = [];

  const recursive = (node: string, path: string[]) => {
    if (node === end) {
      results.push(path);
      return;
    }

    for (const neighbor of graph[node]) {
      if (!path.includes(neighbor)) {
        recursive(neighbor, [...path, neighbor]);
      }
    }
  };

  recursive(start, [start]);
  return results;
}
```

## BFS

### Traversing all Vertices

```ts
type Graph = Record<string, string[]>;

export function traverseVertices_BFS(graph: Graph, start: string): string[] {
  const queue: string[] = [start];
  const isVisited: Set<string> = new Set(start);
  const results: string[] = [];

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const current = queue.shift()!;

      results.push(current);

      for (const neighbor of graph[current]) {
        if (!isVisited.has(neighbor)) {
          queue.push(neighbor);
          isVisited.add(neighbor);
        }
      }
    }
  }

  return results;
}

// test
const graph = {
  A: ['B', 'C', 'D'],
  B: ['A', 'E', 'F'],
  D: ['A', 'E'],
  C: ['A', 'E'],
  E: ['B', 'C', 'D', 'F'],
  F: ['B', 'E'],
};
const res = traverseVertices_BFS(graph, 'A');
console.log(res);
```

### Shortest Path Between Two Vertices

```ts
type Graph = Record<string, string[]>;

export function shortestPathBetweenTwoVertices(graph: Graph, start: string, end: string): string[] {
  const queue: [string, string[]][] = [[start, [start]]];

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [current_vertex, path] = queue.shift()!;

      if (current_vertex === end) {
        return path;
      }

      for (const neighbor of graph[current_vertex]) {
        if (!path.includes(neighbor)) {
          queue.push([neighbor, [...path, neighbor]]);
        }
      }
    }
  }

  return [];
}

// test
const graph = {
  A: ['B', 'C', 'D'],
  B: ['A', 'E', 'F'],
  D: ['A', 'E'],
  C: ['A', 'E'],
  E: ['B', 'C', 'D', 'F'],
  F: ['B', 'E'],
};
const res = shortestPathBetweenTwoVertices(graph, 'A', 'F');
console.log(res);
```

## Minimum Spanning Tree

### Kruskal

```ts
class QuickUnion {
  root: number[];
  rank: number[];

  constructor(size: number) {
    this.root = new Array(size).fill(0).map((_, i) => i);
    this.rank = new Array(size).fill(1);
  }

  find(x: number) {
    if (x === this.root[x]) {
      return x;
    }
    this.root[x] = this.find(this.root[x]);
    return this.root[x];
  }

  union(x: number, y: number) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.root[rootX] = rootY;
      } else {
        this.root[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }

  isConnected(x: number, y: number) {
    return this.find(x) === this.find(y);
  }
}

export function kruskal(edges: number[][], num: number): [number, number[][]] {
  const quickUnion = new QuickUnion(num);

  edges.sort((a, b) => a[2] - b[2]);

  let count = num - 1;
  let res = 0;
  const path: number[][] = [];
  while (edges.length && count > 0) {
    const current = edges.shift()!;
    if (!quickUnion.isConnected(current[0], current[1])) {
      res = res + current[2];
      quickUnion.union(current[0], current[1]);
      path.push([current[0], current[1]]);
      count--;
    }
  }

  return [res, path];
}

// test
const res = kruskal(
  [
    [0, 1, 4],
    [0, 2, 13],
    [0, 3, 7],
    [0, 4, 7],
    [1, 2, 9],
    [1, 3, 3],
    [1, 4, 7],
    [2, 3, 10],
    [2, 4, 14],
    [3, 4, 4],
  ],
  5
);
console.log(res);
```

### Prim

```ts
export function Prim(edges: number[][], points: number): [number, number[][]] {
  let arr: number[][] = [];
  const visited: boolean[] = new Array(points).fill(false);

  for (let i = 0; i < edges.length; i++) {
    if (edges[i][0] === 0 || edges[i][1] === 0) {
      arr.push(edges[i]);
    }
  }

  arr.sort((a, b) => a[2] - b[2]);

  let count = points - 1;
  let res = 0;
  visited[0] = true;
  const path: number[][] = [];

  while (arr.length && count > 0) {
    const [point1, point2, weight] = arr.shift()!;

    if (!visited[point2] || !visited[point2]) {
      res = res + weight;
      path.push([point1, point2]);
      const newPoint = visited[point1] ? point2 : point1;
      visited[newPoint] = true;

      // 清除已访问节点的边
      arr = arr.filter((edge) => !visited[edge[0]] || !visited[edge[1]]);

      // 更新候选边集合
      for (let edge of edges) {
        if ((edge[0] === newPoint && !visited[edge[1]]) || (edge[1] === newPoint && !visited[edge[0]])) {
          arr.push(edge);
        }
      }

      arr.sort((a, b) => a[2] - b[2]);
      count--;
    }
  }

  return [res, path];
}

// test
const res = Prim(
  [
    [0, 1, 4],
    [0, 2, 13],
    [0, 3, 7],
    [0, 4, 7],
    [1, 2, 9],
    [1, 3, 3],
    [1, 4, 7],
    [2, 3, 10],
    [2, 4, 14],
    [3, 4, 4],
  ],
  5
);
console.log(res);
```

### Compare

**Prim's Algorithm**

**Pros:**

1. **Efficiency in Dense Graphs:** Prim's algorithm is generally more efficient in dense graphs where there are lots of edges, as it works by adding the next cheapest edge to the growing tree.
2. **Better for Graphs with Lots of Edges:** Since it adds edges based on the cheapest connection to the growing tree, it can handle dense graphs well.

**Cons:**

1. **Slower in Sparse Graphs:** In graphs with fewer edges, Prim's algorithm can be less efficient compared to Kruskal's.
2. **Dependent on Starting Vertex:** The choice of the starting vertex can influence the edges chosen, although the final minimum spanning tree will be the same.
3. **Requires a Priority Queue:** This algorithm typically requires a priority queue to select the next edge, which can add complexity to the implementation.

**Kruskal's Algorithm**

**Pros:**

1. **Efficiency in Sparse Graphs:** Kruskal's algorithm is typically more efficient for sparse graphs. It sorts all edges and adds them one by one, which is efficient when there are fewer edges.
2. **Simplicity of Sorting Edges:** The algorithm is conceptually simple, as it involves sorting all the edges and then adding them if they don't form a cycle.
3. **Invariance to Starting Position:** Unlike Prim's, Kruskal's algorithm doesn't depend on a starting vertex.

**Cons:**

1. **Less Efficient for Dense Graphs:** For dense graphs with many edges, the initial sorting of all edges can make Kruskal's algorithm less efficient than Prim's.
2. **Requires Union-Find Data Structure:** To efficiently check for cycles, Kruskal's algorithm often uses a union-find data structure, which can add complexity.
3. **Sorting Overhead:** The need to sort all edges before processing can be a drawback in terms of efficiency and computational overhead.

## Single Source Shortest Path

### Dijkstra

```ts
type EdgeMap = Record<string, number>;
type Graph = Record<string, EdgeMap>;

export function dijkstra(graph: Graph, start: string) {
  const distances = Object.keys(graph).reduce((acc, node) => {
    acc[node] = Infinity;
    return acc;
  }, {} as EdgeMap);
  distances[start] = 0;
  const queue: [number, string][] = [[0, start]];

  while (queue.length) {
    queue.sort((a, b) => a[0] - b[0]);
    const [current_distance, current_node] = queue.shift()!;

    if (current_distance > distances[current_node]) {
      continue;
    }

    const edge = graph[current_node];
    for (const neighbor of Object.keys(edge)) {
      const weight = edge[neighbor];

      if (weight + current_distance < distances[neighbor]) {
        distances[neighbor] = weight + current_distance;
        queue.push([weight + current_distance, neighbor]);
      }
    }
  }

  return distances;
}

// test
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};
const res = dijkstra(graph, 'A');
console.log(res);
```
