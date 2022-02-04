const formidable = require('formidable');
const parse = require('./parse');
const fUtil = require('../fileUtil');
const fs = require('fs');

module.exports = function (req, res, url) {
	if (req.method != 'POST' || url.path != '/upload_character') return;
	new formidable.IncomingForm().parse(req, (e, f, files) => {
		const path = files.import.path, buffer = fs.readFileSync(path);
		const numId = fUtil.getNextFileId('char-', '.xml');
		parse.unpackCharXml(buffer, numId);
		fs.unlinkSync(path);
		res.statusCode = 302;
		const xml = Buffer.from(buffer);
		const tIDbeg = xml.indexOf('" theme_id="') + 12;
		const tIDend = xml.indexOf('" x="');
		const themeId = xml.subarray(tIDbeg, tIDend).toString();
		const url = `/cc?themeId=${themeId}&original_asset_id=c-${numId}`
		res.setHeader('Location', url);
		res.end();
	});
	return true;
}
