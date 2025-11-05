---
layout: exercise
title: "N-Queens Problem"
problem_set: 0
order: 1
description: "Classic constraint programming problem - place N queens on an NxN chessboard"
download_url: "https://raw.githubusercontent.com/mikelegajda/sustainable_logistics/58f68b0b45d0fe772f391ce6009ccf68c12d4e07/DSL_PS__n_queens.py"
explanation: |
  The N-Queens problem is a classic constraint satisfaction problem that demonstrates the power of constraint programming.
  
  **Problem Statement:**
  Place N chess queens on an N×N chessboard so that no two queens threaten each other. Queens can attack horizontally, vertically, and diagonally.
  
  **Constraints:**
  - No two queens in the same row
  - No two queens in the same column  
  - No two queens on the same diagonal
  
  **CP-SAT Approach:**
  - One variable per column (queen position in that column)
  - AllDifferent constraint for rows
  - Custom constraints for diagonals
  
  **Learning Value:**
  While not directly a logistics problem, this exercise teaches important constraint programming concepts used in:
  - Resource scheduling
  - Conflict resolution
  - Constraint propagation techniques
notes: |
  **Experiment With:**
  - Different board sizes (N = 4, 8, 12, etc.)
  - Finding all solutions vs. just one
  - Counting solutions for different N
  
  **Fun Facts:**
  - For N=8, there are 92 solutions
  - The problem becomes computationally harder as N increases
  - Solutions have symmetrical patterns
---

```python
from ortools.sat.python import cp_model


class NQueenSolutionPrinter(cp_model.CpSolverSolutionCallback):
    """Print intermediate solutions."""

    def __init__(self, queens):
        cp_model.CpSolverSolutionCallback.__init__(self)
        self.__queens = queens
        self.__solution_count = 0

    def on_solution_callback(self):
        self.__solution_count += 1
        print(f'Solution {self.__solution_count}:')
        for i in range(len(self.__queens)):
            for j in range(len(self.__queens)):
                if self.Value(self.__queens[j]) == i:
                    print('Q', end=' ')
                else:
                    print('_', end=' ')
            print()
        print()

    def solution_count(self):
        return self.__solution_count


def main():
    # Board size
    board_size = 8
    
    # Create the model
    model = cp_model.CpModel()
    
    # Create variables
    # queens[i] is the row position of the queen in column i
    queens = [model.NewIntVar(0, board_size - 1, f'q_{i}') for i in range(board_size)]
    
    # Constraints
    # All queens must be in different rows
    model.AddAllDifferent(queens)
    
    # No two queens on same diagonal
    # For diagonal /, row - col must be different
    model.AddAllDifferent([queens[i] - i for i in range(board_size)])
    
    # For diagonal \\, row + col must be different
    model.AddAllDifferent([queens[i] + i for i in range(board_size)])
    
    # Create solver and solve
    solver = cp_model.CpSolver()
    solution_printer = NQueenSolutionPrinter(queens)
    
    # Search for all solutions
    solver.parameters.enumerate_all_solutions = True
    status = solver.Solve(model, solution_printer)
    
    print(f'Status: {solver.StatusName(status)}')
    print(f'Solutions found: {solution_printer.solution_count()}')


if __name__ == '__main__':
    main()
```
