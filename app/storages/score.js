import StorageObject from 'ember-local-storage/session/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
	initialState() {
		return { totalScore : 0};
	}
});

export default Storage;
