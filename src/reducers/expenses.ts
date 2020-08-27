import { Expense } from "../actions/types/Expenses";
import { ExpenseActionTypes } from "../actions/types/Actions";

const expensesReducerDefaultState: Expense[] = [];

const expenseReducer = (
  state = expensesReducerDefaultState,
  action: ExpenseActionTypes
): Expense[] => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.expense.id) {
          return {
            ...expense,
            ...action.expense,
          };
        } else {
          return expense;
        }
      });
    case "SET_EXPENSES":
      return action.expenses;
    default:
      return state;
  }
};

export { expenseReducer };
