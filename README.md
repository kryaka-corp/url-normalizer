### Сборка

Пакет собирается стандартным tsc следующей командой:

```
npm run build
```

Сборка происходит автоматически на push через следующий хук. 

```json
{
    "simple-git-hooks": {
        "pre-push": "npm run build && git add dist/"
    }
}
```

Это команда добавляется в `.git/hooks`. Если команда запуска изменится, хук придется переинициализировать:

```
npx simple-git-hooks
```

### Эксплуатация

Нода не понимает *.mts файлы, поэтому мы экспортируем только *.mjs:

```json
{
    "exports": {
        "./*.mjs": "./dist/*.mjs"
    }
}
```

### Тестирование

```
npm test
```

Чтобы запустить тесты c сохранением нативной модульности мы прокинули в vitest кондишн `development`:

```js
{
    resolve: {
        conditions: [
            'development'
        ]
    }
}
```

И определили его в package.json:

```json
{
    "imports": {
        "#*.mts": {
            "development": "./src/*.mts",
            "default": "./dist/*.mjs"
        }
    }
}
```
