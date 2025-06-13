
# Aenigma Landing Page

A landing page for Aenigma - Advanced end-to-end encryption messaging app for Android.

## Features

- **Envelope Encryption**: Uses OpenSSL EVP API with AES GCM 256 and RSA 4096-bit encryption
- **Android Exclusive**: Designed specifically for Android devices
- **Secure Communications**: Advanced cryptographic protocols for maximum privacy

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

1. Fork or clone this repository
2. Update the `base` path in `vite.config.ts` to match your repository name
3. Enable GitHub Pages in your repository settings
4. Push to the main branch to trigger automatic deployment

The site will be available at: `https://yourusername.github.io/repository-name/`

## Customization

To customize for your own repository:

1. Update the `base` path in `vite.config.ts`
2. Update the GitHub Pages URL in `index.html` meta tags
3. Modify the deployment workflow if needed

## License

This project is open source and available under the MIT License.
