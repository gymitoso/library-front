import { Route } from '@angular/router';
import { MainComponent } from './main';
import { UserRouteAccessService } from '../shared';
import { authorRoute } from './author';

export const mainRoute: Route = {
    path: '',
    component: MainComponent,
    data: {
        authorities: []
    },
    canActivate: [UserRouteAccessService],
    children: [authorRoute]
};
