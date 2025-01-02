# The BitHippie.com Website

![BitHippie Logo](./public/assets/images/home/og_image.jpg)

## Running Locally

```bash
npm run dev
```

## Testing a Production Build

```bash
npm run build && npm run start
```

## Deployment

[This GitHub Workflow](/.github/workflows/main.yml) builds the project and commit the `/out` directory to `gh-pages` branch which is subsequently deployed via the [Github Pages Bot](https://github.com/bithippie/bithippie.github.io/deployments/github-pages).

