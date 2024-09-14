def main
  n, m = gets.split.map(&:to_i)
  strings = []
  n.times do
    strings << gets.chomp
  end

  # 2つの文字列が1文字だけ異なるかどうかを確認する関数
  def one_char_diff?(s1, s2)
    diff_count = 0
    s1.size.times do |i|
      diff_count += 1 if s1[i] != s2[i]
      return false if diff_count > 1
    end
    diff_count == 1
  end

  # 全ての順列を試す
  strings.permutation.each do |perm|
    valid = true
    (0...n-1).each do |i|
      unless one_char_diff?(perm[i], perm[i+1])
        valid = false
        break
      end
    end
    if valid
      puts "Yes"
      return
    end
  end

  # どの並び替えも条件を満たさなかった場合
  puts "No"
end

main
