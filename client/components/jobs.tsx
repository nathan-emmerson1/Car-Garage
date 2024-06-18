import { useJobs } from '../hooks/use-jobs'

function Job() {
  const { data: jobs, isError, isPending } = useJobs()
  if (isError) return <p>There was a error</p>
  if (isPending) return <p>Loading...</p>
  console.log(jobs)

  return (
    <>
      <p>Theres are the jobs</p>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <div>
              <p>{job.name}</p>
              <p></p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
export default Job
