import React, { useEffect, useRef, useState } from "react";
import { randAvatar, randEmail, randFullName } from "@ngneat/falso";

type People = {
  avatar: string;
  email: string;
  name: string;
};

const apiCallPeople = async () => {
  const data: People[] = [];

  for (let i = 0; i < 30; i++) {
    data.push({
      avatar: randAvatar(),
      email: randEmail(),
      name: randFullName(),
    });
  }

  return {
    data,
  };
};

function InfiniteScrolling() {
  const [people, setPeople] = useState<People[]>([]);
  const [loading, setLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const bottom = useRef(null);

  useEffect(() => {
    async function fetchPeople() {
      const res = await apiCallPeople();
      setPeople(res.data);
    }
    fetchPeople();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        async function fetchMorePeople() {
          setLoading(true);
          setTimeout(() => setShowLoading(true), 1000);
          const res = await apiCallPeople();
          setPeople((prevPeople) => [...prevPeople, ...res.data]);
          setLoading(false);
          setShowLoading(false);
        }
        fetchMorePeople();
      }
    });
    observer.observe(bottom.current);
  });

  return (
    <div className={"container mx-auto bg-gray-400"}>
      <h1 className={"text-4xl text-center"}>Infinite Scrolling</h1>
      <div className="grid grid-cols-3 gap-4">
        {people.map((person) => (
          <div key={person.email} className="flex flex-col items-center">
            <img
              src={person.avatar}
              alt={person.name}
              className="w-20 h-20 rounded-full"
            />
            <span className="text-gray-600">{person.name}</span>
            <span className="text-gray-600">{person.email}</span>
          </div>
        ))}
        {loading && (
          <div
            className={showLoading ? "loading" : ""}
            style={{ opacity: showLoading ? 1 : 0 }}
          >
            Loading...
          </div>
        )}
        <div ref={bottom} />
      </div>
    </div>
  );
}

export default InfiniteScrolling;
