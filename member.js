function skillsMember() {
    // Load the skills of the member
    var member = Member.get();
    if (member) {
        var skills = member.getSkills();
        if (skills) {
            // Display the skills
            var html = '';
            for (var i = 0; i < skills.length; i++) {
                var skill = skills[i];
                html += '<div>' + skill.getName() + '</div>';
            }
            $('#skills').html(html);
        }
    }
}