import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
      <>
        <Head>
          <title>House Rental Platform</title>
          <meta name="description" content="Find your dream home or tenant" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main className="container mx-auto py-8">{children}</main>
        <Footer />
      </>
    );
  };
  
  export default Layout;