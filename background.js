chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		let url = tabs[0].url;
		if (
			url ===
			"https://oceanhero.today/web?q=turpis+nunc+eget+lorem+dolor+sed+viverra+ipsum+nunc+aliquet"
		) {
			chrome.tabs.update({
				url:
					"https://oceanhero.today/web?q=turpis+nunc+eget+lorem+dolor+sed+viverra+ipsum+nunc",
				active: true,
			});
		} else if (
			url ===
			"https://oceanhero.today/web?q=turpis+nunc+eget+lorem+dolor+sed+viverra+ipsum+nunc"
		) {
			chrome.tabs.update({
				url:
					"https://oceanhero.today/web?q=turpis+nunc+eget+lorem+dolor+sed+viverra+ipsum+nunc+aliquet",
				active: true,
			});
		}
	});
});
