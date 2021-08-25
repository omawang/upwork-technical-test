import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

import { GridNews, Map, TopBar, NewsDetail } from '../../Components';
import { newsApi } from '../../Libs';
import { HomePageStyles } from './Styles';

const apiKey = '1c791c93bc39430595371fe5217a439b';
export const HomePage = () => {
  const classes = HomePageStyles();
  const [search, setSearch] = useState('economy');
  const [continent, setContinent] = useState('');
  const [articles, setArticles] = useState([]);
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const fetchData = useCallback(async () => {
    // continent
    // na - North America
    // sa - South America
    // af - Africa
    // eu - Europe
    // as - Asia
    // oc - Oceania
    // languages
    // ar,de,en,es,fr,he,it,nl,no,pt,ru,se,ud,zh
    const langMap = [
      { continent: 'na', lang: 'en' },
      { continent: 'sa', lang: '' },
      { continent: 'af', lang: 'ar' },
      { continent: 'eu', lang: 'de' },
      { continent: 'as', lang: 'he' },
      { continent: 'oc', lang: '' },
    ];

    let lang = '';
    for (let i = 0; i < langMap.length; i++) {
      const item = langMap[i];
      if (item.continent === continent) lang = item.lang;
    }

    const query = encodeURI(search);
    const res = await newsApi.get(
      `/everything?q=${query}&language=${lang}&from=2021-07-25&apiKey=${apiKey}`
    );
    setArticles(res.data.articles);
  }, [search, continent, setArticles]);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  
  // eslint-disable-next-line
  const debouncedChangeHandler = useCallback(
    debounce(handleChangeSearch, 300),
    []
  );

  const handleChangeContinent = (val: string) => {
    setActiveIndex(null);
    setContinent(val ? val : '');
  };

  const handleShowDetail = (value: number) => {
    setActiveIndex(value);
  };

  const handleCloseDetail = () => {
    setActiveIndex(null);
  };

  const handleNext = () => {
    if (activeIndex && activeIndex < articles.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  useEffect(() => {
    if (search.length >= 3) {
      fetchData();
    }
  }, [search, fetchData]);

  useEffect(() => {
    fetchData();
  }, [continent, fetchData]);

  return (
    <div className={classes.root}>
      <TopBar defaultSearch={search} onChange={debouncedChangeHandler} />
      <div className={classes.content}>
        <div className={classes.leftContent}>
          {activeIndex === null ? (
            <GridNews data={articles} onClick={handleShowDetail} />
          ) : (
            <NewsDetail
              article={articles[activeIndex]}
              onClose={handleCloseDetail}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}
        </div>
        <div className={classes.rightContent}>
          <div className={classes.mapWrapper}>
            <Map continent={continent} onChange={handleChangeContinent} />
          </div>
        </div>
      </div>
    </div>
  );
};
