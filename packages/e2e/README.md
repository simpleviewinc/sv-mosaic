# sv-mosaic automation framework

# How to execute:

* `ENV=<env> pnpm run <script>`

ENV options:
* local
* develop
* docker (used in Compose against `storybook-serve`)

Script options:
* test:chrome
* test:firefox
* test:webkit

EG:
```
ENV=local pnpm run test:chrome
```
