a,b,d = gets.split(" ").map(&:to_i)

def range_with_step(a, b, d)
  (a..b).step(d).to_a
end

puts range_with_step(a, b, d)
