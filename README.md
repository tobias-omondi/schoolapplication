# schoolapplication
This repo has 3 main features: the front-end part for a user, an admin dashboard, and a backend system of a school system. The application's main problem solving is about parents being able to see how their children perform in school through a child portfolio. The student portfolio will contain all details about a student since the day they joined school, from lower primary to junior secondary. Students will be able to get assignments through their own portfolio and access teachers' comments about how to improve on their academic work. Through the student portfolio, their parents will be able to comment on their child’s portfolio through the teachers' dashboard. The school system will also act as a major school website with updates on events, news, blog, and many more features. Though, for a child to get access to a portfolio, he/she will have to log in with their credentials.

## Tech Stack used
### Front part
REACT + VITE
FRAMER-MOTION
REACT-ICONS
TAILWIND CSS / CSS
CHART.JS

### BACKEND
PYTHON django (drf)
sql
postgress

# Frontend to get start
    clone 1st
    cd Project folder
    cd file folders
    npm install
    nvm use 22
    npm run dev

# backend
    clone the repo
    cd backend
## Enviroment
    python3 -m venv myenv

## On Linux/macOS
    source myenv/bin/activate

## on windows
    myenv\Scripts\activate

## intall Django package
    python -m pip install Django
    pip freeze > requirements.txt
    pip install -r requirements.txt
## creating migration
    python manage.py makemigrations
    python manage.py makemigrations myapp
## applying migration
    python manage.py migrate
    python manage.py migrate myapp
## run development server
    python manage.py runserver
     
    
