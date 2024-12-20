import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata, Viewport } from "next";
import { Navbar, Footer, Cookies } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: 'white',
}

export const metadata: Metadata = {
  applicationName: "instaProtek",
  metadataBase: new URL("https://www.instaprotek.com"),
  authors: [{ name: "{dna:micro}", url: "https://dnamicro.com" }],
  title: {
    default: "instaProtek",
    template: 'instaProtek - %s'
  },
  alternates: {
    canonical: 'https://www.instaprotek.com',
    languages: {
      'en-US': '/en-US',
    },
  },
  description: "instaProtek offers nationwide electronic protection with top-rated coverage and 24/7 support. Enjoy affordable, on-demand protection with just a push of a button.",
  openGraph: {
    url: 'https://www.instaprotek.com',
    type: "website",
    locale: "en_US",
    siteName: "instaProtek",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'instaProtek',
      }
    ]
  },
  appLinks: {
    ios: {
      url: 'https://apps.apple.com/us/app/instaprotek/id1456989327',
      app_store_id: '1456989326',
    },
    android: {
      package: 'com.instaprotek.app',
      app_name: 'instaProtek',
    },
    web: {
      url: 'https://instaprotek.com/',
      should_fallback: true,
    },
  },
  verification: {
    google: 'google',
    yahoo: 'yahoo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="relative w-full overflow-hidden scroll-smooth">{children}</main>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function(){
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/5d76a9e7eb1a6b0be60bc9c1/default';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
              })();

              // Function to scroll to a hash fragment after a delay
              function scrollToHash(offset = 0, delay = 1000) {
                setTimeout(() => {
                  const hash = window.location.hash;
                  if (hash) {
                    const id = hash.replace('#', '');
                    const element = document.getElementById(id);
                    if (element) {
                      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
                      window.scrollTo({
                        top: elementTop - offset,
                        behavior: 'smooth'
                      });
                    }
                  }
                }, delay);
              }

              // Function to reset scroll position to the top without scrolling visibly
              function resetScrollPosition() {
                // Temporarily set the scroll position to the top, then reset it
                window.scrollTo(0, 0);
                setTimeout(() => {
                  window.scrollTo(0, 0); // This helps ensure the scroll position is at the top
                }, 0);
              }

              // Reset scroll position and scroll to hash
              function resetScrollAndScrollToHash() {
                resetScrollPosition();
                scrollToHash(50, 1000);
              }

              // Call the function when the page loads
              window.addEventListener('load', resetScrollAndScrollToHash);
              window.addEventListener('hashchange', resetScrollAndScrollToHash);
            `,
          }}
        />
				<Cookies />
        <Footer />
      </body>
    </html>
  );
}