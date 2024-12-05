import { useState, useEffect } from 'react';

const random1 = () => {
  const [CurrentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  // UseEffect

  useEffect(() => {
    setLoading(true);
    console.log(`Send request to backedn to get data from  ${CurrentTab}`);
    fetch(`https://jsonplaceholder.typicode.com/todos/${CurrentTab}`).then(
      async (res) => {
        const json = await res.json();
        setTabData(json);
        setLoading(false);
      }
    );
  }, [CurrentTab]);

  return (
    <div>
      <button
        onClick={() => {
          setCurrentTab(1);
        }}
        style={{ color: CurrentTab == 1 ? 'red' : 'black' }}
      >
        todo #1
      </button>
      <button
        onClick={() => {
          setCurrentTab(2);
        }}
        style={{ color: CurrentTab == 2 ? 'red' : 'black' }}
      >
        todo#2
      </button>
      <button
        onClick={() => {
          setCurrentTab(3);
        }}
        style={{ color: CurrentTab == 3 ? 'red' : 'black' }}
      >
        todo3
      </button>
      <button
        onClick={() => {
          setCurrentTab(4);
        }}
        style={{ color: CurrentTab == 4 ? 'red' : 'black' }}
      >
        todo4
      </button>
      <br />
      <div>Tab title</div>
      {loading ? 'loading...' : tabData.title}
    </div>
  );
};

export default random1;
