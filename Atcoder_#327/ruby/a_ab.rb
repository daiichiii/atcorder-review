n = gets.chomp
s = gets.chomp

if s.include?('ab') || s.include?('ba')
  puts 'Yes'
else
  puts 'No'
end
