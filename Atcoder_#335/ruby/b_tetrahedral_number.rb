# 標準入力から整数Nを取得
N = gets.to_i

# 非負整数の組 (x, y, z) を求める
(0..N).each do |x|
  (0..N).each do |y|
    (0..N).each do |z|
      if x + y + z <= N
        puts "#{x} #{y} #{z}"
      end
    end
  end
end
