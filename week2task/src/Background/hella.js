import video1 from '../../src/images/video.mp4'
import image1 from '../../src/images/pexels-bintimalu-1485657.jpg'
import image2 from '../../src/images/pexels-cottonbro-3831849.jpg'
import image3 from '../../src/images/mountain.jpg'
import './hella.css'
import Image from 'react-bootstrap/Image';

const Background = ({playStatus, heroCount}) => {
    if (playStatus)
    {
        return(
            <video className="background" autoPlay loop muted>
                <source src= {video1}  type='video/mp4'/>
            </video>
        )
    }
    else if(heroCount==0){
        return(
            <Image src={image1} fluid />
        )
    }
    else if(heroCount==1){
        return(
            <Image src={image2} fluid />
        )
    }
    else if(heroCount==2){
        return(
            <Image src={image3} fluid />
        )
    }
}
 
export default Background;