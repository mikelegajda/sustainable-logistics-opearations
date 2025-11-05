# Sustainable Logistics Operations

Website of the course on Sustainable Logistics Operations

## 🌐 Live Site

The website is deployed at: [https://mikelegajda.github.io/sustainable-logistics-opearations/](https://mikelegajda.github.io/sustainable-logistics-opearations/)

## 📚 About

This Jekyll-based static website provides course materials, exercises, and resources for learning sustainable logistics operations through practical optimization problems. The site features:

- **Interactive Exercises**: Python code examples with explanations
- **Copy & Download**: Easy code copying and downloading functionality
- **Google Colab Integration**: Space for adding interactive notebooks
- **Student Resources**: Comprehensive tools and references
- **Clean Design**: Modern, responsive interface

## 🚀 Local Development

### Prerequisites

- Ruby 3.x
- Bundler

### Setup

1. Clone the repository:
```bash
git clone https://github.com/mikelegajda/sustainable-logistics-opearations.git
cd sustainable-logistics-opearations
```

2. Install dependencies:
```bash
bundle install
```

3. Run the development server:
```bash
bundle exec jekyll serve
```

4. Open your browser to `http://localhost:4000/sustainable-logistics-opearations/`

## 📝 Adding New Exercises

To add a new exercise, create a markdown file in the `_exercises` directory:

```markdown
---
layout: exercise
title: "Your Exercise Title"
problem_set: 1
order: 1
description: "Brief description of the exercise"
download_url: "https://raw.githubusercontent.com/mikelegajda/sustainable_logistics/main/yourfile.py"
colab_link: "https://colab.research.google.com/..." # Optional
explanation: |
  Your detailed explanation here
notes: |
  Additional notes here
---

```python
# Your Python code here
```
```

## 🎨 Customization

- **Styling**: Edit `assets/css/style.css`
- **JavaScript**: Modify `assets/js/main.js`
- **Configuration**: Update `_config.yml`
- **Layouts**: Customize in `_layouts/` directory

## 📦 Structure

```
.
├── _config.yml           # Jekyll configuration
├── _exercises/           # Exercise markdown files
├── _includes/            # Reusable HTML components
├── _layouts/             # Page layouts
├── assets/               # CSS, JS, and images
├── index.html            # Homepage
├── exercises.html        # Exercises list page
├── resources.html        # Student resources page
└── about.html            # About page
```

## 🔧 Technologies

- **Jekyll**: Static site generator
- **GitHub Pages**: Free hosting
- **Rouge**: Syntax highlighting
- **Font Awesome**: Icons

## 📄 License

This project is part of the Sustainable Logistics Operations course.
