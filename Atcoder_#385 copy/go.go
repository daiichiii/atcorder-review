package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	// 標準入力から文字列を取得
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	S := scanner.Text()

	// S を解析して正整数列 A を復元
	A := parseStringToSequence(S)

	// 結果を出力
	fmt.Println(strings.TrimSpace(strings.Join(A, " ")))
}

// S を解析して正整数列 A を復元する関数
func parseStringToSequence(S string) []string {
	A := []string{}
	currentCount := 0

	// 1文字ずつ S を解析
	for _, char := range S {
		if char == '-' {
			currentCount++
		} else if char == '|' {
			if currentCount > 0 {
				A = append(A, fmt.Sprintf("%d", currentCount))
				currentCount = 0
			}
		}
	}

	return A
}
