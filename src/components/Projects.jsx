import {TaggedContentCard} from "react-ui-cards"
const Projects=()=>{
    return(
        <div className="projects">
        <h1>Projects</h1>
        <TaggedContentCard 
            href="#"
            thumbnail="#"
            title="User Management System"
            description="User management system to perform CRUD operations"
            tags={[
                "Node","Express","MongoDB"
            ]}
        />
        
        </div>
    )
}

export default Projects;