#include <stdio.h>

int main() {
    int n, s, k;
    
    // 最初の行の n, s, k を標準入力から取得
    scanf("%d %d %d", &n, &s, &k);

    int sumPrice = 0;

    // n 行の価格と数量を取得し、合計価格を計算
    for (int i = 0; i < n; i++) {
        int p, q;
        scanf("%d %d", &p, &q);
        sumPrice += p * q;
    }

    // 合計価格が s 未満の場合、k を足した価格を出力
    if (sumPrice < s) {
        printf("%d\n", sumPrice + k);
    } else {
        printf("%d\n", sumPrice);
    }

    return 0;
}
