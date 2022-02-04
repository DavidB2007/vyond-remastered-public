		var json;
		var grid = document.getElementById('grid');
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
				grid.insertAdjacentHTML('beforeend',
					'<div id="video"><div id="thumbnail"><a id="preview_thumb" href="javascript:;" onclick="popup(\'' + tbl.id + '\')"><img src="/movie_thumbs/' + tbl.id + '.png"></a><div id="overlay"><div id="duration">' + tbl.durationString + '</div></div></div><div id="title">' + tbl.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</div><div id="movieid">Movie ID: ' + tbl.id + '</div><div id="description"><span>' + tbl.desc + '</span></div><div id="date"><span>' + date + '</span></div><div id="buttons"><a href="javascript:;" onclick="popup(\'' + tbl.id + '\')"></a><a href="/go_full?movieId=' + tbl.id + '"></a><a href="/movies/' + tbl.id + '.xml" download="' + tbl.title + '"></a></div></div>');
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