import { ReactSocialMediaIcons } from 'react-social-media-icons'
import './SocialMedia.css'

export default function SocialMedia() {
  return (
    <div className='social'>
      <hr></hr>
      <div className="social-media-links">
        <ReactSocialMediaIcons
          icon="youtube-play"
          borderWidth="0"
          roundness
          url="https://www.youtube.com/"
        />

        <ReactSocialMediaIcons
          icon="twitter"
          borderWidth="0"
          roundness
          url="https://twitter.com/"
        />

        <ReactSocialMediaIcons
          icon="instagram"
          borderWidth="0"
          roundness
          url="https://www.instagram.com/"
        />

        <ReactSocialMediaIcons
          icon="facebook"
          borderWidth="0"
          roundness
          url="https://www.facebook.com/"
        />

        <ReactSocialMediaIcons
          icon="linkedin"
          borderWidth="0"
          roundness
          url="https://www.linkedin.com/"
        />
      </div>
    </div>
  )
}
