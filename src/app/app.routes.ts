import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Notes } from './notes/notes';
import { Trash } from './trash/trash';
import { Invalid } from './invalid/invalid';
import { Note } from './notes/note/note';

export const routes: Routes = [
    { path: '', component: Home },
    {
        path: 'notes', component: Notes, children:
            [
                { path: ':notes', component: Note },
                { path: 'note', component: Note },
                { path: 'note/:note', component: Note },


            ]
    },
    { path: 'trash', component: Trash },
    { path: 'test', redirectTo: 'notes', pathMatch: 'full' },
    { path: '**', component: Invalid },//wildcard route - should always in the last
];
