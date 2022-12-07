import './App.css';
import { VideoPlayer } from '@/components/VideoPlayer';
import { RelatedList } from '@/components/RelatedList/RelatedList';
import {
  relList,
  video
} from './consts';

function App() {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className='allWrapper'>
        <VideoPlayer video={video} />
        <RelatedList videoList={relList} />
      </div>
    </>
  )
}

export default App
