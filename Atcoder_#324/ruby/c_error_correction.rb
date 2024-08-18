def possible_match?(t_prime, s)
  len_diff = t_prime.length - s.length

  # Case 1: t_prime と s が完全に一致する場合
  return true if len_diff == 0 && t_prime == s

  # Case 4: t_prime と s の長さが同じ場合、1文字の違いを確認
  if len_diff == 0
    diff_count = 0
    (0...t_prime.length).each do |i|
      if t_prime[i] != s[i]
        diff_count += 1
        return false if diff_count > 1
      end
    end
    return diff_count == 1
  end

  # Case 2 & 3: 長さの差が1の場合
  if len_diff.abs == 1
    longer, shorter = t_prime.length > s.length ? [t_prime, s] : [s, t_prime]
    i, j = 0, 0
    while i < longer.length && j < shorter.length
      if longer[i] != shorter[j]
        return longer[i+1..-1] == shorter[j..-1]
      end
      i += 1
      j += 1
    end
    return true
  end

  false
end

# 入力処理の修正
input = gets.split
n = input[0].to_i
t_prime = input[1]
matches = []

n.times do |i|
  s = gets.chomp
  matches << (i + 1) if possible_match?(t_prime, s)
end

puts matches.length
puts matches.join(" ") unless matches.empty?
