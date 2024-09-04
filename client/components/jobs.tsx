import { useJobs } from '../hooks/use-jobs'

function Job() {
  const { data: jobs, isError, isPending } = useJobs()
  if (isError) return <p>There was a error</p>
  if (isPending) return <p>Loading...</p>
  console.log(jobs)

  return (
    <>
      <h1>Job List</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <div className="job-container">
              <div className="job-content">
                <p>Job Name:{job.name}</p>
                <p>Date:{job.date}</p>
                <p>Description:{job.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
export default Job
