import { useEffect, useState } from 'react';
import NorrisService from '../../services/api';
import { Category } from '../Category';
import { Loading } from '../Loading';

export function CategoriesList() {
  const [categories, setCategories] = useState<[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      setCategories(await NorrisService.getCategories());
    };
    getCategories();
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading === true && <Loading></Loading>}

      {isLoading === false && categories && (
        <div className="row text-center">
          <div className="col-12 col-md-8 card">
            <div className="title-card">
              <h2>Select a category</h2>
            </div>

            <div className="content-card">
              <div className="row">
                {categories.map((category) => (
                  <>
                    <div key={category} className="col-6 col-md-4 text-center">
                      <Category categoryName={category} />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
