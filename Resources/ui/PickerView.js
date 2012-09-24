exports.PickerView = function(args){
		
	var self = Titanium.UI.createPicker();
	var data = [];
	
	for (var i = 0; i< args.length; i++){
		data[i] = args[i];
	}
	self.add(data);
	self.selectionIndicator = true;
	
	return self;
};
