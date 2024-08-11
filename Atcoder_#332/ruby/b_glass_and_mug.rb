# 入力を受け取る
k, g, m = gets.split.map(&:to_i)

# グラスとマグカップの初期状態
glass = 0
mug = 0

# 指定された回数 k だけ操作を繰り返す
k.times do
  if glass == g
    # グラスが満杯ならグラスの水を捨てる
    glass = 0
  elsif mug == 0
    # マグカップが空ならマグカップを満たす
    mug = m
  else
    # マグカップからグラスに水を移す
    transfer = [g - glass, mug].min
    glass += transfer
    mug -= transfer
  end
end

# 最終的なグラスとマグカップの水の量を出力
puts "#{glass} #{mug}"
