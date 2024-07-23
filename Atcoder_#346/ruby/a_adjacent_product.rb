n = gets.chomp.to_i
a = gets.split(" ").map(&:to_i)

b =[]

a.each do |i|
  if a[i+1]
    b << a[i] * a[i+1]
  end
end

puts b.join(" ")
