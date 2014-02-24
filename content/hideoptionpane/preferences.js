/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
var HideOptionPane = {
	handleEvent : function(aEvent)
	{
		switch (aEvent.type)
		{
			case 'DOMContentLoaded':
				window.removeEventListener('DOMContentLoaded', this, false);
				this.hidePanes();
				break;

			case 'load':
				window.removeEventListener('load', this, false);
				this.initSelection();
				break;
		}
	},

	hidePanes : function()
	{
		var prefix = this.root;
		this.buttons.forEach(function(aButton) {
			var name = aButton.getAttribute('pane');
			var enabled = this.getPref(prefix+name+'.enabled');
			if (enabled === null) return;
			if (!enabled) {
				aButton.setAttribute('hidden', true);
				document.getElementById(name).style.visibility = 'hidden';
			}
		}, this);
	},

	initSelection : function()
	{
		var selected = document.documentElement.lastSelected;
		if (
			selected &&
			this.getPref(this.root+selected+'.enabled')
			)
			return;

		var firstVisible;
		this.buttons.some(function(aButton) {
			firstVisible = aButton.getAttribute('pane');
			return aButton.getAttribute('hidden') != 'true';
		}, this);
		if (!firstVisible) return;
		document.documentElement.lastSelected = firstVisible;
		document.documentElement.showPane(document.getElementById(firstVisible));
	},

	get buttons()
	{
		var buttons = document.documentElement._selector.childNodes;
		return Array.slice(buttons);
	},

	get root()
	{
		return 'extensions.hideoptionpane@clear-code.com.'+this.product+'.';
	},

	get product()
	{
		var matched = location.href.match(/^chrome:\/\/([^\/]+)\/content\//);
		return matched[1];
	},

	Pref : Components.classes['@mozilla.org/preferences;1'] 
		.getService(Components.interfaces.nsIPrefBranch)
		.QueryInterface(Components.interfaces.nsIPrefBranch2),

	getPref : function(aKey)
	{
		try {
			switch (this.Pref.getPrefType(aKey))
			{
				case this.Pref.PREF_STRING:
					return decodeURIComponent(escape(this.Pref.getCharPref(aKey)));
				case this.Pref.PREF_INT:
					return this.Pref.getIntPref(aKey);
				default:
					return this.Pref.getBoolPref(aKey);
			}
		}
		catch(e) {
		}
		return null;
	}
};

window.addEventListener('DOMContentLoaded', HideOptionPane, false);
window.addEventListener('load', HideOptionPane, false);
