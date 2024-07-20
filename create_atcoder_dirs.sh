#!/bin/bash

# 引数の数をチェック
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <number>"
    exit 1
fi

# 引数から番号を取得
NUMBER=$1

# Atcoder_#番号のディレクトリを作成
BASE_DIR="Atcoder_#${NUMBER}"
mkdir -p "$BASE_DIR"

# javascriptとrubyのディレクトリを作成
mkdir -p "${BASE_DIR}/javascript"
mkdir -p "${BASE_DIR}/ruby"

# TRAIL.mdファイルを作成して内容を追加
TRAIL_FILE="${BASE_DIR}/TRAIL.md"
cat <<EOL > "$TRAIL_FILE"
# A問題

## ruby

## javascript 

## C

# B問題

## ruby

## javascript 

## C

EOL

echo "ディレクトリとファイルが作成されました: $BASE_DIR"
