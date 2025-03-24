import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MembershipHeader from './MembershipHeader';
import Benefits from './Benefits';
import SignupForm from './SignupForm';
import UserStory from './UserStory';
import CallToAction from './CallToAction';

export default function Membership() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Navbar />
      <div className="pt-20">
        <MembershipHeader />
        <Benefits />
        <SignupForm />
        <UserStory />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}