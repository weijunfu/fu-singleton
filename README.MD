# fu-singleton
> 构建单例对象

## install 安装

```
npm install fu-singleton
// or
yarn add fu-singleton
```

## use 使用
```
import singleton from 'fu-singleton'

class Author {
            
    constructor() {
        console.log('create author...')
    }
}

// 构建单例对象
const author = singleton(Author);

const author1 = new author();
const author2 = new author();

console.log(author1 == author2);    // log: true

```