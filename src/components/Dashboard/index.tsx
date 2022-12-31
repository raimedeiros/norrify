import { CategoriesList } from '../CategoriesList';
import { DashboardContainer, DashboardLogo, DashboardTitle } from './styles';

const norrisLogo = 'https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png';

export function Dashboard() {
  return (
    <DashboardContainer>
      <div className="header-block text-center">
        <DashboardLogo alt="Chuck Norris icon" src={norrisLogo}></DashboardLogo>
        <DashboardTitle>
          <span>Hey Norris, make a joke!</span>
        </DashboardTitle>
      </div>
      <CategoriesList></CategoriesList>
    </DashboardContainer>
  );
}
