#include <stdio.h>

int main() {
    int k, g, m;
    
    // 標準入力から k, g, m を受け取る
    scanf("%d %d %d", &k, &g, &m);

    // グラスとマグカップの初期状態
    int glass = 0;
    int mug = 0;

    // 指定された回数 k だけ操作を繰り返す
    for (int i = 0; i < k; i++) {
        if (glass == g) {
            // グラスが満杯ならグラスの水を捨てる
            glass = 0;
        } else if (mug == 0) {
            // マグカップが空ならマグカップを満たす
            mug = m;
        } else {
            // マグカップからグラスに水を移す
            int transfer = (g - glass < mug) ? g - glass : mug;
            glass += transfer;
            mug -= transfer;
        }
    }

    // 最終的なグラスとマグカップの水の量を出力
    printf("%d %d\n", glass, mug);

    return 0;
}
