m = gets.to_i
si = Array.new(3)
3.times do |i|
  si[i] = gets.chomp.split('').map(&:to_i)
end

ans = 10**9
time = 0

# リールの順列を試す
[0, 1, 2].permutation do |a, b, c|
  s1 = si[a]
  s2 = si[b]
  s3 = si[c]

  # 各リールのインデックスを使って時間を計算
  s1.each.with_index do |s, i|
    s2.each.with_index do |t, j|
      s3.each.with_index do |u, k|
        # 同じ数字が揃うかチェック
        if s == t && t == u
          time = i < j ? j : m + j
          time = j < k ? time + k - j : time + m - (j - k)
          ans = [ans, time].min
        end
      end
    end
  end
end

puts ans == 10**9 ? -1 : ans
