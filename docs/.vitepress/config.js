/* eslint-disable */
module.exports = {
  title: 'My Blog',
  description: 'Just playing around.',
  head: [
    ['meta', { property: 'og:description', content: 'description' }],
  ],
  lang: 'ko-KR',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Main', link: '/main/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/contact/' },
      { text: 'Foo', link: '/foo/' },
      { text: 'Emoji', link: '/emoji/' },
    ],
  }
}
