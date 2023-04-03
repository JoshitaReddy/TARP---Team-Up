# -*- coding: utf-8 -*-
"""
Created on Fri Mar 31 22:55:27 2023

@author: joshi
"""
import numpy as np
from flask import Flask, request, jsonify
import pickle

model = pickle.load(open('model.pkl', 'rb'))
app = Flask(__name__)

jobs = ['Data Analyst','Software Developer','Software Tester','Technical Support','Technical Writer','UI/UX Designer','Web Developer']

@app.route('/',methods=['GET'])
def index():
    sslc=float(request.args['sslc'])
    hsc=float(request.args['hsc'])
    cgpa=float(request.args['cgpa'])
    school_type=float(request.args['school_type'])
    no_of_miniprojects=float(request.args['no_of_miniprojects'])
    no_of_projects=float(request.args['no_of_projects'])
    coresub_skill=float(request.args['coresub_skill'])
    aptitude_skill=float(request.args['aptitude_skill'])
    problemsolving_skill=float(request.args['problemsolving_skill'])
    programming_skill=float(request.args['programming_skill'])
    abstractthink_skill=float(request.args['abstractthink_skill'])
    design_skill=float(request.args['design_skill'])
    first_computer=float(request.args['first_computer'])
    first_program=float(request.args['first_program'])
    lab_programs=float(request.args['lab_programs'])
    ds_coding=float(request.args['ds_coding'])
    technology_used=float(request.args['technology_used'])
    sympos_attend=float(request.args['sympos_attend'])
    sympos_won=float(request.args['sympos_won'])
    extracurricular=float(request.args['extracurricular'])
    learning_style=float(request.args['learning_style'])
    college_bench=str(request.args['college_bench'])
    clg_teachers_know=float(request.args['clg_teachers_know'])
    college_performence=float(request.args['college_performence'])
    college_skills=float(request.args['college_skills'])
    test=np.array([sslc, hsc, cgpa, school_type,no_of_miniprojects,
           no_of_projects, coresub_skill, aptitude_skill, problemsolving_skill, programming_skill,
           abstractthink_skill, design_skill, first_computer, first_program, lab_programs, ds_coding,
           technology_used, sympos_attend, sympos_won, extracurricular, learning_style,
           college_bench, clg_teachers_know, college_performence, college_skills]).reshape(1,-1)
    pred=model.predict(test)
    return jsonify(prediction=str(jobs[pred[0]]))

if __name__ == "__main__":
    app.run(debug=True)