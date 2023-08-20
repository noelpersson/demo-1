import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react';

function Metod12() {
    const [key, setKey] = useState<number>(1);

  return (
    <div className=" h-1/2 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 py-20 w-full max-w-screen-lg h-400 flex">
        <div className="w-1/3 flex items-center">
          <h1 className="text-4xl font-bold">Vår metod</h1>
        </div>
        <div className="w-2/3">
        <   Tabs selectedIndex={key} onSelect={index => setKey(index)}>
            <TabList className="flex mb-4 ">
                <Tab className="mr-4 pb-2 text-xl  hover:text-secondary transition duration-500 cursor-pointer">Strategi</Tab>
                <Tab className="mr-4 pb-2 text-xl  hover:text-secondary transition duration-500 cursor-pointer">Aktivering</Tab>
                <Tab className="pb-2 text-xl  hover:text-secondary transition duration-500 cursor-pointer">Optimering</Tab>
            </TabList>
            <TabPanel>
              <h3 className="text-3xl font-bold mb-4">Tab 1 is working!</h3>
              <p className="text-gray-600">
                This is the content of Tab 1. You can add whatever content you
                want to displace inside the &lt;TabPanel&gt; &lt;/TabPanel&gt;
              </p>
            </TabPanel>
            <TabPanel>
              <h3 className="text-xl font-bold mb-4">Tab 2 working!</h3>
              <p className="text-gray-600">
                This is the content of Tab 2. You can add whatever content you
                want to displace inside the &lt;TabPanel&gt; &lt;/TabPanel&gt;
              </p>
            </TabPanel>
            <TabPanel>
              <h3 className="text-xl font-bold mb-4">Tab 3 is working!</h3>
              <p className="text-gray-600">
                This is the content of Tab 3. You can add whatever content you
                want to displace inside the &lt;TabPanel&gt; &lt;/TabPanel&gt;
              </p>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Metod12;
