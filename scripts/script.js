$(document).ready(function () {
  let revName;

  $("#btnGet").click(function () {
    let userName = $("#userName").val();
    let coolFacts = generateNameFacts(userName);

    generateNameFacts(userName);

    $("#coolNameFacts").html(coolFacts);
  });
});

function generateNameFacts(userName) {
  let coolFacts = "";

  coolFacts = nameLength(userName);
  coolFacts += " <br> " + nameStart(userName);
  coolFacts += "<h3> " + nameEnd(userName) + "</h3>";

  console.log("initialized the'm coolFacts variable: " + coolFacts);

  return coolFacts;
}

function nameLength(name) {
  return "Your name is " + name.length + " letters long!";
}

function nameStart(name) {
  return "the first letter of your name is " + name[0];
}

function nameEnd(name) {
  let lastIndex = name.length - 1;

  return "the last letter of your name is " + name[lastIndex];

  function getSpiritAnimal(name) {
    if (name.length == 3) {
      greeting = "you are slug!";
    } else if (name.length > 10) {
      greeting = "u spirit animal is iguana";
    } else {
      greeting = "u are nothing.";
    }
  }
}