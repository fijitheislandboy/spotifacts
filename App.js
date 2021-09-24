import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function App() {
  console.log(AuthSession.getRedirectUrl())

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '84c06d922944468083b6f50856f1f728',
      scopes: ['user-read-email', 'playlist-modify-public'],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: "exp://localhost:19000/--/"
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      Alert.alert("Logged in!");
      const { code } = response.params;
      console.log(code)
      }
  }, [response]);

  return (
    <View style={styles.container}>
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />
    </View>
  );
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
