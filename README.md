# NX and Mikro-ORM cli bug

This repository shows a bug that the mikro-orm cli has when being used in the nx monorepo environment (and most likely other environments using the compilerOption > paths option in the tsconfig)

## Setup
```bash
 $ git clone git@github.com:RiskChallenger/nx-mikro-orm-cli.git
 $ cd nx-mikro-orm-cli
 $ yarn
```

## Reproduce the error
This will reproduce the error message.
```bash
 $ yarn mikro-orm debug
```

To prevent the error you can open the following file
```
apps/api/src/app/ModuleType.ts
```

In the file you find documentation on what the different import paths will give as output.

One of the things that could be the problem is that exporting a `type` is alright by TypeScript, but exporting a `const` is not. However, when running (and building the code) there is no problem with this.
