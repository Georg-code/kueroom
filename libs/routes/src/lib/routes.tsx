import { Route, Link } from 'react-router-dom';

import './routes.module.scss';

/* eslint-disable-next-line */
export interface RoutesProps {}

export function Routes(props: RoutesProps) {
  return (
    <div>
      <h1>Welcome to Routes!</h1>

      <ul>
        <li>
          <Link to="/">routes root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the routes root route.</div>}
      />
    </div>
  );
}

export default Routes;
