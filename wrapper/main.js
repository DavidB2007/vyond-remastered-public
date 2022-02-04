// Core part of Vyond: Remastered
const RPC = require("discord-rpc");
require("./server");


// Loads env.json for Wrapper version and build number
const env = Object.assign(process.env,
	require('./env'));
// env.json variables
let version = env.WRAPPER_VER;
let build = env.WRAPPER_BLD;


// Discord rich presence
const rpc = new RPC.Client({
	transport: "ipc"
});
rpc.on("ready", () => {
	// Sets RPC activity
	rpc.setActivity({
		// state: "Video List",
		// disabled until automatic rpc status is done
		details: "Version " + version +", build " + build,
		startTimestamp: new Date(),
		largeImageKey: "vyond_large",
		largeImageText: "Vyond: Remastered",
		smallImageKey: "a",
		smallImagetext: "Vyond: Remastered",
	});
	// Logs "Rich presence is on!" in the console
	console.log("Rich presence is on!")
});
// Connects RPC to app
rpc.login({
	clientId: "802649983065129050"
}).catch(
	console.log('RPC connection failed.')
);