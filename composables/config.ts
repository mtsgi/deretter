interface Config {
  about?: string,
  api_base?: string,
  copyrights?: string,
  privacy_policy?: string
}

export const useConfig = () => {
  const config = useState<Config>('config', () => { return {} });
  return {
    config
  }
}
