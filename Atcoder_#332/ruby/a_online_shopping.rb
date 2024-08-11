n,s,k = gets.split(" ").map(&:to_i)

sum_price = 0
n.times do
  p,q = gets.split(" ").map(&:to_i)

  sum_price += p*q
end

if sum_price < s
  puts sum_price + k
else
  puts sum_price
end
