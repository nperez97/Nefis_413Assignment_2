//A "Grade Calculator" form that takes as input a percentage of each grade category listed in the syllabus

//Build a JavaScript program that calculates and displays both a final percentage and a letter grade using the "Grade Calculator"
//form entries based on the weights listed in the syllabus-->



function gradeCalc()
{
    var assignmentpct = 0.5;
    var groupprojectpct = 0.1;
    var quizzespct = 0.1;
    var examspct = 0.2;
    var intexpct = 0.1;

    var fAssignments = $("#assignment").val();
    var fGroupProjects = $("#project").val();
    var fQuizzes = $("#quizzes").val();
    var fExams = $("#exams").val();
    var fIntex = $("#intex").val();

    /*
    var fAssignments = parseFloat(document.getElementById("assignment").value);
    var fGroupProjects = parseFloat(document.getElementById("project").value);
    var fQuizzes = parseFloat(document.getElementById("quizzes").value);
    var fExams = parseFloat(document.getElementById("exams").value);
    var fIntex = parseFloat(document.getElementById("intex").value);
    */

    var fTotalPoints = (assignmentpct * fAssignments) + (groupprojectpct * fGroupProjects) + (quizzespct * fQuizzes) + (examspct * fExams) + (intexpct * fIntex)

    //calculate points and letter grade
    if (fTotalPoints >= 94)
    {
        alert("Final grade percentage: " + fTotalPoints + "% Letter Grade: A");
    }
    else if (fTotalPoints < 94 && fTotalPoints >= 90)
    {
        alert("Final grade percentage: " + fTotalPoints + "% Letter Grade: A-");
    }
    else if (fTotalPoints < 90 && fTotalPoints >= 87)
    {
        alert("Final grade percentage: " + fTotalPoints + "% Letter Grade: B+");
    }
    else if (fTotalPoints < 87 && fTotalPoints >= 84)
    {
        alert("Final grade percentage: " + fTotalPoints + "% Letter Grade: B");
    }
    else if (fTotalPoints < 84 && fTotalPoints >= 80)
    {
        alert("Final grade percentage: " + fTotalPoints + "% Letter Grade: B-");
    }
    else if (fTotalPoints < 80 && fTotalPoints >= 77)
    {
        alert("Final grade percentage: " + fTotalPoints + "% Letter Grade: C+");
    }
    else if (fTotalPoints < 77 && fTotalPoints >= 74)
    {
        alert("Final grade percentage: " + fTotalPoints + "% Letter Grade: C");
    }
    else if (fTotalPoints < 74 && fTotalPoints >= 70)
    {
        alert("Final grade percentage: " + fTotalPoints + "% Letter Grade: C-");
    }
    else if (fTotalPoints < 70 && fTotalPoints >= 67)
    {
        alert("Final grade percentage: " + fTotalPoints + "% Letter Grade: D+");
    }
    else if (fTotalPoints < 67 && fTotalPoints >= 64)
    {
        alert("Final grade percentage: " + fTotalPoints + "% Letter Grade: D");
    }
    else if (fTotalPoints < 64 && fTotalPoints >= 60)
    {
        alert("Final grade percentage: " + fTotalPoints + "% Letter Grade: D-");
    }
    else
    {
        alert("Final grade percentage: " + fTotalPoints + "% Letter Grade: E");
    }
}
