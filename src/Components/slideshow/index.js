import { Slide } from "./slide"
import SlideShowContainer from "./slideshow-container"

const ShowShow = () =>{
    const { Image, Text } = Slide()
    return(
        <div className="col-sm-12">
            <SlideShowContainer 
                Image={Image}
                Text={Text}
            />
        </div>
     
    )
}

export default ShowShow