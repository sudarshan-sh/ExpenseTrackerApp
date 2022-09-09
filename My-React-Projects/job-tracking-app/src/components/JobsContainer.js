import React from 'react'
import Wrapper from '../assets/wrappers/JobsContainer'
import { useDispatch, useSelector } from 'react-redux'
import Job from './Job'
import Loading from './Loading'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import { useEffect } from 'react'

const JobsContainer = () => {
    const { jobs, isLoading } = useSelector((store) => store.allJobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllJobs());
    }, []);

    if (isLoading) {
        return (
            // <Wrapper>
            //     <h2>Loading...</h2>
            // </Wrapper>
            <Loading center />
        )
    }

    if (jobs.length === 0) {
        return (
            <Wrapper>
                <h2>No jobs to display...</h2>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <h5>job info</h5>
            <div className="jobs">
                {jobs.map((job) => {
                    return <Job key={job._id} {...job} />
                })}
            </div>
        </Wrapper>
    )
}

export default JobsContainer