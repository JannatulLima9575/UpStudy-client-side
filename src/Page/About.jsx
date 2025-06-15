import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content px-4 mt-24 py-16">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4">About EduVerse</h1>
        <p className="text-lg leading-relaxed">
          <span className="font-semibold">EduVerse</span> is a modern knowledge-sharing platform
          designed to connect learners and experts. Our goal is to make quality information
          accessible to everyone by enabling users to publish insightful articles, engage in
          discussions through comments, and interact with top contributors.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-base-200 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">📚 Publish Articles</h3>
            <p>Share your knowledge with the world through powerful writing tools including rich text editing and formatting.</p>
          </div>
          <div className="p-6 bg-base-200 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">💬 Engage & Learn</h3>
            <p>Comment on articles, like posts, and participate in healthy knowledge-based discussions across categories.</p>
          </div>
          <div className="p-6 bg-base-200 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">🏆 Top Contributors</h3>
            <p>Recognize and follow the top contributors in your favorite topics. We value quality content and active users.</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="max-w-3xl mx-auto text-base">
            At EduVerse, we believe knowledge grows when shared. Whether you're a student, a teacher, or a professional — we empower you to contribute, connect, and grow through meaningful learning experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;