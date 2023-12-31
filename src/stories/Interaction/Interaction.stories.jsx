import React from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';

export default {
  title: 'Interaction',
  parameters: {
    notes: `
Use these example to test that tapping the story view will dismiss the keyboard,
but won't interfere with scrolling or other touch interactions.
`,
  },
};

function Item({ children }) {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 8,
        backgroundColor: '#dee2e3',
        marginBottom: 8,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: '#001a23' }}>{children}</Text>
    </View>
  );
}

function Input() {
  return (
    <TextInput
      style={{
        borderWidth: 1.25,
        borderColor: '#a3c1e0',
        marginBottom: 8,
        borderRadius: 8,
        height: 40,
        paddingHorizontal: 8,
      }}
      placeholder="Type something"
    />
  );
}

export const Static = () => (
  <>
    <Input />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Opening the keyboard and then tapping somewhere in a story view will dismiss the keyboard.
      </Text>
    </View>
  </>
);

export const Touchable = () => {
  const [count, increment] = React.useReducer((state) => state + 1, 0);
  return (
    <>
      <Input />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pressed {count} time(s)</Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 8,
            padding: 8,
            marginVertical: 16,
            borderColor: '#b2cbe6',
            backgroundColor: '#dcebf9',
          }}
          onPress={() => increment()}
        >
          <Text>This button can be tapped without the story view interfering.</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export const Scrolling = () => (
  <>
    <Input />
    <ScrollView>
      <Item>This can scroll when the keyboard is closed.</Item>
      <Item>And also when the keyboard is open.</Item>
      {Array(25)
        .fill(true)
        .map((_ignored, idx) => (
          <Item key={idx}>Item #{idx}</Item>
        ))}
    </ScrollView>
  </>
);