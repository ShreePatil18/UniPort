# UniPort - Universal Portfolio 🚀

UniPort is a dynamic and customizable portfolio template built using Flask and HTML, designed to showcase your skills, projects, and personal information. Powered by JSON for flexible and reusable data integration, UniPort allows you to easily update and manage your portfolio without modifying the core code.

## Features 🌟
- **Dynamic Content**: Uses JSON to manage portfolio data, making it easy to update.
- **Customizable**: Modify the template to suit your unique style and needs.
- **Lightweight and Efficient**: Built with Flask and HTML, ensuring fast performance.
- **Responsive Design**: Optimized for all devices, from desktops to smartphones.

## Installation 🛠️
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/uniport.git
   cd uniport
   ```

2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the Flask application:
   ```bash
   python app.py
   ```

4. Open your browser and navigate to `http://127.0.0.1:5000/` to view your portfolio.

## Usage ✨
1. **Edit JSON File**: Update the `data.json` file with your information, including navigation links, experience, projects, skills, and contact details.
2. **Customize HTML**: Modify the `index.html` file in the `templates` folder to match your desired layout and styling.
3. **Add Static Files**: Place your images, CSS, and JavaScript files in the `static` folder.

## File Structure 📂
```
UniPort/
|-- app.py           # Main Flask application
|-- data.json        # Portfolio data
|-- templates/
|   |-- index.html   # HTML template
|-- static/
    |-- css/         # Stylesheets
    |-- images/      # Images
    |-- js/          # JavaScript files
```

## JSON Data Format 📝
Example structure for `data.json`:
```json
{
  "name": "Your Name",
  "navigation": [
    { "label": "Experience", "href": "#experience" },
    { "label": "Projects", "href": "#projects" },
    { "label": "Contact", "href": "#contact" }
  ],
  "experience": {
    "title": "Experience",
    "itemsll": [
      {
        "title": "Software Engineer",
        "company": "Tech Corp",
        "duration": "Jan 2020 - Present",
        "details": [
          "Developed scalable web applications using Flask and React.",
          "Optimized database queries to improve application performance."
        ]
      }
    ]
  },
  "projects": {
    "title": "Projects",
    "itemsll": [
      {
        "title": "Dynamic Portfolio",
        "description": "A portfolio template using Flask and JSON.",
        "link": "#"
      }
    ]
  },
  "skills": {
    "title": "Skills",
    "s_items": [
      { "name": "Languages", "level": "Python, Java, C++" },
      { "name": "Frameworks", "level": "Flask, Django" }
    ]
  },
  "contact": {
    "title": "Contact",
    "phone": "123-456-7890",
    "email": "your.email@example.com"
  }
}
```

## Contributing 🤝
Feel free to fork this repository and contribute by submitting a pull request. Suggestions and improvements are welcome!



---

Create your portfolio effortlessly with UniPort and showcase your talent to the world! 🌍

