module.exports = {
  purge:{
    mode: 'layers',
    content: ['./public/**/*.html/'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      cwc: {
        red: '#E84977',
        blue: '@49AADE',
        grey: '#222222',
      },
      // these images are customized to twcss classes- can be used as bg-{name}
      backgroundImage: (theme) => ({
        'nw-hdr' : "url('/public/img_news/header.jpg')",
        'nw-1' : "url('/public/img_news/BlackOverlay.png'), url('/public/img_news/news1.jpg')",
        'nw-2' : "url('/public/img_news/BlackOverlay.png'), url('/public/img_news/news2.jpg')",
        'nw-3' : "url('/public/img_news/BlackOverlay.png'), url('/public/img_news/news3.jpg')",
        'nw-4' : "url('/public/img_news/BlackOverlay.png'), url('/public/img_news/news4.jpg')",
        'nw-5' : "url('/public/img_news/BlackOverlay.png'), url('/public/img_news/news5.jpg')",
        'nw-6' : "url('/public/img_news/BlackOverlay.png'), url('/public/img_news/news6.jpg')",
      }),
      fontSize: {
        'xxs' : "0.5rem",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}