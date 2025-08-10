import React from "react";

const topContributors = [
  {
    name: "Sarah Khan",
    avatar: "https://i.pravatar.cc/100?img=1",
    badge: "Quiz Champion",
    posts: 124,
  },
  {
    name: "Jamil Hossain",
    avatar: "https://i.pravatar.cc/100?img=8",
    badge: "Top Mentor",
    posts: 98,
  },
  {
    name: "Nusrat Jahan",
    avatar: "https://i.pravatar.cc/100?img=5",
    badge: "Top Learner",
    posts: 88,
  },
];

const TopContributors = () => {
  return (
    <section className="bg-base-100 text-base-content py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Top Contributors</h2>
        <p className="mb-10 text-xl text-gray-500 dark:text-gray-400">
          Celebrating our most active learners and mentors!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {topContributors.map((user, index) => (
            <div
              key={index}
              className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-sm text-primary mt-1">{user.badge}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {user.posts} Contributions
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopContributors;