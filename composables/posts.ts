export interface Post {
  id: number,
  groupId: number,
  groupOrder: number,
  idolId: number,
  name: string,
  message: string,
  iconPath: string,
  postTime: string,
  hashtags: string[]
}

export const usePosts = () => {
  const posts = useState<Post[]>('posts', () => null);

  return {
    posts
  }
}
