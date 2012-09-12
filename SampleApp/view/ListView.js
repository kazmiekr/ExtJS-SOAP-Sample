Ext.define('SampleApp.view.ListView', {
	extend:'Ext.grid.Panel',
	title: 'Person List',
	alias: 'widget.listView',
	store: 'People',
	columns: [
		{
			text: 'Id',
			flex: 1,
			dataIndex: 'id'
		},
		{
			text: 'First Name',
			flex: 1,
			dataIndex: 'firstName'
		},
		{
			text: 'Last Name',
			flex: 1,
			dataIndex: 'lastName'
		}
	],
	tools: [{
		type: 'plus'
	}]
});