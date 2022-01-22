export default {
  expo: {
    name: 'stripe_apple',
    slug: 'stripe_apple',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF'
      }
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      publishableKey: 'pk_test_51KKY5eGY1jsRwDkYN2m2gMbXQySLZHi7tCv7BceC6HEb8IHNsUahLGx8M3t4HrmXNwv3gpEfuUu5go1gFRQWUlOC00REVu1Sh2',
      apiURL: 'http://localhost:3000'
    }
  }
}