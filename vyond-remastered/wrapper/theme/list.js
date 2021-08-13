/* Looking for a written form of the themes list?
"action"
"akon"
"animal"
"anime"
"ben10"
"bizmodels"
"botdf"
"bunny"
"business"
"cal"
"cc_store"
"chibi"
"chowder"
"christmas"
"comic"
"common"
"commoncraft"
"commu"
"custom"
"domo"
"fullenergy"
"infographics"
"monkeytalk"
"monstermsh"
"ninja"
"ninjaanime"
"politic"
"politics2"
"retro"
"sf"
"space"
"spacecitizen"
"startrek"
"stick"
"sticklybiz"
"street"
"underdog"
"underwater"
"vietnam"
"vsfx"
"whiteboard"
"willie"
*/

const fUtil = require('../fileUtil');
const folder = process.env.THEME_FOLDER;
module.exports = function (req, res, url) {
	if (req.method != 'POST' || url.path != '/goapi/getThemeList/') return;
	res.setHeader('Content-Type', 'application/zip');
	fUtil.zippy(`${folder}/themelist.xml`, 'themelist.xml').then(b => res.end(b));
	return true;
}
