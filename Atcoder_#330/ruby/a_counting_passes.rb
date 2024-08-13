n,l = gets.split(" ").map(&:to_i)
a = gets.split(" ").map(&:to_i)

count = 0
a.each do |i|
  if i >= l
    count += 1
  end
end
puts count
