console.clear();
import Swup from 'https://unpkg.com/swup@4?module';
import FragmentPlugin from 'https://www.unpkg.com/@swup/fragment-plugin@1?module';

new Swup({
  containers: ["#swup"],
  plugins: [
    new FragmentPlugin({
      debug: true,
      rules: [
        {
          from: '/',
          to: '/detail-(.*)',
          containers: ['#modal'],
          name: 'open-modal'
        },
        {
          from: '/detail-(.*)',
          to: '/',
          containers: ['#modal'],
          name: 'close-modal'
        },
        {
          from: '/detail-(.*)',
          to: '/detail-(.*)',
          containers: ['#detail']
        }
      ]
    })
  ]
});