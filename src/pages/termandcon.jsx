import React from 'react';

const TermsOfUse = () => {
  return (
    // Changed overall text color to white and added a black background
    <div className="px-6 py-10 max-w-5xl mx-auto bg-black text-white leading-relaxed font-inter">
      {/* Main title: White text, bold */}
      <h1 className="text-4xl font-bold mb-6 text-white">PepperAds Terms of Use</h1>
      {/* Last Updated text: White text */}
      <p className="text-sm text-white mb-10">Last Updated: [Date]</p>

      {/* Section Welcome to PepperAds: White text, semi-bold */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Welcome to PepperAds</h2>
      <p>These Terms of Use ("Terms") govern your access to and use of PepperAds' digital advertising platform, services, websites, and applications (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.</p>

      {/* Section 1. About Our Services: White text, bold */}
      <h2 className="text-xl font-bold mt-6 mb-2 text-white">1. About Our Services</h2>
      {/* Subheadings: White text, semi-bold */}
      <h3 className="font-semibold mb-1 text-white">1.1 Service Description</h3>
      <p>PepperAds provides a comprehensive digital advertising platform that enables businesses to create, manage, and optimize advertising campaigns across multiple channels. Our Services include campaign creation tools, audience targeting, performance analytics, A/B testing capabilities, and automated optimization features.</p>

      <h3 className="font-semibold mt-4 mb-1 text-white">1.2 Eligibility Requirements</h3>
      <p>To use our Services, you must be at least 18 years old and have the legal capacity to enter into binding agreements. If you are using our Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</p>

      <h3 className="font-semibold mt-4 mb-1 text-white">1.3 Account Registration</h3>
      <p>You must create an account to access most of our Services. You agree to provide accurate, current, and complete information during registration and to keep your account information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

      <div className="mt-8">
        {/* Section 2. Payment Terms and Billing */}
        <h2 className="text-xl font-bold mt-6 mb-2 text-white">2. Payment Terms and Billing</h2>
        <h3 className="font-semibold mb-1 text-white">2.1 Service Fees</h3>
        <p className="mb-4">You agree to pay all applicable fees for the Services you purchase or use, including advertising spend, platform fees, and any additional features. All fees are non-refundable unless otherwise specified in these Terms or required by applicable law.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">2.2 Billing and Payment Methods</h3>
        <p className="mb-4">We will charge your designated payment method for all fees when due. You authorize us to charge your payment method for recurring subscription fees and advertising spend. If your payment method fails, we may suspend your Services until payment is received.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">2.3 Advertising Budget and Spend</h3>
        <p className="mb-4">You maintain control over your advertising budget and daily spending limits. You are responsible for monitoring your account to ensure spending remains within your desired parameters. We will make commercially reasonable efforts to respect your budget limits, though actual spend may occasionally exceed limits due to system processing delays.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">2.4 Taxes</h3>
        <p className="mb-4">You are responsible for paying all applicable taxes associated with your use of our Services. If we are required to collect taxes, we will add them to your invoice unless you provide valid tax exemption documentation.</p>

        {/* Section 3. User Responsibilities and Acceptable Use */}
        <h2 className="text-xl font-bold mt-6 mb-2 text-white">3. User Responsibilities and Acceptable Use</h2>
        <h3 className="font-semibold mb-1 text-white">3.1 Content Requirements</h3>
        <p className="mb-4">You are solely responsible for all advertising content, creative materials, and data you upload to or use with our Services ("Your Content"). Your Content must comply with all applicable laws, regulations, and advertising standards.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">3.2 Prohibited Uses</h3>
        <p className="mb-4">You may not use our Services to:<br />- Advertise illegal products, services, or activities<br />- Promote discriminatory practices or hate speech<br />- Violate intellectual property rights of others<br />- Distribute malware, viruses, or harmful code<br />- Engage in fraudulent or deceptive practices<br />- Violate privacy laws or misuse personal data<br />- Circumvent platform restrictions or security measures</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">3.3 Compliance with Laws</h3>
        <p className="mb-4">You must comply with all applicable laws and regulations, including but not limited to advertising laws, privacy regulations (such as GDPR, CCPA), consumer protection laws, and industry-specific regulations applicable to your business.</p>

        {/* Section 4. Intellectual Property Rights */}
        <h2 className="text-xl font-bold mt-6 mb-2 text-white">4. Intellectual Property Rights</h2>
        <h3 className="font-semibold mb-1 text-white">4.1 Your Content</h3>
        <p className="mb-4">You retain ownership of Your Content. By using our Services, you grant PepperAds a limited, non-exclusive, worldwide license to use, reproduce, modify, and display Your Content solely to provide and improve our Services.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">4.2 PepperAds Property</h3>
        <p className="mb-4">The Services, including all software, technology, designs, trademarks, and proprietary information, are owned by PepperAds and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works based on our Services without our express written permission.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">4.3 Third-Party Content</h3>
        <p className="mb-4">Our Services may include third-party content, tools, or integrations. You acknowledge that such third-party content is governed by separate terms and conditions, and PepperAds is not responsible for third-party content or services.</p>

        {/* Section 5. Data Protection and Privacy */}
        <h2 className="text-xl font-bold mt-6 mb-2 text-white">5. Data Protection and Privacy</h2>
        <h3 className="font-semibold mb-1 text-white">5.1 Data Processing</h3>
        <p className="mb-4">We process your data in accordance with our Privacy Policy and applicable data protection laws. You are responsible for ensuring you have appropriate rights and permissions for any personal data you provide to us or collect through our Services.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">5.2 Data Security</h3>
        <p className="mb-4">We implement appropriate technical and organizational measures to protect your data. However, you acknowledge that no system is completely secure, and you use our Services at your own risk.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">5.3 Data Retention</h3>
        <p className="mb-4">We retain your data for as long as necessary to provide our Services and comply with legal obligations. You may request deletion of your data subject to our legitimate business needs and legal requirements.</p>

        {/* Section 6. Service Availability and Modifications */}
        <h2 className="text-xl font-bold mt-6 mb-2 text-white">6. Service Availability and Modifications</h2>
        <h3 className="font-semibold mb-1 text-white">6.1 Service Availability</h3>
        <p className="mb-4">We strive to maintain high service availability but do not guarantee uninterrupted access to our Services. We may experience downtime for maintenance, updates, or due to factors beyond our control.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">6.2 Service Modifications</h3>
        <p className="mb-4">We may modify, update, or discontinue features of our Services at any time with reasonable notice. We will provide advance notice for material changes that significantly impact your use of the Services.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">6.3 Third-Party Dependencies</h3>
        <p className="mb-4">Our Services may depend on third-party platforms, APIs, or services. We are not responsible for the availability or functionality of third-party services, though we will make reasonable efforts to maintain integrations.</p>

        {/* Section 7. Account Suspension and Termination */}
        <h2 className="text-xl font-bold mt-6 mb-2 text-white">7. Account Suspension and Termination</h2>
        <h3 className="font-semibold mb-1 text-white">7.1 Termination by You</h3>
        <p className="mb-4">You may terminate your account at any time through your account settings or by contacting our support team. Upon termination, you will remain responsible for all fees incurred prior to termination.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">7.2 Termination by PepperAds</h3>
        <p className="mb-4">We may suspend or terminate your account if you violate these Terms, fail to pay fees when due, or if continued provision of Services would pose legal or business risks. We will provide reasonable notice when possible, except in cases requiring immediate action.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">7.3 Effect of Termination</h3>
        <p className="mb-4">Upon termination, your access to the Services will cease, and we may delete your account data after a reasonable period, subject to our data retention policies and legal requirements.</p>

        {/* Section 8. Disclaimers and Limitations of Liability */}
        <h2 className="text-xl font-bold mt-6 mb-2 text-white">8. Disclaimers and Limitations of Liability</h2>
        <h3 className="font-semibold mb-1 text-white">8.1 Service Disclaimers</h3>
        <p className="mb-4">THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">8.2 Performance Disclaimers</h3>
        <p className="mb-4">We do not guarantee specific advertising performance, results, or return on investment. Advertising performance depends on numerous factors beyond our control, including market conditions, competition, and content quality.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">8.3 Limitation of Liability</h3>
        <p className="mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW, PEPPERADS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION, ARISING FROM YOUR USE OF THE SERVICES.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">8.4 Damages Cap</h3>
        <p className="mb-4">OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATING TO THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO PEPPERADS IN THE TWELVE MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR $1,000, WHICHEVER IS GREATER.</p>

        {/* Section 9. Indemnification */}
        <h2 className="text-xl font-bold mt-6 mb-2 text-white">9. Indemnification</h2>
        <p className="mb-4">You agree to indemnify, defend, and hold harmless PepperAds and its officers, directors, employees, and agents from any claims, damages, losses, and expenses (including reasonable attorneys' fees) arising from your use of the Services, Your Content, or your violation of these Terms or applicable laws.</p>

        {/* Section 10. Dispute Resolution */}
        <h2 className="text-xl font-bold mt-6 mb-2 text-white">10. Dispute Resolution</h2>
        <h3 className="font-semibold mb-1 text-white">10.1 Governing Law</h3>
        <p className="mb-4">These Terms are governed by the laws of [Jurisdiction], without regard to conflict of law principles.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">10.2 Arbitration</h3>
        <p className="mb-4">Any disputes arising from these Terms or your use of the Services shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization], except that either party may seek injunctive relief in court for intellectual property violations or breach of confidentiality obligations.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">10.3 Class Action Waiver</h3>
        <p className="mb-4">You agree that any arbitration or legal proceeding shall be conducted on an individual basis and not as part of a class, collective, or representative action.</p>

        {/* Section 11. General Provisions */}
        <h2 className="text-xl font-bold mt-6 mb-2 text-white">11. General Provisions</h2>
        <h3 className="font-semibold mb-1 text-white">11.1 Entire Agreement</h3>
        <p className="mb-4">These Terms, together with our Privacy Policy and any additional terms for specific Services, constitute the entire agreement between you and PepperAds regarding the Services.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">11.2 Modifications</h3>
        <p className="mb-4">We may update these Terms from time to time. We will notify you of material changes via email or through our Services. Your continued use of the Services after such notice constitutes acceptance of the updated Terms.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">11.3 Severability</h3>
        <p className="mb-4">If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">11.4 Assignment</h3>
        <p className="mb-4">You may not assign these Terms without our prior written consent. We may assign these Terms to any affiliate or in connection with a merger, acquisition, or sale of assets.</p>
        <h3 className="font-semibold mt-4 mb-1 text-white">11.5 Force Majeure</h3>
        <p className="mb-4">Neither party shall be liable for any failure to perform due to circumstances beyond their reasonable control, including natural disasters, government actions, or technical failures of third-party services.</p>

        {/* Section 12. Contact Information */}
        <h2 className="text-xl font-bold mt-6 mb-2 text-white">12. Contact Information</h2>
        <p className="mb-4">If you have questions about these Terms, please contact us at:</p>
        <p className="mb-4">
          <strong className="text-white">PepperAds Legal Department</strong><br />
          Email: legal@pepperads.com<br />
          Address: [Company Address]<br />
          Phone: [Phone Number]
        </p>

        {/* Footer text: White text, italic */}
        <p className="italic text-sm text-white mt-6">
          By using PepperAds Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
