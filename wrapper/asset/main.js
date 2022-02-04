var mp3Duration = require("mp3-duration");
const chars = require("../character/main");
const fUtil = require("../misc/file");
const caché = require("./caché");

module.exports = {

	load(mId, aId) {
		return caché.load(mId, aId);
	},
	save(buffer, mId, mode, ext) {
		var suffix = `-${mode}.${ext}`;
		return caché.newItem(buffer, mId, "", suffix);
	},
	list(mId, mode) {
		var ret = [];
		var files = caché.list(mId);
		files.forEach((aId) => {
			var dot = aId.lastIndexOf(".");
			var dash = aId.lastIndexOf("-");
			var name = aId.substr(0, dash);
			var ext = aId.substr(dot + 1);
			var fMode = aId.substr(dash + 1, dot - dash - 1);
			switch (fMode) {	
				case 'music':
					var fMode = 'sound';
					var subtype = 'bgmusic';
					break;
				case 'voiceover':
					var fMode = 'sound';
					var subtype = 'voiceover';
					break;
				case 'soundeffect':
					var fMode = 'sound';
					var subtype = 'soundeffect';
					break;
			}
			if (fMode == mode) {
				if (fMode == 'sound') {
					ret.push({ id: aId, ext: ext, name: name, mode: fMode, subtype: subtype});
				} else {
				ret.push({ id: aId, ext: ext, name: name, mode: fMode });
				
			}

			return new Promise(function (resolve, reject) {
				console.log(`${process.env.caché}/${mode}.${aId}`);
				mp3Duration(`${process.env.caché}/${mode}.${aId}`, (e, d) => {
					var dur = d * 1e3;
					console.log(dur);
					var dot = aId.lastIndexOf(".");
					var dash = aId.lastIndexOf("-");
					var name = aId.substr(0, dash);
					var ext = aId.substr(dot + 1);
					var subtype = aId.substr(dash + 1, dot - dash - 1);
					console.log(subtype);
					ret.push({ id: aId, ext: ext, name: name, subtype: subtype, duration: dur });
					console.log(ret);
				});
				resolve(ret);
				reject(ret)
			});
		}
	});
		return ret;
	},
	listAll(mId) {
		var ret = [];
		var files = caché.list(mId);
		files.forEach((aId) => {
			var dot = aId.lastIndexOf(".");
			var dash = aId.lastIndexOf("-");
			var name = aId.substr(0, dash);
			var ext = aId.substr(dot + 1);
			var fMode = aId.substr(dash + 1, dot - dash - 1);
			ret.push({ id: aId, ext: ext, name: name, mode: fMode });
		});
		return ret;
	},
	chars(theme) {
		return new Promise(async (res, rej) => {
			switch (theme) {
				case "custom":
					theme = "family";
					break;
				case "action":
				case "animal":
				case "space":
				case "vietnam":
					theme = "cc2";
					break;
			}

			var table = [];
			var ids = fUtil.getValidFileIndicies("char-", ".xml");
			for (const i in ids) {
				var id = `c-${ids[i]}`;
				if (!theme || theme == (await chars.getTheme(id))) {
					table.unshift({ theme: theme, id: id });
				}
			}
			res(table);
		});
	},
};
