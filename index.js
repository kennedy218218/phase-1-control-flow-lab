
function scuberGreetingForFeet(distance) {
  if (distance <= 400) return "This one is on me!";
  if (distance > 400 && distance <= 2000) return "That will be twenty bucks.";
  if (distance > 2000 && distance <= 2500) return "I will gladly take your thirty bucks.";
  return "No can do.";
}

const ternaryCheckCity = city => city === "NYC" ? "Ok, sounds good." : "No go.";

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous": return "Thank you so much.";
    case "not as generous": return "Thank you.";
    default: return "Bye.";
  }
}

module.exports = { scuberGreetingForFeet, ternaryCheckCity, switchOnCharmFromTip };
