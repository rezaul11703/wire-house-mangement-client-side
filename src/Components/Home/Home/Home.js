import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import InventorySection from '../InventorySection/InventorySection';
import OverviewItems from '../OverviewItems/OverviewItems';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InventorySection></InventorySection>
      <Category></Category>
      <OverviewItems></OverviewItems>
    </div>
  );
};

export default Home;