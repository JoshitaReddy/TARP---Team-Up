const express = require("express");
const https = require("https");

const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public/"));
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/main.html");
    }); 

app.get("/formsalary", function (req, res) {
    res.sendFile(__dirname + "/form_salary.html");
    });

app.post("/formsalary", function (req, res) {
    gender = req.body.gender;
    tenthPercent = req.body.tenthPercent;
    twelvthPercent = req.body.twelvthPercent;
    collegeTier = req.body.collegeTier;
    degree = req.body.degree;
    specialization = req.body.specialization;
    collegeGPA = req.body.collegeGPA;

    const url = "https://sairuthvik.pythonanywhere.com/?gender="+gender+"&tenthPercent="+tenthPercent+"&twelvthPercent="+twelvthPercent+"&collegeTier="+collegeTier+"&degree="+degree+"&specialization="+specialization+"&collegeGPA="+collegeGPA;

    https.get(url, function (response) {
        response.on("data", function (data) {
            var ModelData = JSON.parse(data);
            var value = ModelData.prediction;
            res.render("res1", { value: value });
            console.log(value);
        });
    });
});



app.get("/formcareer", function (req, res) {
    res.sendFile(__dirname + "/form_career.html");
    });

app.post("/formcareer", function (req, res) {
    sslc = req.body.sslc;
    hsc = req.body.hsc;
    cgpa = req.body.cgpa;
    school_type = req.body.school_type;
    no_of_miniprojects = req.body.no_of_miniprojects;
    no_of_projects = req.body.no_of_projects;
    coresub_skill = req.body.coresub_skill;
    aptitude_skill = req.body.aptitude_skill;
    problemsolving_skill = req.body.problemsolving_skill;
    programming_skill = req.body.programming_skill;
    abstractthink_skill = req.body.abstractthink_skill;
    design_skill = req.body.design_skill;
    first_computer = req.body.first_computer;
    first_program = req.body.first_program;
    lab_programs = req.body.lab_programs;
    ds_coding = req.body.ds_coding;
    technology_used = req.body.technology_used;
    sympos_attend = req.body.sympos_attend;
    sympos_won = req.body.sympos_won;
    extracurricular = req.body.extracurricular;
    learning_style = req.body.learning_style;
    college_bench = req.body.college_bench;
    clg_teachers_know = req.body.clg_teachers_know;
    college_performence = req.body.college_performence;
    college_skills = req.body.college_skills;

    // https://joshita.pythonanywhere.com/?sslc=2&hsc=3&cgpa=5&school_type=4&no_of_miniprojects=3&no_of_projects=5&coresub_skill=4&aptitude_skill=2&problemsolving_skill=5&programming_skill=5&abstractthink_skill=3&design_skill=5&first_computer=4&first_program=4&lab_programs=2&ds_coding=5&technology_used=4&sympos_attend=3&sympos_won=2&extracurricular=4&learning_style=4&college_bench=2&clg_teachers_know=3&college_performence=4&college_skills=5

    const url = "https://joshita.pythonanywhere.com/?sslc="+sslc+"&hsc="+hsc+"&cgpa="+cgpa+"&school_type="+school_type+"&no_of_miniprojects="+no_of_miniprojects+"&no_of_projects="+no_of_projects+"&coresub_skill="+coresub_skill+"&aptitude_skill="+aptitude_skill+"&problemsolving_skill="+problemsolving_skill+"&programming_skill="+programming_skill+"&abstractthink_skill="+abstractthink_skill+"&design_skill="+design_skill+"&first_computer="+first_computer+"&first_program="+first_program+"&lab_programs="+lab_programs+"&ds_coding="+ds_coding+"&technology_used="+technology_used+"&sympos_attend="+sympos_attend+"&sympos_won="+sympos_won+"&extracurricular="+extracurricular+"&learning_style="+learning_style+"&college_bench="+college_bench+"&clg_teachers_know="+clg_teachers_know+"&college_performence="+college_performence+"&college_skills="+college_skills;

    https.get(url, function (response) {
        response.on("data", function (data) {
            var ModelData = JSON.parse(data);
            var value = ModelData.prediction;
            res.render("res2", { value: value });
            console.log(value);
        });
    });
});

app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running on port 3000");
});
