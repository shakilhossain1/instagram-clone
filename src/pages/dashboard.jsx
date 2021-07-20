import React, { useEffect } from 'react';
import Timeline from '../components/TimeLine';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import tw from 'twin.macro';

const Wrapper = tw.div`bg-gray-background`
const Grid = tw.div`grid`

function Dashboard() {
  useEffect(() => {
    document.title = 'Instagram';
  }, []);
  return (
    <Wrapper>
      <Header />
      <Grid>
        {/* <Timeline />
        <Sidebar /> */}
      </Grid>
    </Wrapper>
  );
}

export default Dashboard;
