## Inflearn Webpack 강좌 정리
> 강의안 및 GitHub

https://github.com/joshua1988/LearnWebpack

[Introduction | 웹팩 핸드북](https://joshua1988.github.io/webpack-guide/guide.html)

> 강의 내용 정리 링크

[노션](https://wooden-plate-047.notion.site/Webpack-d83264f895d34571b7a4c5bf26aad8cb)

> 관련된 TIL (예전에 배운 웹팩 내용 정리)

* https://github.com/minhee0327/TIL/tree/master/Module

> 강의에서 배운점 및 소감

- FE를 다룬게 거의 1년 반 전이라 내용을 다시 복기하는 시간을 가졌다. (22` 03.01 - 03.15)
- 가장 기억에 남는 내용
  - 웹 애플리케이션의 빠른 로딩 속도와 높은 성능 부분이다.
  - 브라우저에서 버서로 요청하는 파일의 숫자를 줄이기 위해 필요한 자원을 미리 로딩하지 않고, 필요한 시점에 요청하고자 했다는것.
  - [링크](https://joshua1988.github.io/webpack-guide/motivation/problem-to-solve.html#%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B3%80%EC%88%98-%EC%9C%A0%ED%9A%A8-%EB%B2%94%EC%9C%84-%EB%AC%B8%EC%A0%9C00000000)
  - 위 내용이 제일 와닿았던점은 브라우저별로 HTTP 요청 숫자는 제약이 되어있다는걸 처음 알게 되었기 때문이다.
  - 예를들어 크롬은 최대 연결횟수가 6회인데 만약 파일을 100개를 요청하게 되면 100/6 = 16.xx 번에 나누어 요청을 해야한다.
  - 웹팩이나 모듈번들러를 이용하면 진입점을 지정해서 요청하므로 파일의 요청수가 현저히 줄어드는 것을 배울 수 있었다.
- 프로젝트 적용사항
  - 현재는 proxy, cors 설정용으로만 사용을 해보았었는데 빌드시에 효율성을 더욱 반영할 수 있도록 개선시켜보는쪽으로 도전하기로..