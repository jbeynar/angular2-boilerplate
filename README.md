## Setup

Check whether TypeScript Compiler is present.

```whereis tsc```

If you don't have TypeScript in your environment, install it globally with npm.

```sudo npm install -g typescript```

Check whether TypeScript Definition manager is present.

```whereis tsd```

If you don't have, install it globally with npm.

```sudo npm install -g tsd```

## Run

Install node dependencies.

```npm install```

Install TypeScript typings.

```tsd install```

Run gulp server and tsc in watch mode simultaneously:
  
```gulp```

## Application

This simple boilerplate is an app from [5 MIN QUICKSTART](https://angular.io/docs/ts/latest/quickstart.html) of official angular 2 docs.
