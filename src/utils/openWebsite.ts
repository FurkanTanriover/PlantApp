import {Linking} from 'react-native';

export function openWebsite(websiteLink: string) {
  Linking.openURL(websiteLink).catch(err =>
    console.error("Couldn't load page", err),
  );
}
