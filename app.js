let personalInfo = {
    name:'Matrayu', career:'Full Stack In Training', description:'I like cats'
};

let positions = [
    {Company: 'Disney', Title: 'Tech Ops', Description: 'Worked at the Disneyland Park'},
    {Company: 'Sony', Title: 'Audio Engineer', Description: 'Worked on audio for distribution'},
    {Company: 'Radius 60', Title: 'VOD Engineering', Description: 'Produced iTunes VOD Packages'},
];

let skills = [
    {Skill: 'Basketball', Cool: false},
    {Skill: 'Audio', Cool: false},
    {Skill: 'Video', Cool: false},
    {Skill: 'Distribution', Cool: false},
    {Skill: 'Management', Cool: false},
    {Skill: 'Editing', Cool: true},
    {Skill: 'Motion Graphics', Cool: true},
    {Skill: 'Cooking', Cool: false},
];

let interests = ['Watching Basketball', 'Netflix', 'Golf', 'Cooking', 'Computer Science'];

function displayPosition(company, title, description) {
    return('* ' + title + ' at ' + company + ' - ' + description)
}

function displaySkill(skill, cool) {
    if (cool == true) {
        return('* BAM: ' + skill);
    } else {
        return('* ' + skill)
    };
}

console.log(
    'Name: ' + personalInfo.name.toUpperCase() +
    '\nCareer: ' + personalInfo.career +
    '\nDescription: ' + personalInfo.description +
    '\n\n'
);

for (i = 0 & console.log('My Interests'); i < interests.length; i++) {
    console.log('* ' + interests[i])
};

for (i = 0 & console.log('\nMy Previous Experience:\n'); i < positions.length; i++) {
    console.log(displayPosition(positions[i].Company,positions[i].Title,positions[i].Description))
};

for (i = 0 & console.log('\nMy Skills:\n'); i < skills.length; i++) {
    console.log(displaySkill(skills[i].Skill,skills[i].Cool))
};








