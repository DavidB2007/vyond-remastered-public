const loadPost = require('../request/post_body');
const mp3Duration = require('mp3-duration');
const voices = require('./info').voices;
const asset = require('../asset/main');
const get = require('../request/get');
const qs = require('querystring');
const brotli = require('brotli');
const https = require('https');
const http = require('http');

function processVoice(voiceName, text) {
	return new Promise((res, rej) => {
		const voice = voices[voiceName];
		switch (voice.source) {
                        case "polly": {
                var req = https.request({
                        hostname: "voicemaker.in",
						port: "443",
                        path: "/voice/standard",
                        method: "POST",
                        headers: {
							"content-type": "application/json",
							referer: "https://voicemaker.in/",
                            "x-requested-with": "XMLHttpRequest",
                        },
                    },
                    (r) => {
						var buffers = [];
						r.on("data", (b) => buffers.push(b));
                        r.on("end", () => {
							const json = Buffer.concat(buffers);
							const beg = json.indexOf('"path":') + 9;
					        const end = json.indexOf('",', beg);
					        const sub = json.subarray(beg, end).toString();
							console.log("Successfully retrieved MP3 stream:");
							console.log(`https://voicemaker.in${sub}`);
							get(`https://voicemaker.in${sub}`).then(res).catch(rej);
						});
						r.on("error", rej);
					});
					req.write(`{"Engine":"standard","Provider":"ai101","OutputFormat":"mp3","VoiceId":"${voice.arg}","LanguageCode":"${voice.language}-${voice.country}","SampleRate":"22050","effect":"default","master_VC":"advanced","speed":"0","master_volume":"0","pitch":"0","Text":"${text}","TextType":"text","fileName":""}`);
					req.end();
					break;
			}
			case "pollyNeural": {
                var req = https.request({
                        hostname: "voicemaker.in",
						port: "443",
                        path: "/voice/standard",
                        method: "POST",
                        headers: {
							"content-type": "application/json",
							referer: "https://voicemaker.in/",
                            "x-requested-with": "XMLHttpRequest",
                        },
                    },
                    (r) => {
						var buffers = [];
						r.on("data", (b) => buffers.push(b));
                        r.on("end", () => {
							const json = Buffer.concat(buffers);
							const beg = json.indexOf('"path":') + 9;
					        const end = json.indexOf('",', beg);
					        const sub = json.subarray(beg, end).toString();
							console.log("Successfully retrieved MP3 stream:");
							console.log(`https://voicemaker.in${sub}`);
							get(`https://voicemaker.in${sub}`).then(res).catch(rej);
						});
						r.on("error", rej);
					});
					req.write(`{"Engine":"neural","Provider":"ai101","OutputFormat":"mp3","VoiceId":"${voice.arg}","LanguageCode":"${voice.language}-${voice.country}","SampleRate":"22050","effect":"default","master_VC":"advanced","speed":"0","master_volume":"0","pitch":"0","Text":"${text}","TextType":"text","fileName":""}`);
					req.end();
					break;
                    }
           case "cepstral": {
                https.get('https://www.cepstral.com/en/demos', r => {
                    const cookie = r.headers['set-cookie'];
                    var q = qs.encode({
                        voice: voice.arg,
                        voiceText: text,
                        rate: 170,
                        pitch: 1,
                        sfx: 'none',
                    });
                    var buffers = [];
                    var req = https.get({
                        host: 'www.cepstral.com',
                        path: `/demos/createAudio.php?${q}`,
                        headers: { Cookie: cookie },
                        method: 'GET',
                    }, r => {
                        r.on('data', b => buffers.push(b));
                        r.on('end', () => {
                            var json = JSON.parse(Buffer.concat(buffers));
                            get(`https://www.cepstral.com${json.mp3_loc}`).then(res).catch(rej);
                        })
                    });
                });
                break;
            }
			case 'vocalware': {
				var q = qs.encode({
					EID: voice.arg[0],
					LID: voice.arg[1],
					VID: voice.arg[2],
					TXT: text,
					IS_UTF8: 1,
					HTTP_ERR: 1,
					ACC: 3314795,
					API: 2292376,
					vwApiVersion: 2,
					CB: 'vw_mc.vwCallback',
				});
				var req = https.get({
					host: 'cache-a.oddcast.com',
					path: `/tts/gen.php?${q}`,
					method: 'GET',
					headers: {
						Referer: 'https://www.vocalware.com/index/demo',
						Origin: 'https://www.vocalware.com',
						'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
					},
				}, r => {
					var buffers = [];
					r.on('data', d => buffers.push(d));
					r.on('end', () => res(Buffer.concat(buffers)));
					r.on('error', rej);
				});
				break;
			}
			case 'voicery': {
				var q = qs.encode({
					text: text,
					speaker: voice.arg,
					ssml: text.includes('<'),
					//style: 'default',
				});
				https.get({
					host: 'www.voicery.com',
					path: `/api/generate?${q}`,
				}, r => {
					var buffers = [];
					r.on('data', d => buffers.push(d));
					r.on('end', () => res(Buffer.concat(buffers)));
					r.on('error', rej);
				});
				break;
			}
			case 'watson': {
				var q = qs.encode({
					text: text,
					voice: voice.arg,
					download: true,
					accept: "audio/mp3",
				});
				console.log(https.get({
					host: 'text-to-speech-demo.ng.bluemix.net',
					path: `/api/v3/synthesize?${q}`,
				}, r => {
					var buffers = [];
					r.on('data', d => buffers.push(d));
					r.on('end', () => res(Buffer.concat(buffers)));
					r.on('error', rej);
				}));
				break;
			}
			case 'acapela': {
				var q = qs.encode({
					cl_login: "VAAS_MKT",
					req_snd_type: "",
					req_voice: voice.arg,
					cl_app: "seriousbusiness",
					req_text: text,
					cl_pwd: "M5Awq9xu",
				});
				console.log(http.get({
					host: 'vaassl3.acapela-group.com',
					path: `/Services/AcapelaTV/Synthesizer?${q}`,
					method: 'GET',
				}, r => {
					var buffers = [];
					r.on('data', d => buffers.push(d));
					r.on('end', () => {
							const html = Buffer.concat(buffers);
							const beg = html.indexOf('&snd_url=') + 9;
							const end = html.indexOf('&', beg);
                            const loc = `https${html.subarray(beg+4, end).toString()}`;
                            get(loc).then(res).catch(rej);
						})
					r.on('error', rej);
				}));
				break;
			}
            case 'cereproc': {
                const req = https.request({
                    hostname: 'www.cereproc.com',
                    path: '/themes/benchpress/livedemo.php',
                    method: 'POST',
                    headers: {
                        "content-type": "text/xml",
                        'accept-encoding': 'gzip, deflate, br',
                        'origin': 'https://www.cereproc.com',
                        'referer': 'https://www.cereproc.com/en/products/voices',
                        'x-requested-with': 'XMLHttpRequest',
                        'cookie': 'has_js=1; _ga=GA1.2.1662842090.1593634776; _gid=GA1.2.1522751685.1593634776; Drupal.visitor.liveDemo=qyzyt95c789; cookie-agreed=2',
                    },
                }, r => {
                    var buffers = [];
                    r.on('data', d => buffers.push(d));
                    r.on('end', () => {
                        const xml = String.fromCharCode.apply(null, brotli.decompress(Buffer.concat(buffers)));
                        const beg = xml.indexOf('https://cerevoice.s3.amazonaws.com/');
                        const end = xml.indexOf('.mp3', beg) + 4;
                        const loc = xml.substr(beg, end - beg).toString();
                        get(loc).then(res).catch(rej);
                    })
                    r.on('error', rej);
                });
                req.end(`<speakExtended key='qyzyt95c789'><voice>${voice.arg}</voice><text>${text}</text><audioFormat>mp3</audioFormat></speakExtended>`);
                break;
            }
            case 'ivona': {
                const req = https.request({
                    host: 'readloud.net',
                    path: voice.arg,
                    method: 'POST',
                    port: '443',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
                }, r => {
                    var buffers = [];
                    r.on('data', d => buffers.push(d));
                    r.on('end', () => {
                        const html = Buffer.concat(buffers);
                        const beg = html.indexOf('/tmp/');
                        const end = html.indexOf('.mp3', beg) + 4;
                        const sub = html.subarray(beg, end).toString();
                        const loc = `https://readloud.net${sub}`;
                        get(loc).then(res).catch(rej);
                    });
                    r.on('error', rej);
                });
                req.write(qs.encode({
                    but1: text,
                    but: 'Enviar',
                }));
                req.end();
                break;
            }
		}
	});
}

module.exports = function (req, res, url) {
	if (req.method != 'POST' || url.path != '/goapi/convertTextToSoundAsset/') return;
	loadPost(req, res).then(data => {
		processVoice(data.voice, data.text).then(buffer => {
			mp3Duration(buffer, (e, duration) => {
				if (e || !duration) return res.end(1 + process.env.FAILURE_XML);

				const title = `[${voices[data.voice].desc}] ${data.text}`;
				const id = asset.saveLocal(buffer, data.presaveId, '-tts.mp3');
				res.end(`0<response><asset><id>${id}</id><enc_asset_id>${id}</enc_asset_id><type>sound</type><subtype>tts</subtype><title>${title}</title><published>0</published><tags></tags><duration>${1e3 * duration}</duration><downloadtype>progressive</downloadtype><file>${id}</file></asset></response>`)
			});
		});
	});
	return true;
}