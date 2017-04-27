import DS from 'ember-data';

var Question = DS.Model.extend({

    question: DS.attr('string'),
    option1: DS.attr('string'),
    option2: DS.attr('string'),
    option3: DS.attr('string'),
    answer: DS.attr('string')

});
Question.reopenClass({
    FIXTURES: [{
            id: 1,
            question: "The world smallest country is",
            option1: "Canada",
            option2: "Maldives",
            option3: "Vatican City",
            answer: "Vatican City"
        },

        {
            id: 2,
            question: "The headquarters of IMF is situated in",
            option1: "Washington",
            option2: "New York",
            option3: "Tokyo",
            answer: "Washington"
        },

        {
            id: 3,
            question: "Who wrote Gandhi and Stalin?",
            option1: "Raj Narayan",
            option2: "Louis Fisher",
            option3: "V.S.Naipaul",
            answer: "Louis Fisher"
        }
    ]
});
export default Question;
