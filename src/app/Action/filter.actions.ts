import { createAction, props } from '@ngrx/store';
import { Book } from '../Interfaces/interface-book';

export const setFilter = createAction('[Filter] Set Filter', props<{ filter: string }>());
export const applyFilter = createAction('[Filter] Apply Filter');
export const loadBooksSuccess = createAction('[Books] Load Books Success', props<{ books: Book[] }>());
