/* videoタグ出力用js
 * @author odego
 * @history 2015/01/14 作成
 */
function writeVideo(picId,picSrc,picHref){
	
	//UA取得と切り分け
	var ua = {};
	ua.name = window.navigator.userAgent.toLowerCase();
	ua.isiPhone = ua.name.indexOf('iphone') >= 0;
	ua.isiPad = ua.name.indexOf('ipad') >= 0;
	ua.isiOS = (ua.isiPhone || ua.isiPad);
	ua.isAndroid = ua.name.indexOf('android') >= 0;
	ua.isTablet = (ua.isiPad || (ua.isAndroid && ua.name.indexOf('mobile') < 0));
	if (ua.isiOS) {
		ua.verArray = /(os)\s([0-9]{1,})([\_0-9]{1,})/.exec(ua.name);
		if (ua.verArray) {
			ua.ver = parseInt(ua.verArray[2], 10);
		}
	}
	if (ua.isAndroid) {
		ua.verArray = /(android)\s([0-9]{1,})([\.0-9]{1,})/.exec(ua.name);
		if (ua.verArray) {
			ua.ver = parseInt(ua.verArray[2], 10);
		}
	}
	
	var dataImg = 'data:image/jpeg;base64,'+
'/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QNvaHR0cDov'+
'L25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENl'+
'aGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4'+
'OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6'+
'NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5'+
'OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHht'+
'bG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0i'+
'aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1w'+
'PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9'+
'InhtcC5kaWQ6NTVFQ0YyRkMxRTlERTQxMUJBRDZDN0U1NjJCM0I3MkYiIHhtcE1NOkRvY3VtZW50'+
'SUQ9InhtcC5kaWQ6MDUxQTREQUM5RDFGMTFFNDhDNjZBMjE4RUNBNUEzNjAiIHhtcE1NOkluc3Rh'+
'bmNlSUQ9InhtcC5paWQ6MDUxQTREQUI5RDFGMTFFNDhDNjZBMjE4RUNBNUEzNjAiIHhtcDpDcmVh'+
'dG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZy'+
'b20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NUVDRjJGQzFFOURFNDExQkFENkM3RTU2MkIz'+
'QjcyRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NUVDRjJGQzFFOURFNDExQkFENkM3RTU2'+
'MkIzQjcyRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94'+
'cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAICAgICAgICAgIDAgICAwQDAgID'+
'BAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAwBAwMDBQQFCQYGCQ0L'+
'CQsNDw4ODg4PDwwMDAwMDw8MDAwMDAwPDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEI'+
'AHgAtAMBEQACEQEDEQH/xAB7AAEAAQQDAQAAAAAAAAAAAAAABgMEBwkBAggFAQEAAAAAAAAAAAAA'+
'AAAAAAAAEAABBAECAwUEBggHAAAAAAAAAQIDBAURBiExElEiExQHQWIVCGFxQnIjM1JjczRENRY3'+
'MkODo7V2GBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A0hgAAAAAAAAAAAAAAAAAAAAA'+
'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
'AAAAAAAAAAAAAAAAAAABJ9u7Qze5vMTUIY6+NpK1Mjm7kja9Kt1ckkmfw6l+yxur3fZaoEwZtjYG'+
'OTpyGdyu5LCfmNxUEdGrr+rsW/Elcn3q7QKi4z0ym7iY3c+PVf4hclSuafT4XkKuv1dYFlP6ctyL'+
'XSbKzke5ZWoq/Ap4fJZVUTj+HXV8scy+7DK9/uAYzex8T3xSsdHJG5WyRuRUc1yLoqKi8UVFA6gA'+
'AAAAAAAAAAAAAAAAABMdm7Zi3Bct2clO+ltzBwpbz96NEWRI1d0xwQ9XBZZnqjGIvLi5e61wEtze'+
'ely3l6kFdmKweNRWYbA11XwKzF5rx4vkdpq+R3ecvP2IgfIdVtNqx3XVpW0ppXwQ21Y5InyxtY57'+
'Gv00VzUkaqoi6oip2oBQA5a5zXI5qq1zV1a5OCoqclRQJZfqt9RKM/itRd+42B01S8n+LM14W9T4'+
'J/0rMbEV0b+ciIrHau6AMJAAAAAAAAAAAAAAAAAAABmSWP4Lsra+Fj7k2ca/cOY05udI99enG7tS'+
'OGNZG/tXARsDan8mGz9s759A93be3bha2dw9veNzxKllmvS74dj0R8bk0dG9NeDmqjk9igYY9b/k'+
'r3JtHzm4/TBbG7duM6pZ8A5OvKVG818NGonmWJ7qI/3XcXAeFXsfG98cjFjkjVWvY5NFaqcFRUXk'+
'qAV6VyzjrlW/SmdXuUpmT1bDODmSRuRzHJ9KKmoFj6j4+rS3TZtY+FtfG5+vXzNCuxNGRNvRNmkh'+
'YnZFKr40+6BBAAAAAAAAAAAAAAAAAABmvd/71gOj8n+mNveD2fymr4n+51ARQDbv8gn9ndy/9yuf'+
'8fjgPcIGs350P/P3Vb8L+8OqdfwHw+nX2/F/8vXTlp+Ny17gGtkC79Rf3X086vzv6Y/G7f5rkejX'+
'/T6QMaAAAAAAAAAAAAAAAAAADMksnxrZW181H35sG1+3swic2uje+xTkd2JJDIsbf2TgI2BtT+TD'+
'eG2djege7tw7tzVbBYepvG54luy/Tqd8Ox6oyNqaukeunBrUVy+xAMM+t/zqbk3d5vbvpgljaW3H'+
'9UU+fcvRlLbeS+GrVXyzF91Vf7zeLQPCj3vke+SR6ySSKrnvcuquVeKqqrzVQK9KnZyNyrQpQusX'+
'LszIKtdnFz5JHI1jU+lVXQCx9R8hVu7ps1MfM2xjcBXr4ahYYurJW0YmwyTMXsllR8ifeAggAAAA'+
'AAAAAAAAAAAAAAmOzdzRbfuWq2Tgku7czkSVc/RjVEkWNHI6OeFXcElheiPYq8+LV7rnAS3NYGXE'+
'+XtwWGZTB5JFfhs9XRfAssTmnHiyRuuj43d5q8/Yqh8h1q06rHSdZldShlfPDUV7liZLI1jXvazX'+
'RHOSNqKqJqqInYgFADlrXOcjWornOXRrU4qqryREAll+0307oz+K5E37koHQ1KKL3sPXmarZJp/0'+
'bMjHK2NnONFV7tHdAGEgAAAAAAAAAAAAAAAAAAAASfbu7s1tnzENCaOxjbqtXI4S5G2xSsdPJZIX'+
'8OpNe69uj2/ZcgEwZufYGRTqv4LK7bsL+Y7FTx3quv6uvbWOVqfesPA7rk/TOHvpktz5BU/h1xtK'+
'nr9Hi+ftafX0AWc/qM3HNdHsrBx7alcip8dnm89lUReH4dhWRRwr70MTH++BjN73yvfLK90kkjld'+
'JI5VVznKuqqqrxVVUDqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z';
	
	var picImg = new Image();
	var picWidth = "";
	var picHeight = "";
	var pwSize = 180;
	var phSize = 120;
	var noImg = "";
	var noVideo = "";
	var playBtn = 'js-video-play-btn';
	
	//サムネイル
	if( picSrc == 0 || picSrc == null || picSrc == undefined ){
		noImg = 1;
		picSrc = dataImg;
	}
	//表示場所
	if( picId == 0 || picId == null || picId == undefined || $(picId).size() === 0 ){
		$('<div id="js-video-library"></div>').appendTo('body');
		picId = '#js-video-library';
	}
	//picId = "#"+picId;

	//動画ファイル
	if( picHref == 0 || picHref == null || picHref == undefined ){
		noVideo = 1;
		picHref = '<p>動画ファイルがありません。</p>';
	}
	
	$(picImg).on('load',function(){
		
		if(noImg == 1){
			picWidth = pwSize;
			picHeight = phSize;
		} else {
			picWidth = picImg.naturalWidth;
			picHeight = picImg.naturalHeight;
		}
		var cssBody  ='position:relative;max-width:100%;width:'+picWidth+'px;height:'+picHeight+'px;overflow:hidden';
		var cssCover ='position:absolute;top:0;left:0;display:block;max-width:100%;width:'+picWidth+'px;height:'+picHeight+'px;padding:0;margin:0;background:none;border:none;';
		
		var arrVideo = new Array();
		arrVideo += '<div class="use-pic__pic video-box" style="'+cssBody+'">';
		if(noVideo == 1){
			arrVideo += ''+picHref+'';
		} else {
			arrVideo += '<video id="js-video" class="video-box__main" src="'+picHref+'" preload="none" width="'+picWidth+'" height="'+picHeight+'" poster="'+picSrc+'" controls>';
			arrVideo += '<a href="'+ picHref +'" class="video-box__hedge hedge"><img src="'+picSrc+'" class="hedge__pic" alt="videoタグがないときのリンク再生用サムネイル" /></a>';
			arrVideo += '</video>';
			if (ua.isiPhone) { //左記の端末は強制ポップアップ動画再生のため
				arrVideo += '<img src="'+ picSrc +'" id="js-video-cover" class="video-box__cover" style="'+cssCover+'" />';
				arrVideo += '<a href="javascript:;" id="'+playBtn+'" class="video-box__btn" style="'+cssCover+'"></a>';
			}
		}
		arrVideo += '</div>';
		
		$(picId).addClass('active').append(arrVideo);
		
	});

	picImg.src = picSrc;
	
	$(picImg).error(function(){
		picSrc = dataImg;
		setTimeout(function() {
			$(this).on('load',function(){
				picWidth = pwSize;
				picHeight = phSize;
			});
			
		}, 0);
		
		picImg.src = picSrc;
	});
	
	//iOS用にaタグで動画再生制御
	$(document).on("click",'#'+playBtn+'',function(){
		var videoId = document.getElementById("js-video");
		if( $(this).hasClass("ended") ){ $(this).removeClass("ended"); }
		if (!ua.isiPhone || !ua.isAndroid && ua.ver == 2) {
			videoId.addEventListener("ended",endMovie,false);
		}
		if (videoId.paused) {
			videoId.play();
		} else {
			videoId.pause();
		}
	});
	function endMovie(){
		$("#'+playBtn+'").addClass("ended");
	};
}