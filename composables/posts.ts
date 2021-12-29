interface Post {
  id: number,
  name: string,
  message: string,
  iconPath: string,
  hashtags: string[]
}

export const usePosts = () => {
  const posts = useState<Post[]>('posts', () => null);
  return {
    posts
  }
}
