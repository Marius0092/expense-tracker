import { Component, OnInit } from '@angular/core';
import { Expense } from '../models/expense-model';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css'],
})
export class ExpenseTrackerComponent {
  expenses: Expense[] = [];
  newExpense: Expense = { name: '', amount: '' };

  addExpense(): void {
    if (this.newExpense.name.trim() === '') {
      return; // Evita di aggiungere spese con dati non validi
    }

    const newExpense: Expense = {
      name: this.newExpense.name,
      amount: this.newExpense.amount,
    };

    this.expenses.push(newExpense);
    this.newExpense.name = '';
    this.newExpense.amount = '';
  }

  deleteExpense(expense: Expense): void {
    const expenseIndex = this.expenses.indexOf(expense);
    if (expenseIndex !== -1) {
      this.expenses.splice(expenseIndex, 1);
    }
  }

  getTotalExpenses(): string {
    const total = this.expenses.reduce((accumulator, expense) => {
      const expenseAmount = parseFloat(expense.amount);
      return accumulator + (isNaN(expenseAmount) ? 0 : expenseAmount);
    }, 0);

    return total.toLocaleString();
  }
}
