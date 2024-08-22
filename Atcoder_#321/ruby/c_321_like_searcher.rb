k = gets.to_i

queue = (1..9).to_a # 1桁の321-like Numberを初期値として追加
count = 0

while true
  current = queue.shift
  count += 1

  if count == k
    puts current
    break
  end

  # 次の狭義単調減少の数を生成
  (0..9).each do |digit|
    if current % 10 > digit
      queue.push(current * 10 + digit)
    end
  end
end
