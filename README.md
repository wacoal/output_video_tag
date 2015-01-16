output-video-tag
========

<p>モバイル専用videoタグ出力js</p>

<dl>
<dt>jQueryのバージョン</dt>
<dd>
/js/jquery-1.8.3.min.js より新しいもの<br>
(on を使っているので)
</dd>
<dt>呼び出し</dt>
<dd>
writeVideo(picId,picSrc,picHref);
</dd>
<dt>引数</dt>
<dd>
<ul>
<li>picId   = 表示させたい箇所のID (#は必須)</li>
<li>picSrc  = サムネイル画像の値</li>
<li>picHref = 動画ファイルの値</li>
</ul>
</dd>
</dl>

<p>端末によって、videoタグの挙動がちがう。</p>
<p>iPhoneとAndroid2.xが、強制ポップアップ再生。</p>
<p>iPad/Android4.xが、その場で再生</p>