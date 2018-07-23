export const fadeAndScale = animatedValue => ({
  opacity: animatedValue,
  transform: [
    {
      scale: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [0.8, 1] }),
    },
  ],
})

export const fadeAndSlideup = animatedValue => ({
  opacity: animatedValue,
  transform: [
    {
      translateY: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [30, 0],
      }),
    },
  ],
})

export const fadeAndSlideLeft = animatedValue => ({
  opacity: animatedValue,
  transform: [
    {
      translateX: animatedValue.interpolate({
        inputRange: [0.8, 1],
        outputRange: [30, 0],
      }),
    },
  ],
})
