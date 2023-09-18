from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)


@app.route('/')
def index():
    now = datetime.now()
    year = now.year
    month = now.month
    return render_template('calendar.html', year=year, month=month)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False)
