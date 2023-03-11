function interview(gradeScore,hscScore,sscScore,candidateName) {
    if (gradeScore>=70 || hscScore>=80 ||sscScore>90 ) {
        console.log(`Congrats you are eligible for interview ${candidateName}`);
    } else {
        console.log(`You are not eligible for interview ${candidateName}`);
    }
}
interview(80,86,90,"Pradip Bhusnar");
interview(70,65,55,"Rohit Metkari");
interview(60,79,88,"Samir Jadhav");
