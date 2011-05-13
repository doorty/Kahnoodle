$(document).ready(function() {

  var kahnoodle1 = new Kahnoodle({person:"Bob", type:"Quality Time", description:"Long walk on the beach", time:"1/2/2011 2:30PM EST"});
  var kahnoodle2 = new Kahnoodle({person:"Jane", type:"Sex", description:"Long walk on the beach", time:"1/2/2011 2:30PM EST"});
  var kahnoodle3 = new Kahnoodle({person:"Bob", type:"Type", description:"Long walk on the beach", time:"1/2/2011 2:30PM EST"});

  var kahnoodles = new KahnoodleSet([kahnoodle1, kahnoodle2, kahnoodle3]);

  var kahnoodleView = new KahnoodleView({el: $("#kahnoodles"), model: kahnoodle1});
});