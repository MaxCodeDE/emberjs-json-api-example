import DS from 'ember-data';

export default DS.Model.extend({

    author: DS.attr('String'),
    text: DS.attr('String'),
    done: DS.attr('Boolean')
    
});
