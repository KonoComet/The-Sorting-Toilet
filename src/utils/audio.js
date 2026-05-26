const audioFiles = {
  "ui-click": "/audio/ui-click.mp3",
  "page-turn": "/audio/page-turn.mp3",
  "wax-seal": "/audio/wax-seal.mp3",
  "toilet-lid": "/audio/toilet-lid.mp3",
  flush: "/audio/flush.mp3",
  stamp: "/audio/stamp.mp3"
};

let muted = true;
let audioContext;

export function toggleMuted(nextMuted) {
  muted = nextMuted;
}

export function isMuted() {
  return muted;
}

export function playSound(slot) {
  if (muted) return;
  const file = audioFiles[slot];
  if (file) {
    const audio = new Audio(file);
    audio.volume = 0.28;
    audio.play().catch(() => playWebAudioFallback(slot));
    return;
  }
  playWebAudioFallback(slot);
}

function playWebAudioFallback(slot) {
  if (muted) return;
  try {
    audioContext ||= new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const now = audioContext.currentTime;
    oscillator.type = slot === "flush" ? "sawtooth" : "triangle";
    oscillator.frequency.setValueAtTime(slot === "flush" ? 90 : 160, now);
    oscillator.frequency.exponentialRampToValueAtTime(slot === "stamp" ? 70 : 110, now + 0.12);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.04, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.2);
  } catch {
    // Sound must never block the app.
  }
}
