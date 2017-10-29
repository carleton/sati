var apps = "Links to download meditation apps"
var three_five_seven_breathing_description = "3 5 7 breathing description (with eyes open or closed)"
var body_scan_description = "Body scan description (with eyes open or closed)"
var breathing_meditation_description = "breathing_meditation_description description"
var senses  = "Mindfulness with senses / certain activities description (make tea, eat, color, walk, etc)"
var NYT_mindful_eating = "eating"
var walking = "NYT walking meditation"
var tea = "NYT mindful cup of tea"
var nyt_scan = "NYT body scan"
var calm_breath = "CALM mindfulness of breath audio"
var calm_scan = "CALM long body scan audio"
var calm_muscle = "CALM muscle relaxation audio"
var calm_walking = "CALM walking meditation audio"
var calm_sitting = "CALM sitting loving kindness meditation audio"
var calm_walking_kindness = "CALM walking loving kindness meditation audio"
var youtube_1 = "YouTube 1: https://www.youtube.com/watch?v=Jyy0ra2WcQQ&t=201s (waves)"
var youtube_2 = "YouTube 2: https://www.youtube.com/watch?v=xoYnqvadurg"
var youtube_3  = "YouTube 3: https://www.youtube.com/watch?v=rR6DZz5EX4E"
var tara_vipassana = "Tara Brach vipassana meditation audio"
var tara_brief = "Tara Brach brief audio"
var tara_calm = "Tara Brach video (opening and calming)"
var self_compassion_break = "self compassion break"
var loving_kindness_text = "loving kindness text"
var body_sound_text = "body and sound text"

var techniques = {
apps : 1,
three_five_seven_breathing_description : 1,
body_scan_description : 1,
breathing_meditation_description : 1,
senses  : 1,
NYT_mindful_eating  : 1,
walking : 1,
tea : 1,
nyt_scan: 1,
calm_breath : 1,
calm_scan : 1,
calm_muscle : 1,
calm_walking : 1,
calm_sitting : 1,
calm_walking_kindness : 1,
youtube_1 : 1,
youtube_2 : 1,
youtube_3  : 1,
tara_vipassana : 1,
tara_brief: 1,
tara_calm : 1,
self_compassion_break : 1,
loving_kindness_text : 1,
body_sound_text : 1
}
sortList();


function sortList() {
    var sortable = [];
    for (var technique in techniques)
        if(technique[0]!= 0){
        sortable.push([technique, techniques[technique]]);
        }
    sortable.sort(function(a, b) {
        return a[1] - b[1]
    })
    var html = "";
    for (var i = 0; i < sortable.length; i++) {
        html += "<li><a href=\"#\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\">" + eval(sortable[i][0]) + "</a></li>";
    }
    document.getElementById("medlist").innerHTML = html;
}

function sensoryOverload() {
    /*	Make meditation specific changes here
    	Addition means worse choice for helping student
    	Subtraction means better choice for helping student */
    var checkedValue = document.getElementById('sensoryOverload').checked;
    if (checkedValue) {
    	techniques.three_five_seven_breathing_description = 0;
        techniques.body_scan_description = 0;
        techniques.calm_scan = 0;
        sortList();
    } else {
        techniques.three_five_seven_breathing_description = 1;
        techniques.body_scan_description = 1;
        techniques.calm_scan = 1;
        sortList();
    }
}

function stressedOut() {
    /*  Make meditation specific changes here
        Addition means worse choice for helping student
        Subtraction means better choice for helping student */
    var checkedValue = document.getElementById('stressedOut').checked;

    if (checkedValue) {
        techniques.three_five_seven_breathing_description = 0;
        techniques.body_scan_description = 0;
        techniques.senses = 0;
        techniques.nyt_scan = 0;
        techniques.calm_breath = 0;
        techniques.calm_muscle = 0;
        techniques.youtube_1 = 0;
        techniques.youtube_2 = 0;
        techniques.youtube_3 = 0;
        techniques.tara_vipassana = 0;
        techniques.tara_brief = 0;
        techniques.tara_calm = 0;
        techniques.breathing_meditation_description = 0;
        techniques.self_compassion_break = 0;
        techniques.body_sound_text = 0;
        techniques.NYT_mindful_eating = 0;
        sortList();
    } else {
        techniques.three_five_seven_breathing_description = 1;
        techniques.body_scan_description = 1;
        techniques.senses = 1;
        techniques.nyt_scan = 1;
        techniques.calm_breath = 1;
        techniques.calm_muscle = 1;
        techniques.youtube_1 = 1;
        techniques.youtube_2 = 1;
        techniques.youtube_3 = 1;
        techniques.tara_vipassana = 1;
        techniques.tara_brief = 1;
        techniques.tara_calm = 1;
        techniques.breathing_meditation_description = 1;
        techniques.self_compassion_break = 1;
        techniques.body_sound_text = 1;
        techniques.NYT_mindful_eating = 1;
        sortList();
    }
}

function isolated() {
    /*  Make meditation specific changes here
        Addition means worse choice for helping student
        Subtraction means better choice for helping student */
    var checkedValue = document.getElementById('isolated').checked;
    if (checkedValue) {
        techniques.calm_sitting = 0;
        techniques.calm_walking_kindness = 0;
        techniques.loving_kindness_text = 0;
        techniques.self_compassion_break = 0;
        sortList();
    } else {
        techniques.calm_sitting = 1;
        techniques.calm_walking_kindness = 1;
        techniques.loving_kindness_text = 1;
        techniques.self_compassion_break = 1;
        sortList();
    }
}


function identity() {
    /*  Make meditation specific changes here
        Addition means worse choice for helping student
        Subtraction means better choice for helping student */
    var checkedValue = document.getElementById('identity').checked;
    if (checkedValue) {
        techniques.calm_sitting = 0;
        techniques.calm_walking_kindness = 0;
        techniques.loving_kindness_text = 0;
        techniques.self_compassion_break = 0;
        sortList();
    } else {
        techniques.calm_sitting = 1;
        techniques.calm_walking_kindness = 1;
        techniques.loving_kindness_text = 1;
        techniques.self_compassion_break = 1;
        sortList();
    }
}


function relaxing() {
    /*  Make meditation specific changes here
        Addition means worse choice for helping student
        Subtraction means better choice for helping student */
    var checkedValue = document.getElementById('relaxing').checked;
    if (checkedValue) {
        techniques.body_scan_description = 0;
        techniques.tea = 0;
        techniques.calm_breath = 0;
        techniques.calm_scan = 0;
        techniques.calm_muscle = 0;
        techniques.youtube_1 = 0;
        techniques.youtube_2 = 0;
        techniques.tara_vipassana = 0;
        techniques.tara_calm = 0;
        techniques.breathing_meditation_description = 0;
        techniques.eating = 0;
        sortList();
    } else {
        techniques.body_scan_description = 1;
        techniques.tea = 1;
        techniques.calm_breath = 1;
        techniques.calm_scan = 1;
        techniques.calm_muscle = 1;
        techniques.youtube_1 = 1;
        techniques.youtube_2 = 1;
        techniques.tara_vipassana = 1;
        techniques.tara_calm = 1;
        techniques.breathing_meditation_description = 1;
        techniques.eating = 1;
        sortList();
    }
}

function sleeping() {
    /*  Make meditation specific changes here
        Addition means worse choice for helping student
        Subtraction means better choice for helping student */
    var checkedValue = document.getElementById('sleeping').checked;
    if (checkedValue) {
        techniques.body_scan_description = 0;
        techniques.tea = 0;
        techniques.calm_scan = 0;
        techniques.calm_muscle = 0;
        techniques.youtube_1 = 0;
        techniques.youtube_3 = 0;
        techniques.breathing_meditation_description = 0;
        sortList();
    } else {
        techniques.body_scan_description = 1;
        techniques.tea = 1;
        techniques.calm_scan = 1;
        techniques.calm_muscle = 1;
        techniques.youtube_1 = 1;
        techniques.youtube_3 = 1;
        techniques.breathing_meditation_description = 1;
        sortList();
    }
}

function practice() {
    /*  Make meditation specific changes here
        Addition means worse choice for helping student
        Subtraction means better choice for helping student */
    var checkedValue = document.getElementById('practice').checked;
    if (checkedValue) {
        techniques.apps = 0;
        techniques.senses = 0;
        techniques.calm_breath = 0;
        techniques.calm_walking = 0;
        techniques.tara_vipassana = 0;
        techniques.self_compassion_break = 0;
        techniques.breathing_meditation_description = 0;
        sortList();
    } else {
        techniques.apps = 1;
        techniques.senses = 1;
        techniques.calm_breath = 1;
        techniques.calm_walking = 1;
        techniques.tara_vipassana = 1;
        techniques.self_compassion_break = 1;
        techniques.breathing_meditation_description = 1;
        sortList();
    }
}
function public() {
    /*  Make meditation specific changes here
        Addition means worse choice for helping student
        Subtraction means better choice for helping student */
    var checkedValue = document.getElementById('public').checked;
    if (checkedValue) {
        techniques.three_five_seven_breathing_description = 0;
        techniques.body_scan_description = 0;
        techniques.senses = 0;
        techniques.walking = 0;
        techniques.calm_walking_kindness = 0;
        techniques.self_compassion_break = 0;
        techniques.loving_kindness_text = 0;
        techniques.body_sound_text = 0;
        techniques.NYT_mindful_eating = 0;
        techniques.calm_muscle = 2;
        techniques.youtube_3 = 2;
        sortList();
    } else {
        techniques.three_five_seven_breathing_description = 1;
        techniques.body_scan_description = 1;
        techniques.senses = 1;
        techniques.walking = 1;
        techniques.calm_walking_kindness = 1;
        techniques.self_compassion_break = 1;
        techniques.loving_kindness_text = 1;
        techniques.body_sound_text = 1;
        techniques.NYT_mindful_eating = 1;
        techniques.calm_muscle = 1;
        techniques.youtube_3 = 1;
        sortList();
    }
}

function closingEyes() {
    /*  Make meditation specific changes here
        Addition means worse choice for helping student
        Subtraction means better choice for helping student */
    var checkedValue = document.getElementById('closingEyes').checked;
    if (checkedValue) {
        techniques.three_five_seven_breathing_description = 0;
        techniques.body_scan_description = 0;
        techniques.breathing_meditation_description = 0;
        techniques.senses = 0;
        techniques.walking = 0;
        techniques.calm_breath = 0;
        techniques.youtube_2 = 0;
        techniques.tara_calm = 0;
        techniques.self_compassion_break = 0;
        techniques.loving_kindness_text = 0;
        techniques.body_sound_text = 0;
        techniques.NYT_mindful_eating = 0;
        techniques.calm_muscle = 2;
        techniques.youtube_3 = 2;
        sortList();
    } else {
        techniques.three_five_seven_breathing_description = 1;
        techniques.body_scan_description = 1;
        techniques.breathing_meditation_description = 1;
        techniques.senses = 1;
        techniques.walking = 1;
        techniques.calm_breath = 1;
        techniques.youtube_2 = 1;
        techniques.tara_calm = 1;
        techniques.self_compassion_break = 1;
        techniques.loving_kindness_text = 1;
        techniques.body_sound_text = 1;
        techniques.NYT_mindful_eating = 1;
        techniques.calm_muscle = 1;
        techniques.youtube_3 = 1;
        sortList();
    }
}

function headphones() {
    /*  Make meditation specific changes here
        Addition means worse choice for helping student
        Subtraction means better choice for helping student */
    var checkedValue = document.getElementById('headphones').checked;
    if (checkedValue) {
        techniques.three_five_seven_breathing_description = 0;
        techniques.body_scan_description = 0;
        techniques.senses = 0;
        techniques.self_compassion_break = 0;
        techniques.loving_kindness_text = 0;
        techniques.body_sound_text = 0;
        techniques.NYT_mindful_eating = 0;
        techniques.breathing_meditation_description = 0;
        techniques.apps = 2;
        techniques.walking = 2;
        techniques.tea = 2;
        techniques.nyt_scan = 2;
        techniques.calm_breath = 2;
        techniques.calm_scan = 2;
        techniques.calm_muscle = 2;
        techniques.calm_walking = 2;
        techniques.calm_sitting = 2;
        techniques.calm_walking_kindness = 2;
        techniques.youtube_1 = 2;
        techniques.youtube_2 = 2;
        techniques.youtube_3 = 2;
        techniques.tara_vipassana = 2;
        techniques.tara_brief = 2;
        techniques.tara_calm = 2;
        sortList();
    } else {
        techniques.three_five_seven_breathing_description = 1;
        techniques.body_scan_description = 1;
        techniques.senses = 1;
        techniques.self_compassion_break = 1;
        techniques.loving_kindness_text = 1;
        techniques.body_sound_text = 1;
        techniques.NYT_mindful_eating = 1;
        techniques.breathing_meditation_description = 1;
        techniques.apps = 1;
        techniques.walking = 1;
        techniques.tea = 1;
        techniques.nyt_scan = 1;
        techniques.calm_breath = 1;
        techniques.calm_scan = 1;
        techniques.calm_muscle = 1;
        techniques.calm_walking = 1;
        techniques.calm_sitting = 1;
        techniques.calm_walking_kindness = 1;
        techniques.youtube_1 = 1;
        techniques.youtube_2 = 1;
        techniques.youtube_3 = 1;
        techniques.tara_vipassana = 1;
        techniques.tara_brief = 1;
        techniques.tara_calm = 1;
        sortList();
    }
}

function wifi() {
    /*  Make meditation specific changes here
        Addition means worse choice for helping student
        Subtraction means better choice for helping student */
    var checkedValue = document.getElementById('wifi').checked;
    if (checkedValue) {
        techniques.three_five_seven_breathing_description = 0;
        techniques.body_scan_description = 0;
        techniques.senses = 0;
        techniques.self_compassion_break = 0;
        techniques.loving_kindness_text = 0;
        techniques.body_sound_text = 0;
        techniques.NYT_mindful_eating = 0;
        techniques.apps = 2;
        techniques.youtube_3 = 2;
        techniques.youtube_1 = 2;
        techniques.youtube_2 = 2;
        techniques.tara_calm = 2;
        sortList();
    } else {
        techniques.three_five_seven_breathing_description = 1;
        techniques.body_scan_description = 1;
        techniques.senses = 1;
        techniques.self_compassion_break = 1;
        techniques.loving_kindness_text = 1;
        techniques.body_sound_text = 1;
        techniques.NYT_mindful_eating = 1;
        techniques.apps = 1;
        techniques.youtube_3 = 1;
        techniques.youtube_1 = 1;
        techniques.youtube_2 = 1;
        techniques.tara_calm = 1;
        sortList();
    }
}
