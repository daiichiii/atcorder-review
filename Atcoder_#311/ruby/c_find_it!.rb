def main
  n = gets.to_i
  a = gets.split.map(&:to_i)

  find_cycle(n, a)
end

def find_cycle(n, a)
  visited = Array.new(n + 1, false)
  in_stack = Array.new(n + 1, false)
  stack = []

  (1..n).each do |i|
    next if visited[i]

    if dfs(i, a, visited, in_stack, stack)
      return
    end
  end
end

def dfs(v, a, visited, in_stack, stack)
  visited[v] = true
  in_stack[v] = true
  stack.push(v)

  next_v = a[v - 1]  # 0-indexed correction

  if !visited[next_v]
    if dfs(next_v, a, visited, in_stack, stack)
      return true
    end
  elsif in_stack[next_v]
    # サイクルが見つかった場合
    cycle = extract_cycle(next_v, stack)
    puts cycle.size
    puts cycle.join(" ")
    return true
  end

  stack.pop
  in_stack[v] = false
  false
end

def extract_cycle(start, stack)
  cycle = []
  while stack.last != start
    cycle << stack.pop
  end
  cycle << stack.pop
  cycle.reverse!
end

main
