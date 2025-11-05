---
layout: exercise
title: "CP-SAT Complete Solution"
problem_set: 1
order: 1
description: "Introduction to Google OR-Tools CP-SAT solver - finding all solutions to a constraint satisfaction problem"
download_url: "https://raw.githubusercontent.com/mikelegajda/sustainable_logistics/58f68b0b45d0fe772f391ce6009ccf68c12d4e07/DSL_PS_1_cp-sat_complete_sol.py"
explanation: |
  This exercise demonstrates the CP-SAT (Constraint Programming - Boolean Satisfiability) solver from Google OR-Tools.
  
  **Key Concepts:**
  - Creating a constraint programming model
  - Defining integer variables with domains
  - Adding constraints (inequality, comparison)
  - Finding all possible solutions
  
  **Problem Setup:**
  - Three variables (x, y, z) each ranging from 0 to 2
  - Constraint: x ≠ y
  - Constraint: x > z
  
  **Solution Callback:**
  The `VarArraySolutionPrinter` class is used to capture and display all solutions found by the solver.
  This is particularly useful when you want to explore the solution space of a problem.
notes: |
  **Try This:**
  - Modify the domain size (num_vals)
  - Add more constraints
  - Change the variable domains
  - Observe how the number of solutions changes
---

```python
from ortools.sat.python import cp_model


class VarArraySolutionPrinter(cp_model.CpSolverSolutionCallback):
    """Print intermediate solutions."""

    def __init__(self, variables):
        cp_model.CpSolverSolutionCallback.__init__(self)
        self.__variables = variables
        self.__solution_count = 0

    def on_solution_callback(self):
        self.__solution_count += 1
        for v in self.__variables:
            print('%s=%i' % (v, self.Value(v)), end=' ')
        print()

    def solution_count(self):
        return self.__solution_count


def SearchForAllSolutionsSampleSat():
    """Showcases calling the solver to search for all solutions."""
    # Creates the model.
    model = cp_model.CpModel()

    # Creates the variables.
    num_vals = 3
    x = model.NewIntVar(0, num_vals - 1, 'x')
    y = model.NewIntVar(0, num_vals - 1, 'y')
    z = model.NewIntVar(0, num_vals - 1, 'z')

    # Create the constraints.
    model.Add(x != y)
    model.Add(x > z)

    # Create a solver and solve.
    solver = cp_model.CpSolver()
    solution_printer = VarArraySolutionPrinter([x, y, z])
    status = solver.SearchForAllSolutions(model, solution_printer)

    print('Status = %s' % solver.StatusName(status))
    print('Number of solutions found: %i' % solution_printer.solution_count())


SearchForAllSolutionsSampleSat()
```
