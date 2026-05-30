// Native Web Audio API sound synthesizer for Minecraft 8-bit sound effects.
// Zero network load, zero dependencies, full React/browser support.

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    // Standard AudioContext initialization
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  return audioCtx;
}

// Resumes audio context if suspended (browser security autoplays)
async function resumeContext(ctx: AudioContext) {
  if (ctx.state === "suspended") {
    await ctx.resume();
  }
}

export async function playClick() {
  const ctx = getAudioContext();
  if (!ctx) return;
  await resumeContext(ctx);

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  // Short click: triangle oscillator gives a nice wooden block hit feel
  osc.type = "triangle";
  
  const now = ctx.currentTime;
  
  // Quick pitch envelope decay (150Hz -> 80Hz)
  osc.frequency.setValueAtTime(150, now);
  osc.frequency.exponentialRampToValueAtTime(70, now + 0.08);

  // Volume decay envelope
  gain.gain.setValueAtTime(0.3, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

  osc.start(now);
  osc.stop(now + 0.09);
}

export async function playXPDing() {
  const ctx = getAudioContext();
  if (!ctx) return;
  await resumeContext(ctx);

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  // High glass sound: sine wave
  osc.type = "sine";
  
  const now = ctx.currentTime;
  
  // Extremely high, pure tone (987.77Hz = B5 note in XP ding scale)
  osc.frequency.setValueAtTime(987.77, now);

  gain.gain.setValueAtTime(0.18, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

  osc.start(now);
  osc.stop(now + 0.45);
}

export async function playLevelUp() {
  const ctx = getAudioContext();
  if (!ctx) return;
  await resumeContext(ctx);

  const now = ctx.currentTime;
  // A rapid succession of rising notes (XP level up chord arpeggio)
  const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
  
  notes.forEach((freq, index) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = "square"; // 8-bit sound
    
    const startTime = now + index * 0.08;
    const duration = 0.25;
    
    osc.frequency.setValueAtTime(freq, startTime);
    
    gain.gain.setValueAtTime(0.06, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    
    osc.start(startTime);
    osc.stop(startTime + duration + 0.02);
  });
}

export async function playPortalTravel() {
  const ctx = getAudioContext();
  if (!ctx) return;
  await resumeContext(ctx);

  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc.type = "sawtooth";
  filter.type = "peaking";
  
  const now = ctx.currentTime;
  const duration = 0.8;

  // Swirling pitch modulation
  osc.frequency.setValueAtTime(90, now);
  osc.frequency.linearRampToValueAtTime(220, now + duration * 0.4);
  osc.frequency.exponentialRampToValueAtTime(60, now + duration);

  // Swirling filter frequency
  filter.frequency.setValueAtTime(100, now);
  filter.frequency.exponentialRampToValueAtTime(1200, now + duration * 0.5);
  filter.frequency.linearRampToValueAtTime(150, now + duration);

  gain.gain.setValueAtTime(0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

  osc.start(now);
  osc.stop(now + duration + 0.05);
}
