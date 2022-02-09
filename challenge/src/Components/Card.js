const Card = ({el}) => {
    
    
    return(
        <div>
<div class="project-card">

<img src={el.Imagelink} alt='Not found'/>
    <h3>
        {el.Projectname} 
    </h3>
    <p> 
        {el.Projectparagraph} 
    </p>
    <p> 
        <a href="www.google.com">{el.Linktitle}</a>
    </p>

</div>
        </div>
    )
}

export default Card