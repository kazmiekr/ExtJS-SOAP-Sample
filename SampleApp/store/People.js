Ext.define('SampleApp.store.People', {
	extend:'Ext.data.Store',
	model:'SampleApp.model.Person',
	autoLoad:true,
	proxy: {
		type: 'soap',
		url: '/cfusion/samples/People.cfc',
		api: {
			create: 'createPerson',
			read: 'getPeople',
			update: 'updatePerson',
			destroy: 'deletePerson'
		},
		operationParam: 'operation',
		targetNamespace: 'http://samples/xsd',
		reader: {
			type: 'soap',
			record: 'ns|return',
			namespace: 'ns'
		}
	}
});