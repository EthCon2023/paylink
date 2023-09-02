import { Analytics } from '@vercel/analytics/react'
import { ToastContainer } from '@/components/molecules/ToastContainer'
import '@/utils/fonts'
import { Providers } from './providers'
import classes from './layout.module.scss'
import './globals.scss'
import 'include-media/dist/_include-media.scss'

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head />
    <body>
      <Analytics />
      <Providers>
        <div className={classes.initialWrapper}>
          {children}
          <ToastContainer />
        </div>
      </Providers>
    </body>
  </html>
)

export default RootLayout
