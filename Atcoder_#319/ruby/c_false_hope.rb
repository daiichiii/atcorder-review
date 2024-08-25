c = []
3.times do
  c << STDIN.gets.chomp.split(/ +/).map(&:to_i)
end
c.flatten!

# チェックするラインのインデックスを定義
chk = []
chk << [0, 1, 2]
chk << [3, 4, 5]
chk << [6, 7, 8]
chk << [0, 3, 6]
chk << [1, 4, 7]
chk << [2, 5, 8]
chk << [0, 4, 8]
chk << [2, 4, 6]

cnt1 = 0 # 全ての順列のカウント
cnt2 = 0 # がっかりするパターンのカウント

(0..8).to_a.permutation.each do |item|
  cnt1 += 1
  flag = false
  chk.each do |item2|
    [[1,2,0],[0,2,1],[0,1,2]].each do |jun|
      z1, z2, z3 = item2[jun[0]], item2[jun[1]], item2[jun[2]]
      if c[z1] == c[z2] && item[z1] < item[z3] && item[z2] < item[z3]
        cnt2 += 1
        flag = true
        break
      end
    end
    break if flag
  end
end

# 確率を計算して出力
result = (cnt1 - cnt2).to_f / cnt1.to_f
puts result
