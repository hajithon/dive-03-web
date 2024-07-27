import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getArticleContent from '../src/apis/ArticleContent';

const mock = new MockAdapter(axios);

describe('Get Article Content API', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should return article content for a given articleId', async () => {
    const mockData = {
      nickname: '참새',
      title: '제목',
      totalContents: 4,
      contents: [
        { subtitle: '베이스의 역사', content: '베이스 기타는 현대 음악에서 중요한 역할을 차지하는 악기로...' },
        { subtitle: '베이스의 역사', content: '베이스 기타는 현대 음악에서 중요한 역할을 차지하는 악기로...' },
        { subtitle: '베이스의 역사', content: '베이스 기타는 현대 음악에서 중요한 역할을 차지하는 악기로...' },
        { subtitle: '베이스의 역사', content: '베이스 기타는 현대 음악에서 중요한 역할을 차지하는 악기로...' },
      ],
    };
    mock.onGet('http://52.79.249.11/articles/1').reply(200, mockData);

    const response = await getArticleContent(1);
    expect(response).toEqual(mockData);
  });
});
