import React, { createContext, useReducer } from 'react';

// 5. the reducer is used to update the state based on the action
export const AppReducer = (state, action) => {
  let new_expenses = [];
  switch (action.type) {
    case 'ADD_QUANTITY':
      let updatedqty = false;
      state.expenses.map((expense)=> {
        if (expense.name === action.payload.name) {
          expense.quantity = expense.quantity + action.quantity;
          updatedqty = true;
        }
        new_expenses.push(expense);
        return true;

  })

  state.expenses = new_expenses;
      action.type = "DONE";
      return {
        ...state,
      },
        case 'RED_QUANTITY':
      state.expenses.map((expense)=>{
        if (expense.name === action.payload.name) {
          expense.quantity = expense.quality - action.payload.quantity;
        }
        expense.quantity = expense.quantity < 0 ? 0: expense.quantity;
        new_expenses.push(expense);
        return true;
      })

      state.expenses = new_expenses;
      action.type = "DONE";
      return {
        ...state,
      };
    case 'DELETE_ITEM':
      state.expenses.map((expense)=> {
        















      
