/*
    Mou, Tom, Jane, Peter and John got their final exam results. 
    Your total score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
    and John’s total score is 40. The grading chart is:
    80 or above A grade
    60 or above B grade
    50 or above C grade
    40 or above D grade
    39 or less => F grade 
*/


/* Interect with HTML */
// Action btn - Show the grade when clicked this button
var btn = document.getElementById('btn');
// Show output on the prind id p element
var print = document.getElementById('print');
var studentInput = document.getElementById('studentName');
var scoreByUser = document.getElementById('totalScores');

btn.addEventListener('click', function(){
    // Student Names - given by users
    var studentName = studentInput.value.toUpperCase(); // Convert to Uppercase
    // totalScores of this student - given by users
    var totalScores = parseInt(scoreByUser.value);
    // Clear input value after clicked the btn
    studentInput.value = '';
    scoreByUser.value = '';
    
    // Prevent users to entering numbers in the student name input
    if (!isNaN(studentName)) { // !isNaN() throws a question, is that a number? and consider as a boolean
        alert('Please enter a valid name.');
        return;
    }
    
    // Condition checking
    if (totalScores > 100 || totalScores <= 0 || isNaN(totalScores)) {
        alert('Invalid marks you entered! Please enter valid marks number.');
        return;  /* isNaN() function Throws a question, is that not a number? */
    }

    if (totalScores >= 80) {
        grade = 'A';
    } else if (totalScores >= 60) {
        grade = 'B';
    } else if (totalScores >= 50) {
        grade = 'C';
    } else if (totalScores >= 40) {
       grade = 'D';
    } else {
        grade = 'F';
    }
    // Result in a HTML empty elements
    print.innerHTML = `${studentName} got <span style="color:#4010f5;background-color:#23f751;padding:0px 10px;font-size:20px;">${grade}</span> in the final exam!`;

});
