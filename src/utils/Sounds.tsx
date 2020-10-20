

import Sound from 'react-native-sound';

export const playSound =(id: number) =>{
    
  if(id === 1){
    var red = new Sound('red.mp3', Sound.MAIN_BUNDLE, (error:object) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // Play the sound with an onEnd callback
      red.play();
      
    });
  }
  
  if(id === 2){
    var green = new Sound('green.mp3', Sound.MAIN_BUNDLE, (error:object) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // Play the sound with an onEnd callback
        green.play();
    });
  }

  if(id === 3){
    var blue = new Sound('blue.mp3', Sound.MAIN_BUNDLE, (error:object) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // Play the sound with an onEnd callback
      blue.play();
    });
  }
  if(id === 4){
    var yellow = new Sound('yellow.mp3', Sound.MAIN_BUNDLE, (error:object) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // Play the sound with an onEnd callback
      yellow.play();
    });
  }
}
