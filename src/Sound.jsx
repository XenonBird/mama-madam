import Sound from 'react-native-sound';

export const playSound = type => {
  let soundFile;
  switch (type) {
    case 'correct':
      soundFile = require('./asset/sounds/reward.wav');
      break;
    case 'incorrect':
      soundFile = require('./asset/sounds/error.wav');
      break;
    case 'click':
      soundFile = require('./asset/sounds/click.wav');
      break;
    default:
      soundFile = require('./asset/sounds/click.wav');
      break;
  }

  const sound = new Sound(soundFile, error => {
    if (error) {
      console.error('Failed to load sound', error);
      return;
    }
    sound.play(success => {
      if (!success) {
        console.error('Sound playback failed');
      }
      sound.release();
    });
  });
};
