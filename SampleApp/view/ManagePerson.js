Ext.define('SampleApp.view.ManagePerson', {
	extend: 'Ext.window.Window',
	alias: 'widget.managePerson',
	title: 'Edit Person',
	layout: 'fit',
	width: 300,
	modal: true,
	autoShow: true,
	initComponent: function() {
		this.items = [
			{
				xtype: 'form',
				items: [
					{
						xtype: 'textfield',
						name : 'firstName',
						fieldLabel: 'First Name',
						allowBlank: false
					},
					{
						xtype: 'textfield',
						name : 'lastName',
						fieldLabel: 'Last Name',
						allowBlank: false
					}
				],
				defaults:{
					padding: 5
				}
			}
		];
		this.buttons = [
			{
				text: 'Save',
				action: 'save'
			},
			{
				text: 'Delete',
				action: 'delete'
			},
			{
				text: 'Cancel',
				scope: this,
				handler: this.close
			}
		];
		this.callParent(arguments);
	}
});