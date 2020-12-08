import * as React from 'react';
import { RedditApi } from '../api/RedditApi';

export default function useRedditResources(tag: string) {
  const [results, setResults] = React.useState<any[]>([]);

  React.useEffect(() => {
    async function loadRedditResourcesAsync() {
      try {
        const res = await RedditApi.getByTag(tag);
        setResults(res.data.data.children);
      } catch (err) {
        setResults([err]);
      }
    }

    loadRedditResourcesAsync();
  }, []);

  return results;
}
