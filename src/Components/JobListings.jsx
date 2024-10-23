import JobListing from "./JobListing";
import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs' 
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error while fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]); 

  return (
    <section className="px-4 py-10 bg-blue-50">
      <div className="m-auto container-xl lg:container">
        <h2 className="mb-6 text-3xl font-bold text-center text-indigo-500">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

JobListings.propTypes = {
  isHome: PropTypes.bool.isRequired,
};


export default JobListings;
