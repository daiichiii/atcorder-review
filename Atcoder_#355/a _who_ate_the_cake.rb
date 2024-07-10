a, b = gets.strip.split.map(&:to_i)

if a == b
  puts -1
else
  # 犯人を特定
  culprit = 6 - a - b
  puts culprit
end
