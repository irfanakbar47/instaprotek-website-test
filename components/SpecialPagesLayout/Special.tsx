import React, { ReactNode } from "react";
import Head from "next/head";
import { CustomImage } from '@/components'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html, body {
          height: 100%;
        }
      `}</style>
      <Head>
        <title>instaProtek</title>
        <meta
          name="description"
          content="InstaProtek is a smart electronic protection platform with unmatched nationwide coverage and backed by a top-rated provider as well as reliable 24/7 support. This easy-to-use app allows affordable on-demand protection with the push of a button."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        style={{
          backgroundColor: "#1F2A44",
          color: "#FFFFFF",
          height: "14px",
          marginTop: "0",
        }}
      ></header>
      <main style={{ display: 'flex', justifyContent: 'center', flex: '1', marginTop: '20px' }}>
        {children}
      </main>
      <footer
        style={{
          padding: "1rem",
          textAlign: "center",
          marginBottom: "36px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="text-sm font-medium">Powered by:</span>
					<CustomImage 
            style={{ marginLeft: "0.5rem" }}
            src="https://acdn.dnamicro.net/instaprotek/instaProtek_primary_logo-full_color.png"
            alt="Powered by instaProtek"
            width={200}
            height={37}
            priority
					/>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
