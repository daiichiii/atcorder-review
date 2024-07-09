n,l,r = gets.strip.split

a = []
# nの数だけのaを作成
n.times do |i|
  a<<i
end
# lからr番目を逆順にしたもの
reverse_A = {a[l]..a[r]).reverse

puts reverse_A
