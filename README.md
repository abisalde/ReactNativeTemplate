# 🚀 Getting Started

## Quick Start

To create a new project using the barebone boilerplate:

```sh
git clone git@github.com:abisalde/ReactNativeTemplate.git ReactNativeTemplate
```

# 🎯 Step By Step Guide (TL;DR)

## Clean-Up & Simple Run

Clean up the files from the example repository and do not forget to install the dependencies

- `yarn install`
- `yarn run clean-up`
- `yarn install && npx pod-install` (if you use pods)
- `yarn start`
- `react-native run-android` (if you use android)
- `react-native run-ios` (if you use ios)

## Husky Integration

Before doing anything else, please simply run the command to initalize the husky. If you do not run clean-up part you should run the husky setup by yourself

```jsx
yarn run husky:setup
```

`husky:setup` will handle the initizalition, installation and ready to use `commitlint` and `prettier`.

### Install Pods (iOS Only)

- `yarn install`
- `cd ios && pod install`
- `cd .. && react-native run-ios/android`

### Android local.properties (Android Only)

- `yarn install`
- `cd android && mkdir local.properties`
- `nano local.properties`

#### Example of MacOS Android SDK Path

Make sure that set your right path of Android **SDK**

##### MacOS / Linux

Replace your machine name instead of `username`

```
sdk.dir=/Users/username/Library/Android/sdk
```

##### Windows

Replace your machine name instead of `username`

```
sdk.dir=/Users/username/Library/Android/sdk
```

# 📃 Documentations

- [Components](./docs/components.md)
