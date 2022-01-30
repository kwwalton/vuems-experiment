export default {
  name: '@example/core',
  order: 10,
  aliases: {
    '@Core': '/',
  },
  relations: [],
  plugins: [
    {
      ssr: true,
      src: './plugins/axios',
    },
  ],
}
