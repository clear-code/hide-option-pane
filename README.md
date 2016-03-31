# Hide Option Pane

Download Link: https://addons.mozilla.org/firefox/addon/hide-option-pane/

## What's this?

Provides ability to hide needless option panes via those boolean preferences:

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

Moreover, on future versions of Firefox/Thunderbird, this will work with preferences like `extensions.hideoptionpane@clear-code.com.browser.(pane id).enabled`.

This is mainly designed for corporate-use.
