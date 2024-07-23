n,k = gets.split(" ").map(&:to_i)

a = gets.split(" ").map(&:to_i)

k_multiple = []
a.each do |i|
  if i % k == 0
    k_multiple << i/k
  end
end

puts k_multiple.join(" ")
