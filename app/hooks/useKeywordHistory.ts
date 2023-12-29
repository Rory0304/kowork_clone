import React from 'react';

import LocalStorage from 'app/utils/localStorage';

const LOCAL_STORAGE_KEY = 'recent-search-result';

const useKeywordHistory = () => {
  const [keywordHistory, setKeywordHistory] = React.useState<string[]>([]);

  const insertKeyword = React.useCallback(
    async (keyword: string) => {
      const updatedState = [...keywordHistory, keyword];
      await LocalStorage.setItem({
        name: LOCAL_STORAGE_KEY,
        item: JSON.stringify(updatedState),
      });

      setKeywordHistory(updatedState);
    },
    [keywordHistory]
  );

  const removeKeyword = React.useCallback(
    async (keyword: string) => {
      const updatedState = keywordHistory.filter(item => item !== keyword);
      await LocalStorage.setItem({
        name: LOCAL_STORAGE_KEY,
        item: JSON.stringify(updatedState),
      });
      setKeywordHistory(updatedState);
    },
    [keywordHistory]
  );

  const resetKeywordHistory = React.useCallback(async () => {
    await LocalStorage.setItem({
      name: LOCAL_STORAGE_KEY,
      item: '',
    });
    setKeywordHistory([]);
  }, []);

  const getKeywordHistory = React.useCallback(async () => {
    const storedHistory = await LocalStorage.getItem(LOCAL_STORAGE_KEY);
    return storedHistory;
  }, []);

  const initializeKeywordHistory = React.useCallback(async () => {
    const history = await getKeywordHistory();
    setKeywordHistory(history);
  }, []);

  React.useEffect(() => {
    (async () => {
      console.log('here');
      await initializeKeywordHistory();
    })();
  }, []);

  return {
    keywordHistory,
    insertKeyword,
    removeKeyword,
    getKeywordHistory,
    resetKeywordHistory,
    initializeKeywordHistory,
  };
};

export default useKeywordHistory;
