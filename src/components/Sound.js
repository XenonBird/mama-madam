import SoundPlayer from 'react-native-sound-player';

export const playSound = (track, type, volume) => {
  try {
    SoundPlayer.setVolume(volume);
    SoundPlayer.playSoundFile(track, type);
  } catch (e) {
    console.log('Cannot play sound file', e);
  }
};
