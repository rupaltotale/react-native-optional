# react-native-optional
[![npm version](https://badge.fury.io/js/react-native-picker-select.svg)](https://badge.fury.io/js/react-native-picker-select)

A react native utility to render component(s) conditionally in JSX.

The functionality for this was written by [Greg Herlihy](https://github.com/greghe), modified and open-sourced by [Rupal Totale](https://github.com/rupaltotale/) at [Skillz](https://www.skillz.com/). 

## Getting Started

### Installation

In your react native app directory, run the following command:

`npm install react-native-optional`

### Basic Usage

```js
import Optional from 'react-native-optional';

export default class Example extends Component {
  const check = true;
  return (
    <Optional test={check}>
      <Text>Hello World</Text>
    </Optional>
  );
};
```

### Example

```js
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// The below import is not needed but it is is recommended to include it
import Optional from 'react-native-optional';

const App = () => {
  const check = true;
  return (
    <View style={styles.sectionContainer}>
      <Optional test={check}>
        <Text style={styles.sectionTitle}>This should show</Text>
      </Optional>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 50,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default App;
```
### Props

| Name                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Details                  |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `test`                                 | Rendering of the child components of <Optional> depend on the "truthiness" of the value of this prop type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | **required**<br>boolean |
