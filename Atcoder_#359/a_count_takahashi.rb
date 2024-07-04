n = gets.to_i

count = 0

n.times do
    s = gets.chomp
    count += 1 if s == "Takahashi"
  end

puts count