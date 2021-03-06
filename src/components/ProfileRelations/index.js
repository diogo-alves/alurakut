import styled from 'styled-components'; 
import Box from '../Box';

export function ProfileRelationsBox({ title, items }) {
  const MAX_NUM_VISIBLE_ITEMS = 6;
  return (
    <ProfileRelationsBox.Wrapper>
      <h2 className="smallTitle">
        {title} <a href="#" className="boxLink">({items.length})</a>
      </h2>
      <ul>
        {items.slice(0, MAX_NUM_VISIBLE_ITEMS).map(item => {
          return (
            <li key={item.id}>
              <a href={item.url}>
                <img src={item.image_url} style={{ borderRadius: '8px' }} />
                <span>{item.name}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <div>
        <hr />
        <a href="#" className="boxLink">Ver todas</a>
      </div>
    </ProfileRelationsBox.Wrapper>
  )
}

ProfileRelationsBox.Wrapper = styled(Box)`
  ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr; 
    max-height: 220px;
    list-style: none;
  }
  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  ul li a {
      display: inline-block;
      height: 102px;
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      span {
      color: #FFFFFF;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);
    }
  }
`;