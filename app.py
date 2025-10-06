# Import Flask and the render_template function for rendering templates
from flask import Flask, render_template

# Create a Flask app instance
app = Flask(__name__)

# Route for home page
@app.route('/')
def home():
    # Renders templates/index.html
    return render_template('index.html')

# Route for About page
@app.route('/about')
def about():
    return render_template('about.html')

# Route for Skills page
@app.route('/skills')
def skills():
    return render_template('skills.html')

# Route for Experience page
@app.route('/experience')
def experience():
    return render_template('experience.html')

# Route for Education page
@app.route('/education')
def education():
    return render_template('education.html')

# Route for Contact page
@app.route('/contact')
def contact():
    return render_template('contact.html')

# Run the Flask server only if this file is executed directly
if __name__ == "__main__":
    app.run(debug=True)
