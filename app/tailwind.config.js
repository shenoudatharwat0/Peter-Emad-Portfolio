/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base backgrounds
        'bg-base': '#0A0A0F',
        'bg-subtle': '#111118',
        // Surfaces (elevation levels)
        'surface-100': '#16161F',
        'surface-200': '#1C1C28',
        'surface-300': '#252533',
        // Borders
        'border-subtle': '#1F1F2E',
        'border-default': '#2D2D40',
        'border-strong': '#3F3F55',
        // Text
        'text-primary': '#F4F4F8',
        'text-secondary': '#A1A1B5',
        'text-tertiary': '#71717F',
        'text-muted': '#52525B',
        // Primary accent (Indigo)
        'primary-50': '#EEF2FF',
        'primary-100': '#E0E7FF',
        'primary-200': '#C7D2FE',
        'primary-300': '#A5B4FC',
        'primary-400': '#818CF8',
        'primary-500': '#6366F1',
        'primary-600': '#4F46E5',
        'primary-700': '#4338CA',
        'primary-800': '#3730A3',
        'primary-900': '#312E81',
        // Semantic
        'success': '#34D399',
        'warning': '#FBBF24',
        'error': '#F87171',
        'info': '#60A5FA',
        // shadcn compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: '700' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        '2xs': ['0.6875rem', { lineHeight: '1.45', letterSpacing: '0.04em', fontWeight: '600' }],
      },
      spacing: {
        'gutter': '1.5rem',
        'gutter-sm': '1rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      borderRadius: {
        'xs': '6px',
        'sm-md': '8px',
        'lg-md': '12px',
        'xl-md': '16px',
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'sm-card': '0 1px 2px rgba(0,0,0,0.3)',
        'md-card': '0 4px 12px rgba(0,0,0,0.4)',
        'lg-card': '0 8px 24px rgba(0,0,0,0.5)',
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      screens: {
        'xs': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        'narrow': '768px',
        'default': '1024px',
        'wide': '1200px',
        'extra-wide': '1440px',
      },
      zIndex: {
        'elevated': '10',
        'sticky': '20',
        'dropdown': '30',
        'modal-backdrop': '40',
        'modal': '50',
        'toast': '60',
        'tooltip': '70',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-dot": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
