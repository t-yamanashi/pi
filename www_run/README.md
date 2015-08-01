■走るWebサーバ

html :　クライアントソース
　test.html  : 操作画面
　test.js　: 操作用js 
　

node : サーバソース
　led_sev.js : メインプログラム このファイルをnode.jsで実行します
　ledlib.js  : モータ制御をするためのライブラリ
　
1.htmlディレクトリの内容をWebサーバへコピー

2. sudo node node/led_srv.js
  ※権限がないとGPIOデバイスがオープンできません

3.クライアントからアクセスし、本体を前に傾けると前進します
