# Data Pre-processing & Dataset Description

## Data Preprocessing

**Data pre-processing** refers to the process of cleaning, transforming, and preparing raw data so that it can be used for analysis. The goal of data pre-processing is to convert raw data into a format that is more usable and insightful for data analysis.

Some common steps in data pre-processing include handling missing or incomplete data, removing duplicated data, normalizing or standardizing data, handling categorical data, handling outliers, and feature selection or extraction.

- **Handling missing or incomplete data** involves identifying any missing or incomplete data points and deciding how to handle them, such as deleting them, filling in the missing values, or using a statistical method to impute them.
- **Removing duplicated data** involves identifying any duplicated data points and deciding how to handle them, such as deleting them or averaging the values.
- **Normalizing or standardizing data** involves scaling the data so that it falls within a certain range, which can reduce the impact of outliers and make the data more comparable.
- **Handling categorical data** involves converting it into a numerical format that can be used in analysis, such as one-hot encoding or label encoding.
- **Handling outliers** involves identifying data points that fall far outside of the typical range of values for a dataset and handling them appropriately.
- **Feature selection or extraction** involves identifying the most important features in a dataset and selecting or extracting them for use in analysis, which can help to reduce complexity and improve accuracy.
- **Split the data into training and test set**, such that, we can train our model on the training set and then evaluate its performance on the test set. This allows us to estimate how well our model will perform on new, unseen data.
- **Now, the data is ready for for model creation & prediction.**

For the Career Prediction Database and Engineering Graduate Salary Prediction datasets, the specific steps taken during data pre-processing may vary depending on the analysis being performed and the specific needs of the model being built. It is important to carefully consider the data pre-processing steps to ensure that the data is accurate, reliable, and suitable for analysis.

## ****Engineering Graduate Salary Prediction****

College grades, candidate capabilities, proximity to industrial hubs, specialization, and industry market conditions determine this. These elements will affect an engineering graduate's pay in India.

<aside>
💡 [https://www.kaggle.com/datasets/manishkc06/engineering-graduate-salary-prediction](https://www.kaggle.com/datasets/manishkc06/engineering-graduate-salary-prediction)

</aside>

Attributes in Dataset:

- ID: A unique ID to identify a candidate
- Salary: Annual CTC offered to the candidate (in INR)
- Gender: Candidate's gender
- DOB: Date of birth of the candidate
- 10percentage: Overall marks obtained in grade 10 examinations
- 10board: The school board whose curriculum the candidate followed in grade 10
- 12graduation: Year of graduation - senior year high school
- 12percentage: Overall marks obtained in grade 12 examinations
- 12board: The school board whose curriculum the candidate followed
- CollegeID: Unique ID identifying the university/college which the candidate attended for her/his undergraduate
- CollegeTier: Each college has been annotated as 1 or 2. The annotations have been computed from the average AMCAT scores obtained by the students in the college/university. Colleges with an average score above a threshold are tagged as 1 and others as 2.
- Degree: Degree obtained/pursued by the candidate
- Specialization: Specialization pursued by the candidate
- CollegeGPA: Aggregate GPA at graduation
- CollegeCityID: A unique ID to identify the city in which the college is located in.
- CollegeCityTier: The tier of the city in which the college is located in. This is annotated based on the population of the cities.
- CollegeState: Name of the state in which the college is located
- GraduationYear: Year of graduation (Bachelor's degree)
- English: Scores in AMCAT English section
- Logical: Score in AMCAT Logical ability section
- Quant: Score in AMCAT's Quantitative ability section
- Domain: Scores in AMCAT's domain module
- ComputerProgramming: Score in AMCAT's Computer programming section
- ElectronicsAndSemicon: Score in AMCAT's Electronics & Semiconductor Engineering section
- ComputerScience: Score in AMCAT's Computer Science section
- MechanicalEngg: Score in AMCAT's Mechanical Engineering section
- ElectricalEngg: Score in AMCAT's Electrical Engineering section
- TelecomEngg: Score in AMCAT's Telecommunication Engineering section
- CivilEngg: Score in AMCAT's Civil Engineering section
- conscientiousness: Scores in one of the sections of AMCAT's personality test
- agreeableness: Scores in one of the sections of AMCAT's personality test
- extraversion: Scores in one of the sections of AMCAT's personality test
- nueroticism: Scores in one of the sections of AMCAT's personality test
- openess_to_experience: Scores in one of the sections of AMCAT's personality test

## ****Career Prediction Database****

The Career Prediction Database is a dataset related to career predictions. It includes attributes such as SSLC percentage, HSC percentage, type of school, number of mini projects, number of projects, etc. The dataset can be used to create a model that predicts the career of a person based on their qualifications and skills.

- sslc - Rated on a scale of 1-5
- hsc - Rated on a scale of 1-5
- cgpa - Rated on a scale of 1-5
- school_type - Rated on a scale of 1-5
- no_of_miniprojects - Number of Mini projects
- no_of_projects - Number of Projects
- coresub_skill - Rated on a scale of 1-5
- aptitude_skill - Rated on a scale of 1-5
- problemsolving_skill - Rated on a scale of 1-5
- programming_skill - Rated on a scale of 1-5
- abstractthink_skill - Rated on a scale of 1-5
- design_skill - Rated on a scale of 1-5
- first_computer - Rated on a scale of 1-5
- first_program - Rated on a scale of 1-5
- lab_programs - Rated on a scale of 1-5
- ds_coding - Rated on a scale of 1-5
- technology_used - Rated on a scale of 1-5
- sympos_attend - Number of symposiums attended
- sympos_won - Number of symposiums won
- extracurricular - Number of extracurriculars participated
- learning_style - Rated on a scale of 1-5
- college_bench - Rated on a scale of 1-5
- clg_teachers_know - Rated on a scale of 1-5
- college_performence - Rated on a scale of 1-5
- college_skills - Rated on a scale of 1-5