export const metadata = {
  title: '102FM רדיו',
  description: 'Radio 102FM Live Stream',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/plyr/3.7.8/plyr.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}