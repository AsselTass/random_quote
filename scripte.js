
function GetSelectedText() {
	var e = document.getElementById("number_of_words");
	var result = e.options[e.selectedIndex].text;

	var quote_type = document.forms[0];
	var txt = "";
	var i;
	for (i = 0; i < quote_type.length; i++) {
		if (quote_type[i].checked) {
			txt = txt + quote_type[i].value;
		}
	}

	if (txt == 'life') {
		var element = document.getElementById("text");
		element.innerHTML = "New Quotes:";
		var i;
		for (i = 0; i < result; i++) {
			let a = [];
			a.push(life_part_one[Math.floor(Math.random() * life_part_one.length)] + " ");
			a.push(life_part_two[Math.floor(Math.random() * life_part_two.length)] + " ");
			a.push(life_part_three[Math.floor(Math.random() * life_part_three.length)] + " ");

			document.getElementById('text').innerHTML += "<br>" + a.toString() + "<br>";
		}
	}

	if (txt == 'work') {
		var element = document.getElementById("text");
		element.innerHTML = "New Quotes:";
		var i;
		for (i = 0; i < result; i++) {
			document.getElementById('text').innerHTML += "<br>" + "<br>" +
				work_part_one[Math.floor(Math.random() * work_part_one.length)];
			document.getElementById('text').innerHTML += " " +
				work_part_two[Math.floor(Math.random() * work_part_two.length)];
			document.getElementById('text').innerHTML += " " +
				work_part_three[Math.floor(Math.random() * work_part_three.length)];
		}

	}
}

var life_part_one = ["do not judge", "for me a calm house equals to", "stop trying to make", "feelings are much like", "if you stay positive in a", "keep going", "your mind will always believe", "you will never always be motivated", "do not give your past", "be so busy loving your life"]

var life_part_two = ["my story by", "a calm heart", "everyone happy", "waves, we can't stop them from coming", "negative situation", "you didn't come this far", "everything you tell it", "so you must", "the power", "that you have no time"]

var life_part_three = ["the chapter you walked in.", "equals a calm life.", "you are not a tequila.", "but we can choose which one to surf.", "you win.", "just to come this far.", "feed it hope. Feed it with love.", "be disciplined.", "to define your future.", "for hate, regret or fear."]

var work_part_one = ["if your dreams ", "pleasure in the job", "it doesn't matter how many resources you have", "good things come to those ", "if you don't like where you are ", "every accomplishment ", "you are always responsible for", "do not let ", "allow yourself to be a beginner", "today is your opportunity", "remember to ", "build a team so strong", "work hard in silence", "i was raised to treat the janitor", "do not listen with the intent"]

var work_part_two = ["don't scare you ", "puts", "if you don't know", "who ", "move", "starts with the decision", "how you act", "the behavior of others destroy", "no one starts off", "to build", "take care of yourself.", " that you don't know", "let success", "with the same respect", "to reply but with"]

var work_part_three = ["they are too small.", "perfection in the work.", " how to use them.", "work for it.", "you are not tree.", "to try.", "no matter how how you feel.", "your inner peace.", "being excellent.", "the tomorrow you want.", "You can't pour from an empty cup.", "who the boss is.", "be your noise.", "as the ceo.", " the intent to understand."]

