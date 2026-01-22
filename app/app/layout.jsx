export const metadata = {
  title: "Arduino Virtual Course",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
