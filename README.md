# Juice Paglu

A modern, responsive web application for ordering delicious juices. Built with React, TypeScript, and styled-components.

## Features

- Beautiful landing page with animation
- 20 different juices across 4 categories
- Mobile and desktop responsive design
- Smooth animations and transitions
- Select up to 2 juices for order
- Firebase integration for order storage

## Tech Stack

- React
- TypeScript
- styled-components
- Framer Motion
- Firebase
- React Intersection Observer

## Setup

1. Clone the repository
```bash
git clone https://github.com/Shiv1909/JuicePaglu.git
cd JuicePaglu
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with your Firebase configuration:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

4. Start the development server
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
  ├── components/
  │   └── JuiceCard.tsx
  ├── data/
  │   └── juices.ts
  ├── firebase/
  │   └── firebaseConfig.js
  ├── App.tsx
  └── index.tsx
```

## Deployment

To build the app for production:

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.