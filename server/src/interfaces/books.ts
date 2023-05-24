export interface books {
  name: string;
  id: string;
  source: string;
  group: string;
  coverUrl: string;
  published: string;
  author?: string;
  contents: object[];
  alias?: string[];
}
