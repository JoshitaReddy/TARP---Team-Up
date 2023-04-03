import pickle
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.preprocessing import LabelEncoder
import pandas as pd
import os
import numpy as np

model = None

def get_model():
    global model
    if model is None:
        model_args = {"use_multiprocessing": False}
        basepath = os.path.dirname(__file__)
        filename = '/xgbmodel.pkl'
        model = pickle.load(open(basepath+filename, 'rb'))
        print('model is loaded')
    return model

# get_model()  # If you un-comment this line, the model will be created before the workers are spawned. If you leave it commented, it will be created the first time `predict` is invoked

 
def predict(args):
    basepath = os.path.dirname(__file__)
    df = pd.read_csv(basepath+'/Engineering_graduate_salary.csv')
    le1 = LabelEncoder()
    le2 = LabelEncoder()
    le3 = LabelEncoder()

    df.Gender = le1.fit_transform(df.Gender)
    print(le1.classes_)
    df.Degree = le2.fit_transform(df.Degree)
    print(le2.classes_)
    df.Specialization = le3.fit_transform(df.Specialization)
    print(le3.classes_)


    gender=str(args['gender'])
    tenthPercent=float(args['tenthPercent'])
    twelvthPercent=float(args['twelvthPercent'])
    collegeTier=int(args['collegeTier'])
    degree=str(args['degree'])
    specialization=str(args['specialization'])
    collegeGPA=float(args['collegeGPA'])

    gender1 = le1.transform([gender])
    degree1 = le2.transform([degree])
    specialization1 = le3.transform([specialization])

    test=np.array([gender1[0], tenthPercent, twelvthPercent, collegeTier, degree1[0], specialization1[0], collegeGPA]).reshape(1,-1)
    print(test)

    model = get_model()
    predictions= model.predict(test)
    return predictions