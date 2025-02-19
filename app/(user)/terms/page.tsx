import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | HRCycle",
  description: "Terms of Service for HRCycle",
}

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Terms of Service</h1>
      <div className="mt-6 prose prose-indigo prose-lg text-gray-500">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using HRCycle (the "Service"), you accept and agree to be bound by the terms and provision of
          this agreement.
        </p>
        <h2>2. Description of Service</h2>
        <p>
          HRCycle provides an online platform for HR recruitment and management. We reserve the right to modify or
          discontinue, temporarily or permanently, the Service with or without notice.
        </p>
        <h2>3. User Conduct</h2>
        <p>
          You agree to use the Service only for purposes that are legal, proper and in accordance with these Terms and
          any applicable laws or regulations.
        </p>
        <h2>4. Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are and will remain the exclusive property
          of HRCycle and its licensors.
        </p>
        {/* Add more sections as needed */}
      </div>
    </div>
  )
}

