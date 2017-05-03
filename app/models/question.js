import DS from 'ember-data';

var Question = DS.Model.extend({

  questionText: DS.attr('string'),
  options: DS.attr(),
  answer: DS.attr('string')

});
Question.reopenClass({
  FIXTURES: [{
      id: 1,
      questionText: "The world smallest country is",
      options: [{
          name: "Madagascar"
        },
        {
          name: "Russia"
        },
        {
          name: "Vatican City"
        }
      ],
      answer: "Vatican City"
    },

    {
      id: 2,
      questionText: "The headquarters of IMF is situated in",
      options: [{
          name: "Washington"
        },
        {
          name: "New York"
        },
        {
          name: "Tokyo"
        }
      ],
      answer: "Washington"
    },

    {
      id: 3,
      questionText: "Who wrote Gandhi and Stalin?",
      options: [{
          name: "Raj Narayan"
        },
        {
          name: "Louis Fisher"
        },
        {
          name: "V.S.Naipaul"
        }
      ],
      answer: "Louis Fisher"
    }
  ]
});
export default Question;
