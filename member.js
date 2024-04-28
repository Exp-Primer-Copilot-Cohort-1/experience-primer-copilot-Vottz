function skillsMember() {
  // Get the member's skills
  var member = getMember();
  var skills = member.getSkills();
  var skillNames = [];
  for (var i = 0; i < skills.length; i++) {
    skillNames.push(skills[i].getName());
  }
  return skillNames;
}