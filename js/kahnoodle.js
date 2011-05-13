var Kahnoodle = Backbone.Model.extend({
  defaults: {
    person:'',
    type:'',
    description:'',
    time:''
  },
  validate: function(attributes) {
    if (person.length <= 0) {
      return "You must have a partner assigned to a Kahnoodle";
    } else if (type.length <= 0) {
      return "What type of Kahnoodle was it?";
    } else if (time.length <=0) {
      return "I do not know when the Kahnoodle happened"
    }
  },
  initialize: function() {
    //alert("Welcome new Kahnoodle");
  }
});

var KahnoodleSet = Backbone.Collection.extend({
  model: Kahnoodle,
  url: function() {
      return this.document.url() + '/kahnoodles';
    }
});

var KahnoodleView = Backbone.View.extend({

  initialize: function() {   
    this.render();
  },
  
  render: function() {
    var template = _.template( $("#kahnoodle-template").html(), this.model.toJSON() );
    this.el.html(template);
    return this;
  },
  
  events: {
    "click li": "clickKahnoodle"
  },
  
  clickKahnoodle: function(event) {
    // Kahnoodle clicked, you can access the element that was clicked with event.currentTarget
    alert("Clicked Kahnoodle: " + event.currentTarget.id);
  }
  
});

