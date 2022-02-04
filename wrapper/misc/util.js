module.exports = {
	xmlFail(message = "Something broke and got grounded.") {
		return `<error><code>ERR_ASSET_404</code><message>${message}</message><text></text></error>`;
	},
};
