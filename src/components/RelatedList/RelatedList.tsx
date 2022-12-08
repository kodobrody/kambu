import { RelatedVideo } from '../../components/RelatedVideo';
import { RelatedVideoType } from '../types';
import './RelatedList.scss';

type RelatedListProps = {
  videoList: Array<RelatedVideoType>;
}

export const RelatedList = ({ videoList }: RelatedListProps) => {
  return (
    <nav
      className="related-list"
      role="navigation"
    >
      <div className='related-list__title'>
        Related videos
      </div>
      <ul>
        {videoList.map(video => <RelatedVideo {...video} key={video.id} />)}
      </ul>
    </nav>
  )
}