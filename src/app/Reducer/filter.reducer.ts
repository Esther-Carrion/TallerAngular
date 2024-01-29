import { createReducer, on } from '@ngrx/store';
import { setFilter, loadBooksSuccess } from '../Action/filter.actions';
import { Book } from '../Interfaces/interface-book';

export interface FilterState {
  filter: string;
  books: Book[];
}

export const initialState: FilterState = {
  filter: '',
  books: [],
};

export const filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filter }) => ({ ...state, filter })),
  on(loadBooksSuccess, (state, { books }) => ({ ...state, books }))
);
