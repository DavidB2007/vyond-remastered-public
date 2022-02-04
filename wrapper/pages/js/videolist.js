// This loads the video list's content
var json;
var tbody = document.getElementsByTagName('tbody')[0];
var loadMore = document.getElementById('load_more');
const listReq = new XMLHttpRequest();
listReq.open('GET', '/movieList');
listReq.send();

var C = 0;
function loadRows() {
	let c = C; C += 69;
	for (; c < C; c++) {
		if (c > json.length - 1) {
			loadMore.remove();
			break;
		}

		const tbl = json[c];
		const date = tbl.date.substr(0, 10) + ' ' + tbl.date.substr(11);
		tbody.insertAdjacentHTML('beforeend',
			'<tr><td><img src="/movie_thumbs/' + tbl.id + '.png"></td><td><div>' + tbl.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</div><div>' + tbl.desc + '<br /> (' + tbl.id + ') ' + tbl.durationString + '</div></div></div></td><td><span>' + date + '</span></td><td><a href="javascript:;" onclick="popup(\'' + tbl.id + '\')"></a><a href="/go_full?movieId=' + tbl.id + '"></a><a href="/movies/' + tbl.id + '.xml" download="' + tbl.title + '"></a></td></tr>');
	}
}

loadMore.onclick = loadRows;
listReq.onreadystatechange = function (e) {
	if (listReq.readyState != 4) return;
	json = JSON.parse(listReq.responseText);
	loadRows();
}

function popup(id) {
	window.open('/player?movieId=' + id, 'MsgWindow', 'width=1280,height=723,left=' + (screen.width / 2 - 640) + ',top=' + (screen.height / 2 - 360));
}
	
