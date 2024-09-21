def main
  n, x = gets.split.map(&:to_i)
  a = gets.split.map(&:to_i)

  if x == 0
    puts "Yes"
  else
    seen = {}
    a.each do |num|
      if seen[num - x] || seen[num + x]
        puts "Yes"
        return
      end
      seen[num] = true
    end
    puts "No"
  end
end

main
