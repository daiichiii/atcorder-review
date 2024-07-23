s = gets.strip
substrings = []

(0...s.length).each do |i|
  (i...s.length).each do |j|
    substrings << s[i..j]
  end
end

puts substrings.uniq.size
