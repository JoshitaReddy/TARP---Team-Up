// Importing the required modules
const express = require("express");
const https = require("https");

// Creating an instance of the express application
const app = express();

// Setting the view engine to EJS
app.set("view engine", "ejs");

// Setting the static folder path to "public"
app.use(express.static("public"));

// Parsing incoming request data with url-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Handling HTTP GET requests for the homepage
app.get("/", function (req, res) {
    // Sending the main HTML file as a response
    res.sendFile(__dirname + "/main.html");
    }); 

// Handling HTTP GET requests for the salary prediction form
app.get("/formsalary", function (req, res) {
    // Sending the salary prediction form HTML file as a response
    res.sendFile(__dirname + "/form_salary.html");
    });

// Handling HTTP POST requests for the salary prediction form
app.post("/formsalary", function (req, res) {
    // Getting the form data from the request body
    gender = req.body.gender;
    tenthPercent = req.body.tenthPercent;
    twelvthPercent = req.body.twelvthPercent;
    collegeTier = req.body.collegeTier;
    degree = req.body.degree;
    specialization = req.body.specialization;
    collegeGPA = req.body.collegeGPA;

    // Constructing the URL for the API call using the form data
    const url = "https://sairuthvik.pythonanywhere.com/?gender="+gender+"&tenthPercent="+tenthPercent+"&twelvthPercent="+twelvthPercent+"&collegeTier="+collegeTier+"&degree="+degree+"&specialization="+specialization+"&collegeGPA="+collegeGPA;

    // Making an HTTPS GET request to the API
    https.get(url, function (response) {
        // Listening for the 'data' event on the response object
        response.on("data", function (data) {
            // Parsing the JSON data received from the API
            var ModelData = JSON.parse(data);
            // Getting the predicted salary from the JSON data
            var value = ModelData.prediction;
            // Rendering the results page with the predicted salary
            res.render("res1", { value: value });
            console.log(value);
        });
    });
});

// Handling HTTP GET requests for the career prediction form
app.get("/formcareer", function (req, res) {
    // Sending the career prediction form HTML file as a response
    res.sendFile(__dirname + "/form_career.html");
    });

// Handling HTTP POST requests for the career prediction form
app.post("/formcareer", function (req, res) {
    // Getting the form data from the request body
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

    // Constructing the URL for the API call using the form data
    const url = "https://joshita.pythonanywhere.com/?sslc="+sslc+"&hsc="+hsc+"&cgpa="+cgpa+"&school_type="+school_type+"&no_of_miniprojects="+no_of_miniprojects+"&no_of_projects="+no_of_projects+"&coresub_skill="+coresub_skill+"&aptitude_skill="+aptitude_skill+"&problemsolving_skill="+problemsolving_skill+"&programming_skill="+programming_skill+"&abstractthink_skill="+abstractthink_skill+"&design_skill="+design_skill+"&first_computer="+first_computer+"&first_program="+first_program+"&lab_programs="+lab_programs+"&ds_coding="+ds_coding+"&technology_used="+technology_used+"&sympos_attend="+sympos_attend+"&sympos_won="+sympos_won+"&extracurricular="+extracurricular+"&learning_style="+learning_style+"&college_bench="+college_bench+"&clg_teachers_know="+clg_teachers_know+"&college_performence="+college_performence+"&college_skills="+college_skills;

    https.get(url, function (response) {
        // Listening for the 'data' event on the response object
        response.on("data", function (data) {
            // Parsing the JSON data received from the API
            var ModelData = JSON.parse(data);
            // Getting the predicted career from the JSON data
            var value = ModelData.prediction;
            // Rendering the results page with the predicted career
            res.render("res2", { value: value });
            console.log(value);
        });
    });
});

// Listening on port 3000 for HTTP requests from the browser
app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running on port 3000");
});