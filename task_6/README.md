## WP REST API

Спомощью curl получены заголовки постов на моем WordPress сайте запущенном на vscale.io http://82.202.236.227

```bash
echo module.exports = > posts.js
curl 82.202.236.227/wp-json/wp/v2/posts >> posts.js
```

Заколовки получены используя скрипт: `node titles.js`