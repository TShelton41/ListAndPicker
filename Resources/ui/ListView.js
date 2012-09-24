exports.ListView = function(){
	
	var data = [{title: "AS3"}, {title: "Python"}, {title: "PHP"}, {title: "Ruby"}, {title: "JavaScript"}];
	
	var self = Titanium.UI.createTableView({
		data: data
	});
	
	
	return self;
};
