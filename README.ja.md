# Hide Option Pane

## これは何？

必要のない設定パネルを、以下の真偽値の設定を変更するだけで隠せるようにします。

	pref("extensions.hideoptionpane@clear-code.com.browser.paneMain.enabled", true);
	pref("extensions.hideoptionpane@clear-code.com.browser.paneTabs.enabled", true);
	pref("extensions.hideoptionpane@clear-code.com.browser.paneContent.enabled", true);
	pref("extensions.hideoptionpane@clear-code.com.browser.paneFeeds.enabled", true); // for old Firefox
	pref("extensions.hideoptionpane@clear-code.com.browser.paneApplications.enabled", true);
	pref("extensions.hideoptionpane@clear-code.com.browser.panePrivacy.enabled", true);
	pref("extensions.hideoptionpane@clear-code.com.browser.paneSecurity.enabled", true);
	pref("extensions.hideoptionpane@clear-code.com.browser.paneSync.enabled", true);
	pref("extensions.hideoptionpane@clear-code.com.browser.paneAdvanced.enabled", true);
	pref("extensions.hideoptionpane@clear-code.com.messenger.paneGeneral.enabled", true);
	pref("extensions.hideoptionpane@clear-code.com.messenger.paneDisplay.enabled", true);
	pref("extensions.hideoptionpane@clear-code.com.messenger.paneCompose.enabled", true);
	pref("extensions.hideoptionpane@clear-code.com.messenger.paneSecurity.enabled", true);
	pref("extensions.hideoptionpane@clear-code.com.messenger.paneApplications.enabled", true);
	pref("extensions.hideoptionpane@clear-code.com.messenger.panePrivacy.enabled", true); // for old Thunderbird
	pref("extensions.hideoptionpane@clear-code.com.messenger.paneDownloads.enabled", true); // for old Thunderbird
	pref("extensions.hideoptionpane@clear-code.com.messenger.paneAdvanced.enabled", true);

これ以外にも、将来のバージョンのFirefox/Thunderbirdで追加されたパネルについて、 `extensions.hideoptionpane@clear-code.com.browser.(pane id).enabled` のような設定を作成する事で同様に表示・非表示を管理することができます。

このアドオンは主に法人利用を想定して開発されています。
