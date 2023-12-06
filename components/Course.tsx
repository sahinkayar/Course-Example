
function Course({title,description,image}:any) {

  return (
    <div>
      <div className="card">
  <div className="card-image">
    <div className="img-container" >
      <img style={{height:"160px",}} className="img" src={image} alt="Placeholder image"/>
    </div>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{title}</p>
    
      </div>
    </div>

    <div className="content">
     {description}
     
    </div>
  </div>
</div>
    </div>
  )
}

export default Course
