import { TextInput, View, Text } from "react-native"
import React from "react"
import { globalStyle, inputStyle } from "../../styles"

const InputWLabel = (props) => {
  const {
    label,
    onChangeText,
    value,
    placeholder,
    keyboardType,
    baseStylesInput = {},
    customStylesInput = {},
    baseStylesLabel = {},
    customStylesLabel = {},
    customStylesInputStack = {},
    halfWidth,
    doubleInputStack,
    labelA,
    labelB,
    onChangeTextA,
    onChangeTextB,
    darkMode
  } = props

  if (!label) customStylesInput.width = "95%"

  return (
    <View style={doubleInputStack ? inputStyle.doubleInputStack : null}>
      <View
        style={[
          inputStyle.inputStack,
          customStylesInputStack,
          halfWidth ? { width: `50%` } : null,
          doubleInputStack ? { marginRight: `5%`, width: `47.5%` } : null
        ]}
      >
        {(label || (labelA && labelB)) && (
          <Text
            style={[
              inputStyle.formLabel,
              customStylesLabel,
              halfWidth ? { width: `40%` } : null,
              darkMode ? globalStyle.textDark : globalStyle.text
            ]}
          >
            {label || labelA}
          </Text>
        )}
        <TextInput
          style={[
            inputStyle.input,
            customStylesInput,
            halfWidth ? { width: `40%` } : null,
            darkMode ? globalStyle.textDark : globalStyle.text
          ]}
          onChangeText={onChangeText ? onChangeText : onChangeTextA}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      </View>
      {doubleInputStack && (
        <View
          style={[
            inputStyle.inputStack,
            customStylesInputStack,
            halfWidth ? { width: `50%` } : null,
            doubleInputStack ? { marginRight: `5%`, width: `47.5%` } : null
          ]}
        >
          {(label || (labelA && labelB)) && (
            <Text
              style={[
                inputStyle.formLabel,
                customStylesLabel,
                halfWidth ? { width: `40%` } : null,
                darkMode ? globalStyle.textDark : globalStyle.text
              ]}
            >
              {label || labelB}
            </Text>
          )}
          <TextInput
            style={[
              inputStyle.input,
              customStylesInput,
              halfWidth ? { width: `40%` } : null,
              darkMode ? globalStyle.textDark : globalStyle.text
            ]}
            onChangeText={onChangeText ? onChangeText : onChangeTextB}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
          />
        </View>
      )}
    </View>
  )
}

export default InputWLabel
