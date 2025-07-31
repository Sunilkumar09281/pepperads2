import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero with Background */}
      <div className="relative h-[500px] font-sans">
        <img 
          src="https://i.postimg.cc/mkVHbX3x/two-monastera-leaves-black-background-23-2147835077.avif"
          alt="Blog Hero" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black flex flex-col justify-center items-center px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold mb-4"
          >
            Our <span className="text-red-600">Blog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl max-w-3xl text-gray-300"
          >
            Explore fresh takes, success stories, and real-world growth experiments in our blog.
          </motion.p>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <p className="text-center text-gray-400 text-lg mb-6 font-medium">
          Whether you're into survey trends, digital design, or funnel results — get digestible insights with real value.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {/* Blog Cards */}
          {[
            {
              title: "Turning Surveys into Revenue",
              desc: "Learn how creators are monetizing form traffic through affiliate funnels and reward loops.",
              img: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80"
            },
            {
              title: "2024 Form Design Trends",
              desc: "Discover the hottest UI/UX practices in forms — from microinteractions to smart layouts.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0_d_-Ja4lVcNaO_MSxwcTN1hRTnIMKuEOQ&s"
            },
            {
              title: "High-Converting Funnels",
              desc: "Real-world experiments on building funnel experiences that convert users like magic.",
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
            }
          ].map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-[#111] rounded-2xl overflow-hidden shadow-md hover:shadow-red-500/30 transition-shadow"
            >
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-red-500">{post.title}</h3>
                <p className="text-gray-400 text-sm">{post.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#7f0008] py-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Ready to send your own surveys?
        </h2>
        <button
          onClick={() => navigate('/login')}
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
        >
          Get started
        </button>
      </motion.div>
    </div>
  );
};

export default Blog;
