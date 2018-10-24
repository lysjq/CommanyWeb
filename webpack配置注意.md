# babel版本问题： #

babel中版本：`babel-loader | babel` 对应的版本需要一致: 即`babel-loader`需要搭配最新版本`babel`

低版本：`npm install -D babel-loader@7 babel-core babel-preset-env`

高版本：`npm install -D babel-loader @babel/core @babel/preset-env webpack`