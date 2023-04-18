import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [info, setInfo] = useState([]);

  // fetch('http://localhost:8000/api/v1/jobs/allJobs')
  //   .then((response) => setInfo(response.data)).map(({id, description})=> {
  //     return <p key={description}>{id} - {description}</p>

  //   });
  // console.log(info);
  // const items = info.map((i)=> i[0])
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/jobs/allJobs')
      .then((resp) => {
        setInfo(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(items);

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <div className='jobs'>
        {info.map((i) => (
          <div className='content' key={i.id}>
            <div className='job-title'>
              <h3>{i.title}</h3>
            </div>
            <p>{i.description}</p>
            <p>{i.salary}</p>
            <p>{i.jobType}</p>
            <p>{i.description}</p>
            <p>{i.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
