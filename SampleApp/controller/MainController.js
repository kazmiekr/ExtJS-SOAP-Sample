Ext.define('SampleApp.controller.MainController', {
	extend: 'Ext.app.Controller',
	stores: ['People'],
	models: ['Person'],
	views: ['ListView','ManagePerson'],
	init: function() {
		this.control({
			'listView': {
				itemdblclick: this.showEdit
			},
			'listView tool': {
				click: this.showInsert
			},
			'managePerson button[action=save]': {
				click: this.updatePerson
			},
			'managePerson button[action=delete]': {
				click: this.deletePerson
			}
		})
	},
	showInsert: function(){
		var view = Ext.widget('managePerson');
		var newRecord = Ext.create('SampleApp.model.Person');
		view.setTitle('Insert Person');
		view.down('form').loadRecord(newRecord);
	},
	showEdit: function(grid, record){
		var view = Ext.widget('managePerson');
		view.down('form').loadRecord(record);
	},
	updatePerson: function(button){
		var win    = button.up('window'),
			form   = win.down('form'),
			record = form.getRecord(),
			values = form.getValues();
		if (form.getForm().isValid()){
			record.set(values);
			if (record.get('id') == 0){
				this.getPeopleStore().add(record);
			}
			win.close();
			this.getPeopleStore().sync();
		}
	},
	deletePerson: function(button){
		var win    = button.up('window'),
			form   = win.down('form'),
			record = form.getRecord();
		win.close();
		this.getPeopleStore().remove(record);
		this.getPeopleStore().sync();
	}
});