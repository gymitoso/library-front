import { Route } from '@angular/router';
import { MainComponent } from './main';
import { UserRouteAccessService } from '../shared';
import { authorRoute } from './author';
import { bookRoute } from './book';

export const mainRoute: Route = {
    path: '',
    component: MainComponent,
    data: {
        authorities: ['ROLE_USER', 'ROLE_ADMIN']
    },
    canActivate: [UserRouteAccessService],
    children: [authorRoute, bookRoute]
};
