import { useConfig } from '../composables/config';
const { config } = useConfig();

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
  postTime: string;
  hashtags: Hashtag[];
}

export const usePosts = () => {
  const cache = useState<Object>('posts', () => new Object());

  return {
    cache,
    getPosts: async (path: string): Promise<Post[]> => {
      console.log(`cache[${path}]`, cache.value[path]);
      if (cache.value[path]) return cache.value[path];
      else {
        const url = `${config.value.api_base}${path}`;
        await fetch(url, {
          method: "GET",
          mode: "cors"
        })
          .then(res => res.json())
          .then(data => {
            cache.value[path] = data;
          });
      }
      return cache.value[path];
    },
    getPost: async (path: string): Promise<Post> => {
      console.log(`cache[${path}]`, cache.value[path]);
      if (cache.value[path]) return cache.value[path];
      else {
        const url = `${config.value.api_base}${path}`;
        await fetch(url, {
          method: "GET",
          mode: "cors"
        })
          .then(res => res.json())
          .then(data => {
            cache.value[path] = data;
          });
      }
      return cache.value[path];
    }
  }
}
