import { Link } from 'react-router-dom';
import { NavigatorBack } from './styles';

export function Navigator() {
  return (
    <NavigatorBack className="navigator">
      <Link to="/"> Back </Link>
    </NavigatorBack>
  );
}
