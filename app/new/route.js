import Ember from 'ember';

export default Ember.Route.extend({
    
    model() {
        return this.store.createRecord('todo', {
            author: 'Max'
        });
    },
    
    actions: {
        back() {
            this.transitionTo('index');
        },
        save() {
            let model = this.modelFor('new');
            model.save();
        },
        willTransition() {
            let model = this.modelFor('new');
            if (model.get('isNew')) {
                model.deleteRecord();
            } else if (model.get('hasDirtyAttributes')) {
                model.rollbackAttributes();   
            }
        }
    }
    
});
