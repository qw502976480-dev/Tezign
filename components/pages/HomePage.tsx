
import React from 'react';
import Hero from '../sections/Hero';
import CoreCompetencies from '../sections/CoreCompetencies';
import IndustryVerticals from '../sections/IndustryVerticals';
import UpdatesSection from '../sections/UpdatesSection';
import HomeCTA from '../sections/HomeCTA';

interface HomePageProps {
  onNavigate: (page: any, id?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <CoreCompetencies />
      <IndustryVerticals onNavigate={onNavigate} />
      <UpdatesSection onNavigate={onNavigate} />
      <HomeCTA onNavigate={onNavigate} />
    </>
  );
};

export default HomePage;
