const context = new AudioContext();
const oscillator = context.createOscillator();

oscillator.frequency = 261.6;


let isActive = false;
        oscillator.start(0);

setInterval(() => {
    if (!isActive) {
        isActive = true;
        oscillator.connect(context.destination);
    } else {
        isActive = false;
        oscillator.disconnect(context.destination);
    }
}, 2000)
