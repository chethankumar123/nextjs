import { BottomBar } from '@/components/BottomBar';
import './../globals.css';
import { Providers } from '@/components/providers';
import { BackdropProvider } from '../../context/backdrop';
import { Toaster } from 'react-hot-toast';
// import FeedsHeader from '@/components/feeds/feedsheader/FeedsHeader';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function ContentLayout({ children }) {
  return (
    <main>
      {children}
      <BottomBar />
    </main>
  );
  /* return (
    <BackdropProvider>
      <html lang="en">
        <body>
          <Providers>
            {children}

            <BottomBar />
            <Toaster position="bottom-center" reverseOrder={false} />
          </Providers>
        </body>
      </html>
    </BackdropProvider>
  ); */
}