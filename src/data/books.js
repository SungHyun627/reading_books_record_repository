const PREFIX_DOCS_URL = 'https://saseungmin.github.io/reading_books_record_repository/docs';
const PREFIX_SUMMARIZE_URL = 'https://github.com/saseungmin/reading_books_record_repository/tree/master/summarize_books_in_markdown';

const books = [
  [
    {
      link: `${PREFIX_SUMMARIZE_URL}/%ED%95%A8%EC%88%98%ED%98%95%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8`,
      bookName: '함수형 자바스크립트',
      imgName: 'functional-javascript.jpeg',
    },
    {
      link: `${PREFIX_SUMMARIZE_URL}/The%20Nature%20of%20Software%20Development`,
      bookName: 'The Nature of Software Development',
      imgName: 'the-nature-of-software-development.jpeg',
    },
    {
      link: `${PREFIX_DOCS_URL}/agile/clean-agile/table-of-contents`,
      bookName: '클린 애자일: 새로운 세대를 위한 애자일 가치와 실천',
      imgName: 'Clean-Agile.jpeg',
    },
  ],
  [
    {
      link: `${PREFIX_SUMMARIZE_URL}/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%EC%9D%98%20%EC%82%AC%EC%8B%A4%EA%B3%BC%20%EC%98%A4%ED%95%B4`,
      bookName: '객체지향의 사실과 오해: 역할, 책임, 협력 관점에서 본 객체지향',
      imgName: 'essence-of-object-orientation.jpeg',
    },
    {
      link: `${PREFIX_SUMMARIZE_URL}/%EB%A3%A8%EB%B9%84%EB%A1%9C%20%EB%B0%B0%EC%9A%B0%EB%8A%94%20%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%20%EB%94%94%EC%9E%90%EC%9D%B8`,
      bookName: '루비로 배우는 객체지향 디자인',
      imgName: 'practical-object-oriented-design-in-ruby.jpeg',
    },
    {
      link: `${PREFIX_SUMMARIZE_URL}/%EC%97%98%EB%A0%88%EA%B0%95%ED%8A%B8%20%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8`,
      bookName: '엘리강트 오브젝트',
      imgName: 'elegant-object.jpeg',
    },
  ],
  [
    {
      link: `${PREFIX_SUMMARIZE_URL}/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8`,
      bookName: '오브젝트',
      imgName: 'objects.jpeg',
    },
    {
      link: `${PREFIX_SUMMARIZE_URL}/%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EC%A3%BC%EB%8F%84%20%EA%B0%9C%EB%B0%9C%EB%A1%9C%20%EB%B0%B0%EC%9A%B0%EB%8A%94%20%EA%B0%9D%EC%B2%B4%20%EC%A7%80%ED%96%A5%20%EC%84%A4%EA%B3%84%EC%99%80%20%EC%8B%A4%EC%B2%9C`,
      bookName: '테스트 주도 개발로 배우는 객체 지향 설계와 실천',
      imgName: 'growing-object-oriented-software-guided-by-tests.jpeg',
    },
    {
      link: `${PREFIX_DOCS_URL}/agile/lean-ux/table-of-contents`,
      bookName: '린 UX(LEAN UX)',
      imgName: 'Lean-UX.jpeg',
    },
  ],
  [
    {
      link: `${PREFIX_SUMMARIZE_URL}/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%ED%8C%A8%ED%84%B4%EA%B3%BC%20%ED%85%8C%EC%8A%A4%ED%8A%B8`,
      bookName: '자바스크립트 패턴과 테스트',
      imgName: 'javascript-pattern-and-test.jpeg',
    },
    {
      link: `${PREFIX_DOCS_URL}/javascript/modern-javascript/table-of-contents`,
      bookName: '자바스크립트 코딩의 기술',
      imgName: 'modern-javascript.jpeg',
    },
    {
      link: 'https://github.com/saseungmin/Node.js-tutorial',
      bookName: 'Node.js 교과서',
      imgName: 'node-js-textbook.jpeg',
    },
  ],
  [
    {
      link: 'https://github.com/saseungmin/react-tutorial',
      bookName: '리액트를 다루는 기술',
      imgName: 'react-book.jpeg',
    },
    {
      link: `${PREFIX_SUMMARIZE_URL}/You%20Don%E2%80%99t%20Know%20JS%201`,
      bookName: 'You Don’t Know JS 타입과 문법, 스코프와 클로저',
      imgName: 'you-dont-know-js-1.jpeg',
    },
    {
      link: `${PREFIX_SUMMARIZE_URL}/Do%20it%20TypeScript%20Programming`,
      bookName: 'Do it! 타입스크립트 프로그래밍',
      imgName: 'do-it-typescript.jpeg',
    },
  ],
  [
    {
      link: `${PREFIX_SUMMARIZE_URL}/Pro%20Git%202%ED%8C%90`,
      bookName: '프로 Git 2판: 그림으로 이해하는 Git의 작동 원리와 사용법',
      imgName: 'pro-git-2e.jpeg',
    },
    {
      link: `${PREFIX_DOCS_URL}/javascript/core-javascript/table-of-contents`,
      bookName: '코어 자바스크립트',
      imgName: 'core-javascript.jpeg',
    },
    {
      link: `${PREFIX_SUMMARIZE_URL}/%EC%89%BD%EA%B2%8C%20%EB%B0%B0%EC%9A%B0%EB%8A%94%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98`,
      bookName: '쉽게 배우는 알고리즘',
      imgName: 'algorism-book.jpeg',
    },
  ],
  [
    {
      link: `${PREFIX_SUMMARIZE_URL}/%ED%95%A8%EA%BB%98%20%EC%9E%90%EB%9D%BC%EA%B8%B0`,
      bookName: '함께 자라기',
      imgName: 'thinking-together.jpeg',
    },
  ],
];

export default books;