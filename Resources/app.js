// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var PLATFORM = Titanium.Platform.osname;

var globals = {};

(function (){
	
	var AppWindow = require('ui/AppWindow').AppWindow,
		ListView = require("ui/ListView").ListView,
		AppButton = require('ui/AppButton').AppButton,
		PickerView = require('ui/PickerView').PickerView;
	
	var data = [];
	
	data[0] = Titanium.UI.createPickerRow({title: "AS3"});
	data[1] = Titanium.UI.createPickerRow({title: "PHP"});
	data[2] = Titanium.UI.createPickerRow({title: "Python"});
	data[3] = Titanium.UI.createPickerRow({title: "Ruby"});
	data[4] = Titanium.UI.createPickerRow({title: "JavaScript"});
	
	var win = new AppWindow();
	var list = new ListView();
	var btn = new AppButton("Change View");
	var pView = new PickerView(data);
	
	list.top = 90;
	pView.top = 90;
	win.add(list);
	win.add(btn);
	
	btn.addEventListener("click", function(e){
		
		win.remove(list);
		win.add(pView);
	});
	
	win.open();
	
})();
