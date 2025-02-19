import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | HRCycle",
  description: "Privacy Policy for HRCycle",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Privacy Policy</h1>
      <div className="mt-6 prose prose-indigo prose-lg text-gray-500">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Introduction</h2>
        <p>
          Welcome to HRCycle. We respect your privacy and are committed to protecting your personal data. This privacy
          policy will inform you as to how we look after your personal data and tell you about your privacy rights and
          how the law protects you.
        </p>
        <h2>2. Data We Collect</h2>
        <p>
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped
          together as follows:
        </p>
        <ul>
          <li>Identity Data</li>
          <li>Contact Data</li>
          <li>Technical Data</li>
          <li>Usage Data</li>
        </ul>
        <h2>3. How We Use Your Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
          in the following circumstances:
        </p>
        <ul>
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our service</li>
        </ul>
        {/* Add more sections as needed */}
      </div>
    </div>
  )
}

