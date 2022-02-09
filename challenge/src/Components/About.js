
const About = ({name,Userimg}) => {
    return (
        
<section id="about-me">
      <h1>
        Hello, my name is
        <span class="rotate text-important"> {name} </span>,<br />
        and i make horrible websites.
      </h1>
      <img class="avatar" src={Userimg} alt='F'/>
    </section>
  

    )
}

export default About