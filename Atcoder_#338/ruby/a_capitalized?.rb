s = gets.chomp

if s[0] == s[0].upcase && s[1..-1] == s[1..-1].downcase
  puts 'Yes'
else
  puts 'No'
end
