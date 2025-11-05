---
layout: exercise
title: "Linear Programming Introduction"
problem_set: 1
order: 2
description: "Solving a simple linear optimization problem using OR-Tools linear solver"
download_url: "https://raw.githubusercontent.com/mikelegajda/sustainable_logistics/58f68b0b45d0fe772f391ce6009ccf68c12d4e07/DSL_PS_1_lp.py"
explanation: |
  This exercise introduces Linear Programming (LP) using Google OR-Tools' GLOP solver.
  
  **Key Concepts:**
  - Creating a linear programming solver
  - Defining continuous variables with bounds
  - Setting objective function (maximize/minimize)
  - Adding linear constraints
  
  **Problem:**
  A simple resource allocation problem where we need to optimize the use of limited resources
  to maximize profit or minimize cost.
  
  **Linear Programming Structure:**
  - **Variables:** Decision variables (what we control)
  - **Objective:** Function to optimize (maximize profit, minimize cost)
  - **Constraints:** Limitations and requirements
notes: |
  **Applications in Logistics:**
  - Transportation planning
  - Production scheduling
  - Resource allocation
  - Cost minimization
---

```python
from ortools.linear_solver import pywraplp


def LinearProgrammingExample():
    """Example of simple linear programming."""
    # Create the linear solver with the GLOP backend.
    solver = pywraplp.Solver.CreateSolver('GLOP')
    if not solver:
        return

    # Create the variables x and y.
    x = solver.NumVar(0, 1, 'x')
    y = solver.NumVar(0, 2, 'y')

    print('Number of variables =', solver.NumVariables())

    # Create a linear constraint, 0 <= x + y <= 2.
    ct = solver.Constraint(0, 2, 'ct')
    ct.SetCoefficient(x, 1)
    ct.SetCoefficient(y, 1)

    print('Number of constraints =', solver.NumConstraints())

    # Create the objective function, 3 * x + y.
    objective = solver.Objective()
    objective.SetCoefficient(x, 3)
    objective.SetCoefficient(y, 1)
    objective.SetMaximization()

    # Solve the system.
    status = solver.Solve()

    if status == pywraplp.Solver.OPTIMAL:
        print('Solution:')
        print('Objective value =', solver.Objective().Value())
        print('x =', x.solution_value())
        print('y =', y.solution_value())
    else:
        print('The problem does not have an optimal solution.')

    print('\\nAdvanced usage:')
    print('Problem solved in %f milliseconds' % solver.wall_time())
    print('Problem solved in %d iterations' % solver.iterations())


LinearProgrammingExample()
```
