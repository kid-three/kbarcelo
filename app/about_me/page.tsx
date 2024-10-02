'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const aboutMe = () => {
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    // Redirect to /about_me/bio when the component mounts
    router.push('/about_me/bio');
  }, [router]);
  return null;
};

export default aboutMe;
