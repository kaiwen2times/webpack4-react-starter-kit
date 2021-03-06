# webpack4-react-starter-kit

The purpose of this project is to avoid the hassle of setting up Webpack 4 to run React. The project prvoides a minimal setup configuration for React development with Webpack and Babel. As a bonus, the example used in project is a generic resume template. Feel free to modify the template to make it truely yours.

## Getting Started

To get started you will need nvm installed. Follow the link below for setup:

[nvm setup guide](https://gist.github.com/d2s/372b5943bce17b964a79)

There are three main scripts in ``` package.json ```

1. ``` npm run dev ``` generates assets and puts them in the ``` /dist ``` folder. Meant for development.
2. ``` npm run prod ``` same as former but compresses and optimizes the output assets. Meant for production.
3. ``` npm run server ``` generates assets and host them at [localhost:8080](https://localhost:8080/). Watches file changes and auto-compile them.

### Installing

First checkout the repo and change directory into it

```
git clone https://github.com/kaiwen2times/webpack-react-express-starter-kit.git
cd webpack-react-express-starter-kit
```

Then install the packages with

```
nvm use
npm install
```

Next let's get the server up and running

```
npm start
```

Lastly, open up a web browser and navigate to [localhost:8080](localhost:8080)

### Alternative Installation

This project also employes docker for running inside a container. To start, first install [docker](https://www.docker.com/get-started)

Then run:

```
docker-compose up
```

To connect to the docker instance:

```
docker ps
docker exec -it {{containerID}} /bin/bash
```

## Running the tests

Don't have tests yet...

## Contributing

Please read [CONTRIBUTING.md](https://github.com/kaiwen2times/webpack4-react-starter-kit/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to the project.

## Authors

* **Kaiwen Zheng** - *Initial work* - [My link](http://www.kaiwenz.com/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
