Ext.define('SampleApp.model.Person', {
	extend: 'Ext.data.Model',
	fields: [
		{
			name: 'id',
			type: 'int'
		},
		{
			name: 'firstName',
			type: 'string'
		},
		{
			name: 'lastName',
			type: 'string'
		}
	]
});