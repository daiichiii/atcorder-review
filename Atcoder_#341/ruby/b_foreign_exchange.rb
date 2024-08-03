# 入力を受け取る
n = gets.to_i
a = gets.split(" ").map(&:to_i)

s = []
t = []

(n - 1).times do
  si, ti = gets.split.map(&:to_i)
  s << si
  t << ti
end

# i=1から順にs, tの処理を行っていく
def max_currency_n(n, a, s, t)
  (0...n-1).each do |i|
    if a[i] >= s[i]
      # 最大限通貨を次の国に移動させる
      moves = a[i] / s[i]
      a[i] -= moves * s[i]
      a[i + 1] += moves * t[i]
    end
  end
  a[n-1]
end

result_last_n = max_currency_n(n, a, s, t)
puts result_last_n
