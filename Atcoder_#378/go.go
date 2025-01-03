package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	// 最初の行で N を取得
	scanner.Scan()
	N, _ := strconv.Atoi(scanner.Text())

	// N 種類のゴミの収集スケジュールを取得
	q := make([]int, N+1)
	r := make([]int, N+1)
	for i := 1; i <= N; i++ {
		scanner.Scan()
		values := strings.Split(scanner.Text(), " ")
		q[i], _ = strconv.Atoi(values[0]) // 割る数
		r[i], _ = strconv.Atoi(values[1]) // 余り
	}

	// 次の行で Q を取得
	scanner.Scan()
	Q, _ := strconv.Atoi(scanner.Text())

	// 質問を処理
	result := make([]int, Q)
	for j := 0; j < Q; j++ {
		scanner.Scan()
		values := strings.Split(scanner.Text(), " ")
		t, _ := strconv.Atoi(values[0]) // ゴミの種類
		d, _ := strconv.Atoi(values[1]) // 日付

		// 次にゴミが収集される日を計算
		result[j] = nextCollectionDay(d, t, q, r)
	}

	// 結果を出力
	for _, res := range result {
		fmt.Println(res)
	}
}

/**
 * ゴミが次に収集される日を計算する関数
 * @param d int - 現在の日付
 * @param t int - ゴミの種類
 * @param q []int - 各種類の収集スケジュールの割る数
 * @param r []int - 各種類の収集スケジュールの余り
 * @return int - 次に収集される日
 */
func nextCollectionDay(d, t int, q, r []int) int {
	// 現在の日付が収集日に該当する場合
	if d%q[t] == r[t] {
		return d
	}

	// 次の収集日を計算
	// 日付 d の次で、(日付 % q[t]) が r[t] になる日
	return d + (r[t]-(d%q[t])+q[t])%q[t]
}
