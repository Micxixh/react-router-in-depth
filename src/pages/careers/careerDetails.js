import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
    const { id } = useParams()
    const careersData = useLoaderData()
  
    return (

        <div className="career-details">
            <h2>Career Details for {careersData.title}</h2>
            <p>Starting Salary: {careersData.salary}</p>
            <p>location: {careersData.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, vel
                voluptas? Ipsa magnam officiis culpa, repellendus excepturi fuga aspernatur
                iusto hic dolores. Sequi dolore deserunt dolores exercitationem sed?
                Repellendus, aspernatur.</p>
            </div >
        </div>
    )
}

//loader function
export const careerDetailsLoader = async ({params}) => {
    const { id } = params

    const res= await fetch('http://localhost:4000/careers/'+ id)

if (!res.ok){
  throw Error('Could not find that career')  
}
  return res.json()
}