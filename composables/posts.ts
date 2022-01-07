interface Hashtag {
  id: number;
  word: string;
}

export interface Post {
  id: number;
  groupId: number;
  groupOrder: number;
  idolId: number;
  name: string;
  message: string;
  iconPath: string;
  imagePath?: string;
  postTime: string;
  hashtags: Hashtag[];
}

export const usePosts = () => {
  const cache = useState<Object>('posts', () => new Object());
  const hashtags = useState<Hashtag[]>('hashtags', () => null);

  return {
    cache,
    getPosts: async (url: string): Promise<Post[]> => {
      console.log(`cache[${url}]`, cache.value[url]);
      if (cache.value[url]) return cache.value[url];
      else {
        await fetch(url, {
          method: "GET",
          mode: "cors"
        })
          .then(res => res.json())
          .then(data => {
            cache.value[url] = data;
          });
      }
      return cache.value[url];
    },
    getPost: async (url: string): Promise<Post> => {
      console.log(`cache[${url}]`, cache.value[url]);
      if (cache.value[url]) return cache.value[url];
      else {
        await fetch(url, {
          method: "GET",
          mode: "cors"
        })
          .then(res => res.json())
          .then(data => {
            cache.value[url] = data;
          });
      }
      return cache.value[url];
    },

    hashtags,
    getHashtags: async (url: string): Promise<Hashtag[]> => {
      console.log('hahshtags cache', hashtags.value);
      if (hashtags.value !== null) return hashtags.value;
      else {
        await fetch(url, {
          method: "GET",
          mode: "cors"
        })
          .then(res => res.json())
          .then(data => {
            hashtags.value = data;
          });
      }
      return hashtags.value
    }
  }
}
