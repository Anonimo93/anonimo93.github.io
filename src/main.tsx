import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
import App from './App'

export default function RootLayout() {
  return (
    <html lang="es">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <body>
          <App />
        </body>
      </ThemeProvider>
    </html>
  );
}