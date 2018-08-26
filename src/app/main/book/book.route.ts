import { Route } from '@angular/router';
import { BookComponent } from './book.component';
import { UserRouteAccessService } from '../../shared';

export const bookRoute: Route = {
    path: 'books/:authorId',
    component: BookComponent,
    data: {
      authorities: []
    },
    canActivate: [UserRouteAccessService]
};
