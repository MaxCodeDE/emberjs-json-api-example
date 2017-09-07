import Ember from 'ember';

export default Ember.Route.extend({
    
    model() {
        return this.store.findAll('todo');
    },
    
    
    actions: {
        createNew() {
            this.transitionTo('new');
        },
        deleteAll() {
            this.modelFor('index').forEach((todo) => {
                if (todo.get('done')) {
                    todo.destroyRecord();   
                }
            });
        },
        toggleDone(todo) {
            if (todo.get('done')) {
                todo.set('done', false);
            } else {
                todo.set('done', true);
            }
            todo.save();
        }
    }
    
});
