import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {

  const careersData = useLoaderData()
  
  return(
    <div className="careers">

        {careersData.map(({ id, title, location }) => (

          <Link to={id.toString()} key={id}>
            <p>{title}</p>
            <p>Based in {location}</p>
          </Link>

        ))}

    </div>
  )
}

//loader function
export const careersLoader = async () => {
  const res= await fetch('http://localhost:4000/careers')
  
  if (!res.ok) {
    throw Error('Could not fetch the list of careers')
  }
  return res.json()
}