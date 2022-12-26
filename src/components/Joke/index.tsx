import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Moment from 'react-moment';
import NorrisService, { JokeResponse } from '../../services/api';

import { Navigator } from './components/Navigator';
import { JokeCard } from './style';

interface JokeProps {
  selectedCategory: string;
}

export function Joke() {
  const location = useLocation<JokeProps>();
  const { selectedCategory } = location.state;
  const [joke, setJoke] = useState<JokeResponse>();
  const [isLoading, setIsLoading] = useState(true);

  async function loadJoke() {
    setIsLoading(true);
    const joke = await NorrisService.getJoke(selectedCategory);
    setJoke(joke);
    setIsLoading(false);
  }

  useEffect(() => {
    loadJoke();
  }, [selectedCategory]);

  return joke ? (
    <div className="joke-block">
      <Navigator />
      <div className="row text-center">
        <JokeCard className="col-12 col-md-8 card">
          <img alt="ícone" src={joke.icon_url}></img>
          <div className="title-card">
            <h2>
              <i>Joke</i>
            </h2>
          </div>
          <div className="content-card">
            <p className="joke-content">{joke.value}</p>
            <p>
              <i>Created on: </i>
              <Moment format="DD/MM/YYYY">{joke.created_at}</Moment>
              <br />
            </p>
            <p className="text-right">
              <small>Categories: {joke.categories}</small>
            </p>
          </div>
          <div className="footer-card">
            <p className="carregar-outra" onClick={() => loadJoke()}>
              {isLoading === true && <span>Loading</span>}
              {isLoading === false && <span>Load another joke</span>}
            </p>
          </div>
        </JokeCard>
      </div>
    </div>
  ) : (
    <></>
  );
}
