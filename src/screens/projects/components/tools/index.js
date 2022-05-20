import { Tag, Segment } from '../../../../components';
import { TAG_COLORS } from '../../../../constants';

import './style.scss';

const Tools = () => {
  const tagsList = [];

  for (let [tag, color] of Object.entries(TAG_COLORS)) {
    tagsList.push(
      <Tag key={color} color={'#e0e1e2'}>
        {tag}
      </Tag>
    );
  }
  return (
    <div className='tools'>
      <Segment>
        <h5>Tools</h5>
        <div className='tools__list'>{tagsList}</div>
      </Segment>
    </div>
  );
};

export default Tools;
