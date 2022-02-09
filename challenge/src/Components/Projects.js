import img1 from './ChallengeImages/Proj1.jpg'
import img2 from './ChallengeImages/Proj2.jpg'
import img3 from './ChallengeImages/Proj3.jpg'
import img4 from './ChallengeImages/Proj4.jpg'
import Card from './Card'

const Projects = () => {
  const tab = [
    {Projectname:'Project 1', Projectparagraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna elit, venenatis eu velit sed, eleifend rutrum sapien. Phasellus at massa et sapien porta finibus. Donec a consectetur massa. Suspendissevel magna justo. Nunc luctus, enim sit amet blandit bibendum, massa ipsum eleifend enim, et eleifend neque lectus a eros.' , Imagelink :img1 , Linktitle : "Githublink"},
    {Projectname:'Project 2', Projectparagraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna elit, venenatis eu velit sed, eleifend rutrum sapien. Phasellus at massa et sapien porta finibus. Donec a consectetur massa. Suspendissevel magna justo. Nunc luctus, enim sit amet blandit bibendum, massa ipsum eleifend enim, et eleifend neque lectus a eros.' , Imagelink :img2 , Linktitle : "Githublink"},
    {Projectname:'Project 3', Projectparagraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna elit, venenatis eu velit sed, eleifend rutrum sapien. Phasellus at massa et sapien porta finibus. Donec a consectetur massa. Suspendissevel magna justo. Nunc luctus, enim sit amet blandit bibendum, massa ipsum eleifend enim, et eleifend neque lectus a eros.' , Imagelink :img3 , Linktitle : "Githublink"},
    {Projectname:'Project 4', Projectparagraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna elit, venenatis eu velit sed, eleifend rutrum sapien. Phasellus at massa et sapien porta finibus. Donec a consectetur massa. Suspendissevel magna justo. Nunc luctus, enim sit amet blandit bibendum, massa ipsum eleifend enim, et eleifend neque lectus a eros.' , Imagelink :img4 , Linktitle : "Githublink"},
  ]

    return (

        <section id="projects">
        <h2 class="text-important">Projects</h2>
        <div class="projects-container">
          
            {
              tab.map(el=> <Card el={el}/>)
            }

        </div>

      </section>  

    )
}

export default Projects

