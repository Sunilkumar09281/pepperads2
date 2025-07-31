import React from 'react';

const FormBuilder = () => {
  const featureImages = [
    "https://i.postimg.cc/1347bd05/Add-Toyour-Website.jpg",
    "https://i.postimg.cc/cHTHzTNZ/notify1.jpg",
    "https://i.postimg.cc/905B0WnJ/trachresponse.jpg"
  ];

  const templateImages = [
    "https://i.postimg.cc/85XP15Xr/add-notes-concept-illustration-114360-2496.jpg",
    "https://i.postimg.cc/Px0JWJbn/application.jpg",
    "https://i.postimg.cc/3xkq6wmc/contact.jpg",
    "https://i.postimg.cc/7PBmkkH8/donation.jpg"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
          alt="Form Builder background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">
                Drag & Drop <span className="text-red-600">Form Builder</span>
              </h1>
              <p className="text-xl text-gray-300">
                Create beautiful, responsive forms using our intuitive drag-and-drop builder. No design skills needed — just add questions, tweak layouts, and go live.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featureImages.map((imgUrl, index) => (
            <div key={index} className="bg-gray-900 rounded-lg border border-gray-800 hover:border-red-600 transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gray-800 overflow-hidden">
                <img 
                  src={imgUrl} 
                  alt={`Feature ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {index === 0 && "Add to Your Website"}
                  {index === 1 && "Share & Get Notified"}
                  {index === 2 && "Track Responses"}
                </h3>
                <p className="text-gray-300 mb-4">
                  {index === 0 && "Embed your form directly onto your website with a simple copy and paste."}
                  {index === 1 && "Share your form via email, web link, or more. Get notified when you receive submissions."}
                  {index === 2 && "View entries in a single table or export to your spreadsheet software."}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Templates Section - Enhanced with more spacing */}
        <div className="max-w-6xl mx-auto mb-24"> {/* Increased bottom margin */}
          <h2 className="text-3xl font-bold mb-12 text-center"> {/* Increased bottom margin */}
            Discover Top <span className="text-red-600">Use Cases</span> and Form Templates
          </h2>
          
          <div className="border-t border-gray-700 my-12"></div> {/* Increased vertical spacing */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Increased gap between cards */}
            {templateImages.map((imgUrl, index) => (
              <div 
                key={index} 
                className="bg-gray-900 rounded-lg border-2 border-gray-800 hover:border-red-600 transition-all duration-300 overflow-hidden flex flex-col"
                style={{ minHeight: '400px' }} /* Fixed height for consistency */
              >
                <div className="h-56 p-4 bg-gray-800 overflow-hidden flex items-center"> {/* Increased height and added padding */}
                  <img 
                    src={imgUrl} 
                    alt={[
                      "Registration Form",
                      "Application Form",
                      "Contact Form",
                      "Donation Form"
                    ][index]}
                    className="w-full h-full object-contain" /* Changed to object-contain for better visibility */
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col space-y-4"> {/* Added space between elements */}
                  <h3 className="text-xl font-bold text-red-600">
                    {index === 0 && "Registration Forms"}
                    {index === 1 && "Application Forms"}
                    {index === 2 && "Contact Forms"}
                    {index === 3 && "Donation Forms"}
                  </h3>
                  <p className="text-gray-300 flex-grow">
                    {index === 0 && "Easily collect data, payments, and other attendee information."}
                    {index === 1 && "Seamlessly manage applications for jobs, grants, programs, and more."}
                    {index === 2 && "Collect contact information from customers, prospects, and more."}
                    {index === 3 && "Collect donations and payments, right from your website."}
                  </p>
                  <a href="#" className="text-red-500 hover:text-red-400 font-medium mt-4 inline-block">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Powerful <span className="text-red-600">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Key Features</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Drag & drop interface
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Customizable templates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Real-time preview
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Mobile responsive design
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Form Types</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Feedback forms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Registration forms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Surveys & polls
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Lead generation forms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;