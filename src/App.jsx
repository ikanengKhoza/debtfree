import React, { useState } from "react";
import { BookText, Home, FileText, AppWindow } from "lucide-react"; // Importing new icons

// Main App component
const App = () => {
  // State to manage which page is currently displayed
  const [currentPage, setCurrentPage] = useState("home");

  // Function to navigate to different pages
  const navigateTo = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4 font-sans">
      {currentPage === "home" && (
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full text-center transform transition-all duration-300 hover:scale-105">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
            Debt Free Disciple!
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Choose an option below to navigate:
          </p>
          <div className="flex flex-col space-y-4">
            {/* Button for "My App" */}
            <button
              onClick={() => navigateTo("myApp")}
              className="bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 mx-auto w-full"
            >
              <AppWindow size={20} />
              <span>Go to My App</span>
            </button>

            {/* Button for "HTML Terms" */}
            <button
              onClick={() => navigateTo("htmlTerms")}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 mx-auto w-full"
            >
              <BookText size={20} />
              <span>Terms And Conditions</span>
            </button>

            {/* Button for "Policy" */}
            <button
              onClick={() => navigateTo("policy")}
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 mx-auto w-full"
            >
              <FileText size={20} />
              <span>Read Our Policy</span>
            </button>
          </div>
        </div>
      )}

      {/* Render My App Page */}
      {currentPage === "myApp" && (
        <MyApplicationPage onBackClick={() => navigateTo("home")} />
      )}

      {/* Render HTML Terms Page */}
      {currentPage === "htmlTerms" && (
        <HtmlTermsPage onBackClick={() => navigateTo("home")} />
      )}

      {/* Render Policy Page */}
      {currentPage === "policy" && (
        <PolicyPage onBackClick={() => navigateTo("home")} />
      )}
    </div>
  );
};

// Component for a placeholder "My Application" page
const MyApplicationPage = ({ onBackClick }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl w-full text-center transform transition-all duration-300 hover:scale-105">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 tracking-tight">
        Welcome to My Application!
      </h2>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        This is where your main application content would go. You can build out
        various features and functionalities here.
      </p>
      <button
        onClick={onBackClick}
        className="bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
      >
        <Home size={20} />
        <span>Back to Home</span>
      </button>
    </div>
  );
};

// Component for displaying HTML Terms (reused from previous)
const HtmlTermsPage = ({ onBackClick }) => {
  const htmlTerms = [
    {
      term: "HTML",
      definition:
        "HyperText Markup Language, the standard markup language for creating web pages.",
    },
    {
      term: "Element",
      definition:
        "A basic building block of HTML, typically consisting of a start tag, content, and an end tag.",
    },
    {
      term: "Tag",
      definition:
        "Keywords used to define HTML elements, e.g., <p> for paragraph, <h1> for heading.",
    },
    {
      term: "Attribute",
      definition:
        "Provides additional information about an HTML element, specified in the start tag (e.g., href, src, class).",
    },
    {
      term: "DOCTYPE",
      definition:
        "A declaration that defines the document type and helps browsers render web pages correctly.",
    },
    {
      term: "Head",
      definition:
        "Contains meta-information about the HTML document, such as title, links to stylesheets, and scripts.",
    },
    {
      term: "Body",
      definition:
        "Contains all the visible content of an HTML document, such as text, images, links, and videos.",
    },
    {
      term: "Semantic HTML",
      definition:
        "HTML elements that clearly describe their meaning to both the browser and the developer (e.g., <article>, <section>, <nav>).",
    },
    {
      term: "Div",
      definition:
        "A generic container element for flow content, which does not inherently represent anything.",
    },
    {
      term: "Span",
      definition:
        "An inline container element for phrasing content, used to group elements for styling purposes.",
    },
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl max-w-3xl w-full transform transition-all duration-300 hover:scale-105">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center tracking-tight">
        Terms And Conditions
      </h2>

      <div>
        <h4 text-2xl font-extrabold text-gray-800 mb-6 tracking-tight>
          1. Accounts
        </h4>
        <p>
          When you create an account with us, you guarantee that you are above
          the age of 18 (or the legal age of majority in your jurisdiction) and
          that the information you provide us is accurate, complete, and current
          at all times. Inaccurate, incomplete, or obsolete information may
          result in the immediate termination of your account on the Service.
          You are responsible for maintaining the confidentiality of your
          account and password, including but not limited to the restriction of
          access to your computer and/or account. You agree to accept
          responsibility for any and all activities or actions that occur under
          your account and/or password, whether your password is with our
          Service or a third-party service. You must notify us immediately upon
          becoming aware of any breach of security or unauthorized use of your
          account. You may not use as a username the name of another person or
          entity or that is not lawfully available for use, a name or trademark
          that is subject to any rights of another person or entity other than
          you without appropriate authorization, or a name that is otherwise
          offensive, vulgar, or obscene.
        </p>
        <br></br>

        <h4 text-2xl font-extrabold text-gray-800 mb-6 tracking-tight>
          2. Intellectual Property
        </h4>
        <p>
          The Service and its original content (excluding content provided by
          users), features, and functionality are and will remain the exclusive
          property of Debt Free Disciple and its licensors. The Service is
          protected by copyright, trademark, and other laws of both the [United
          Kingdom] and foreign countries. Our trademarks and trade dress may not
          be used in connection with any product or service without the prior
          written consent of Debt Free Disciple.
        </p>
        <br></br>

        <h4 text-2xl font-extrabold text-gray-800 mb-6 tracking-tight>
          3. Links To Other Web Sites
        </h4>
        <p>
          Our Service may contain links to third-party web sites or services
          that are not owned or controlled by Debt Free Disciple. Debt Free
          Disciple has no control over, and assumes no responsibility for the
          content, privacy policies, or practices of any third-party web sites
          or services. We do not warrant the offerings of any of these
          entities/individuals or their websites. You acknowledge and agree that
          Debt Free Disciple shall not be responsible or liable, directly or
          indirectly, for any damage or loss caused or alleged to be caused by
          or in connection with use of or reliance on any such content, goods or
          services available on or through any such third-party web sites or
          services. We strongly advise you to read the terms and conditions and
          privacy policies of any third-party web sites or services that you
          visit.
        </p>
        <br></br>

        <h4 text-2xl font-extrabold text-gray-800 mb-6 tracking-tight>
          4. Termination
        </h4>
        <p>
          We may terminate or suspend your account and bar access to the Service
          immediately, without prior notice or liability, under our sole
          discretion, for any reason whatsoever and without limitation,
          including but not limited to a breach of the Terms. If you wish to
          terminate your account, you may simply discontinue using the Service.
          All provisions of the Terms which by their nature should survive
          termination shall survive termination, including, without limitation,
          ownership provisions, warranty disclaimers, indemnity and limitations
          of liability.
        </p>
        <br></br>

        <h4 text-2xl font-extrabold text-gray-800 mb-6 tracking-tight>
          5. Indemnification
        </h4>
        <p>
          You agree to defend, indemnify and hold harmless Debt Free Disciple
          and its licensee and licensors, and their employees, contractors,
          agents, officers and directors, from and against any and all claims,
          damages, obligations, losses, liabilities, costs or debt, and expenses
          (including but not limited to attorney's fees), resulting from or
          arising out of a) your use and access of the Service, by you or any
          person using your account and password; b) a breach of these Terms, or
          c) Content posted on the Service.
        </p>
        <br></br>

        <h4 text-2xl font-extrabold text-gray-800 mb-6 tracking-tight>
          6. Limitation Of Liability
        </h4>
        <p>
          In no event shall Debt Free Disciple, nor its directors, employees,
          partners, agents, suppliers, or affiliates, be liable for any
          indirect, incidental, special, consequential or punitive damages,
          including without limitation, loss of profits, data, use, goodwill, or
          other intangible losses, resulting from (i) your access to or use of
          or inability to access or use the Service; (ii) any conduct or content
          of any third party on the Service; (iii) any content obtained from the
          Service; and (iv) unauthorized access, use or alteration of your
          transmissions or content, whether based on warranty, contract, tort
          (including negligence) or any other legal theory, whether or not we
          have been informed of the possibility of such damage, and even if a
          remedy set forth herein is found to have failed of its essential
          purpose.
        </p>
      </div>
      <button
        onClick={onBackClick}
        className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
      >
        <Home size={20} />
        <span>Back to Home</span>
      </button>
    </div>
  );
};

// Component for a placeholder "Policy" page
const PolicyPage = ({ onBackClick }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl w-full transform transition-all duration-300 hover:scale-105">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center tracking-tight">
        Privacy Policy
      </h2>
      <div className="text-gray-700 leading-relaxed space-y-4 mb-8">
        <p>
          This is a placeholder for our Privacy Policy. We are committed to
          protecting your privacy. This policy outlines how we collect, use, and
          safeguard your information when you visit our website.
        </p>
        <p>
          We may collect certain personal information, such as your name and
          email address, when you voluntarily provide it to us. We use this
          information to respond to your inquiries, provide services, and
          improve your experience on our site.
        </p>
        <p>
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties. This does not include
          trusted third parties who assist us in operating our website,
          conducting our business, or serving our users, so long as those
          parties agree to keep this information confidential.
        </p>
        <p>
          By using our site, you consent to our privacy policy. Any changes to
          our privacy policy will be posted on this page.
        </p>
      </div>
      <button
        onClick={onBackClick}
        className="bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
      >
        <Home size={20} />
        <span>Back to Home</span>
      </button>
    </div>
  );
};

export default App;
