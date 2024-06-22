// pages/privacy.js

import Head from 'next/head';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - MindwayBiomedicals</title>
        <meta name="description" content="Privacy Policy for MindwayBiomedicals website." />
      </Head>
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="mb-4">This Privacy Policy outlines the types of personal information that is received and collected by MindwayBiomedicals and how it is used.</p>
            <p className="mb-4">Contact Information:</p>
            <ul className="mb-4">
              <li>Email: <a href="mailto:reachus@mindwaybiomedicals.com" className="text-blue-500">reachus@mindwaybiomedicals.com</a></li>
              <li>Phone: <a href="tel:+919731370710" className="text-blue-500">+91 9731370710</a></li>
              <li>Address: 436, 5th Cross, 7th Main Rd, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078</li>
            </ul>
            {/* Add your privacy policy text here */}
          </div>
        </div>
      </div>
    </>
  );
}
