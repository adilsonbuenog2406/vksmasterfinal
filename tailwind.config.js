/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        navy: '#0f2234',
        'navy-900': '#0a1929',
        'navy-800': '#0d2135',
        teal: '#0a4b56',
        'teal-700': '#0f5662',
        gold: '#d2a86c',
        'gold-500': '#d2a86c',
        'gold-600': '#c59853',
        'gold-700': '#ad8145',
        mist: '#f4f7fb',
        'mist-100': '#f6f9fc',
        slate: '#b5bcc9'
      },
      boxShadow: {
        card: '0 18px 45px rgba(0,0,0,0.18)',
        'card-soft': '0 12px 30px rgba(0,0,0,0.12)',
        glow: '0 0 50px rgba(210, 168, 108, 0.35)'
      },
      backgroundImage: {
        hero: 'linear-gradient(180deg, rgba(6,22,33,0.70) 0%, rgba(6,22,33,0.70) 100%), url(/assets/imagens/hero.jpg)',
        'hero-overlay': 'radial-gradient(45% 45% at 60% 40%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%)',
        triad: 'radial-gradient(circle at 20% 20%, rgba(7,111,124,0.12), transparent 30%), radial-gradient(circle at 80% 10%, rgba(19,58,83,0.12), transparent 28%), linear-gradient(135deg, #0a4b56 0%, #0b1e32 55%, #0d1c2d 100%)',
        grid: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'diagonal-fade': 'linear-gradient(135deg, rgba(12,38,52,0.75) 0%, rgba(9,27,44,0.9) 70%, rgba(9,27,44,0.95) 100%)',
        'footer-pattern': 'linear-gradient(135deg, rgba(15,74,86,0.3) 0%, rgba(10,34,55,0.92) 70%)'
      },
      backgroundSize: {
        grid: '40px 40px'
      },
      dropShadow: {
        glow: '0 0 24px rgba(210, 168, 108, 0.4)'
      }
    }
  },
  plugins: []
};
