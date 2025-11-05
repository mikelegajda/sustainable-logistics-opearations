---
layout: exercise
title: "Knapsack Problem"
problem_set: 5
order: 1
description: "Solving the 0-1 knapsack problem using CP-SAT solver"
download_url: "https://raw.githubusercontent.com/mikelegajda/sustainable_logistics/58f68b0b45d0fe772f391ce6009ccf68c12d4e07/DSL_PS_5_KP.py"
explanation: |
  The Knapsack Problem is a fundamental optimization problem in logistics and resource allocation.
  
  **Problem Statement:**
  Given a set of items, each with a weight and value, determine which items to include in a collection (knapsack)
  so that the total weight doesn't exceed a given limit and the total value is maximized.
  
  **0-1 Knapsack:**
  Each item can be selected at most once (binary decision: take it or leave it).
  
  **Key Concepts:**
  - Binary decision variables (0 or 1)
  - Weight capacity constraint
  - Value optimization (maximization)
  - Resource allocation under constraints
  
  **Real-World Applications:**
  - Cargo loading optimization
  - Investment portfolio selection
  - Task scheduling with resource limits
  - Container loading for shipping
notes: |
  **Variations to Try:**
  - Modify item weights and values
  - Change the knapsack capacity
  - Add more items
  - Compare solutions with different capacities
  
  **Extensions:**
  - Multiple knapsacks
  - Fractional knapsack (items can be divided)
  - Multi-dimensional knapsack (multiple constraints)
---

```python
from ortools.sat.python import cp_model


def main():
    # Data
    weights = [48, 30, 42, 36, 36, 48, 42, 42, 36, 24, 30, 30, 42, 36, 36]
    values = [10, 30, 25, 50, 35, 30, 15, 40, 30, 35, 45, 10, 20, 30, 25]
    capacities = [100]
    
    # Create the model
    model = cp_model.CpModel()
    
    # Variables
    # x[i] = 1 if item i is packed, 0 otherwise
    x = [model.NewBoolVar(f'x_{i}') for i in range(len(weights))]
    
    # Constraints
    # Total weight must not exceed capacity
    model.Add(sum(x[i] * weights[i] for i in range(len(weights))) <= capacities[0])
    
    # Objective: maximize total value
    model.Maximize(sum(x[i] * values[i] for i in range(len(values))))
    
    # Solve
    solver = cp_model.CpSolver()
    status = solver.Solve(model)
    
    # Print solution
    if status == cp_model.OPTIMAL or status == cp_model.FEASIBLE:
        print(f'Total value = {solver.ObjectiveValue()}')
        print(f'Total weight = {sum(solver.Value(x[i]) * weights[i] for i in range(len(weights)))}')
        print('\\nPacked items:')
        for i in range(len(weights)):
            if solver.Value(x[i]) == 1:
                print(f'Item {i}: weight = {weights[i]}, value = {values[i]}')
    else:
        print('No solution found.')


if __name__ == '__main__':
    main()
```
