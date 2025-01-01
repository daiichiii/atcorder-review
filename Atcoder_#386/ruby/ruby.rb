strings = gets.split.map(&:to_i)

zero_continuous_flag = false
count = 0

strings.each do |i|
  if i == 0
    if zero_continuous_flag
      # 0が連続の場合countを+1にして、0連続フラグをfalseにする
      count += 1
      zero_continuous_flag = false
    else
      # 0が連続でない場合0連続フラグをtrueにする
      zero_continuous_flag = true
    end
  else
    # 0以外の場合countを+1
    count += 1
  end
end

# zero_continuous_flagがtrueの場合、+1が足りていないためcountに+1
if zero_continuous_flag
  count += 1
end

puts count
