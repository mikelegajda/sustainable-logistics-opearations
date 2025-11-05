# Adding Exercises Guide

This guide explains how to add new exercises from the [sustainable_logistics repository](https://github.com/mikelegajda/sustainable_logistics) to the website.

## Quick Steps

1. Create a new markdown file in `_exercises/` directory
2. Add frontmatter with exercise metadata
3. Include the Python code
4. Build and test locally

## File Naming Convention

Use descriptive names that indicate the problem set:
- `ps1-exercise-name.md` - Problem Set 1
- `ps2-exercise-name.md` - Problem Set 2
- etc.

## Template

Create a file like `_exercises/ps2-assignment-problem.md`:

```markdown
---
layout: exercise
title: "Assignment Problem"
problem_set: 2
order: 1
description: "Brief one-line description of the exercise"
download_url: "https://raw.githubusercontent.com/mikelegajda/sustainable_logistics/main/DSL_PS_2_assignment_1.py"
colab_link: "https://colab.research.google.com/..." # Optional - add when notebook is ready
explanation: |
  Detailed explanation of the problem and approach.
  
  **Key Concepts:**
  - Concept 1
  - Concept 2
  
  **Problem Description:**
  Explain the problem here.
  
notes: |
  **Try This:**
  - Suggestion 1
  - Suggestion 2
  
  **Applications:**
  - Real-world use case 1
  - Real-world use case 2
---

\`\`\`python
# Paste the Python code from the sustainable_logistics repository here
from ortools.sat.python import cp_model

def main():
    # Your code here
    pass

if __name__ == '__main__':
    main()
\`\`\`
```

## Frontmatter Fields

### Required Fields:
- **layout**: Always use `exercise`
- **title**: Exercise title (appears as page heading)
- **problem_set**: Number (0-6) for organizing exercises
- **order**: Number for ordering within a problem set
- **description**: Brief description shown in exercise list
- **download_url**: Link to raw Python file on GitHub

### Optional Fields:
- **colab_link**: Link to Google Colab notebook
- **explanation**: Detailed explanation (markdown supported)
- **notes**: Additional notes, tips, variations (markdown supported)

## Getting Code from sustainable_logistics Repository

1. Navigate to: https://github.com/mikelegajda/sustainable_logistics
2. Click on the Python file you want to add
3. Click "Raw" button to view raw file
4. Copy the URL for the `download_url` field
5. Copy the code content for the markdown code block

## Problem Set Organization

The exercises are organized by problem sets:

- **PS 0**: Introduction / Bonus exercises (like N-Queens)
- **PS 1**: Introduction to Optimization (CP-SAT, Linear Programming)
- **PS 2**: Assignment Problems
- **PS 3**: Routing Problems (TSP)
- **PS 4**: Vehicle Routing Problems (VRP, CVRP)
- **PS 5**: Packing Problems (Knapsack, Bin Packing)
- **PS 6**: Facility Location (P-median, Set Covering)

## Adding Google Colab Notebooks

When you create a Google Colab notebook for an exercise:

1. Create the notebook in Google Colab
2. Make it publicly accessible
3. Get the sharing link
4. Add it to the frontmatter:

```yaml
colab_link: "https://colab.research.google.com/drive/your-notebook-id"
```

The website will automatically display a "Open in Colab" button.

## Testing Locally

After adding exercises:

```bash
# Build the site
bundle exec jekyll build

# Serve locally
bundle exec jekyll serve

# View at http://localhost:4000/sustainable-logistics-opearations/
```

## Example: Adding All PS2 Exercises

Here's how you would add the three PS2 exercises:

### 1. PS2 Assignment Structure
File: `_exercises/ps2-assignment-structure.md`

```markdown
---
layout: exercise
title: "Assignment Problem Structure"
problem_set: 2
order: 1
description: "Basic structure for solving assignment problems with OR-Tools"
download_url: "https://raw.githubusercontent.com/mikelegajda/sustainable_logistics/main/DSL_PS_2_assignment_structure.py"
---

\`\`\`python
# Code from DSL_PS_2_assignment_structure.py
\`\`\`
```

### 2. PS2 Assignment 1
File: `_exercises/ps2-assignment-1.md`

```markdown
---
layout: exercise
title: "Assignment Problem Solution 1"
problem_set: 2
order: 2
description: "Complete solution for assignment problem using CP-SAT solver"
download_url: "https://raw.githubusercontent.com/mikelegajda/sustainable_logistics/main/DSL_PS_2_assignment_1.py"
---

\`\`\`python
# Code from DSL_PS_2_assignment_1.py
\`\`\`
```

### 3. PS2 Assignment 2
File: `_exercises/ps2-assignment-2.md`

```markdown
---
layout: exercise
title: "Assignment Problem Solution 2"
problem_set: 2
order: 3
description: "Alternative solution approach for assignment problems"
download_url: "https://raw.githubusercontent.com/mikelegajda/sustainable_logistics/main/DSL_PS_2_assignment_2.py"
---

\`\`\`python
# Code from DSL_PS_2_assignment_2.py
\`\`\`
```

## Bulk Adding Exercises

To add all exercises at once, you can use this approach:

1. List all files from the sustainable_logistics repo
2. For each file, create a corresponding markdown file
3. Follow the naming and organization pattern
4. Add explanations gradually (they can be added later)

## Tips

- **Start Simple**: Add exercises without explanations first, then enhance them
- **Consistent Naming**: Use lowercase with hyphens for file names
- **Problem Set Numbers**: Keep exercises organized by problem set
- **Order Field**: Use order to control the sequence within a problem set
- **Test Locally**: Always test the build before committing

## Getting Help

- Check existing exercises in `_exercises/` for examples
- Review the Jekyll documentation: https://jekyllrb.com/docs/
- Check the course repository: https://github.com/mikelegajda/sustainable_logistics

## Markdown Tips

In the explanation and notes fields, you can use:

- **Bold**: `**text**`
- *Italic*: `*text*`
- Lists: `- item`
- Code: `` `code` ``
- Links: `[text](url)`
- Headers: `## Header`

The `|` character after `explanation:` and `notes:` allows multi-line content.
