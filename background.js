chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	chrome.tabs.query({}, tabs => {
		let length = tabs.length;
		for (i = 0; i <= length; i++) {
			let currTab = tabs[i];
			let url = currTab.url;
			let id = currTab.id;

			if (
				url ===
				"https://oceanhero.today/web?q=turpis+nunc+eget+lorem+dolor+sed+viverra+ipsum+nunc+aliquet"
			) {
				chrome.tabs.update(id, {
					url:
						"https://oceanhero.today/web?q=turpis+nunc+eget+lorem+dolor+sed+viverra+ipsum+nunc",
				});
			} else if (
				url ===
				"https://oceanhero.today/web?q=turpis+nunc+eget+lorem+dolor+sed+viverra+ipsum+nunc"
			) {
				chrome.tabs.update(id, {
					url:
						"https://oceanhero.today/web?q=turpis+nunc+eget+lorem+dolor+sed+viverra+ipsum+nunc+aliquet",
				});
			}
		}
	});
});
