q = gets.to_i

result = []
q.times do
  query = gets.split(" ").map(&:to_i)
  if query[0] == 1
    result << query[1]
  else
    puts result[-query[1]]
  end
end
