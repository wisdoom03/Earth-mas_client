/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getPrice } from 'commons/utils/utils';
import { ISupportListProps } from 'components/units/support/list/SupportList.types';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './SupportCard.styles';
interface ISupportCardProps {
  el: ISupportListProps;
}

export default function SupportCard(props: ISupportCardProps) {
  const location = useLocation();
  const goal = Number(props.el.wishamount);
  const price = Number(props.el.currentamount);
  const percent = Math.floor((price / goal) * 100);
  const today = new Date();
  const dDay = new Date(props.el?.dday);
  const leftDay = Math.ceil(
    (today.getTime() - dDay.getTime()) / (1000 * 60 * 60 * 24),
  );

  return (
    // @ts-ignore
    <Container id={props.el.id} leftDay={leftDay} page={location.pathname}>
      <p className="leftDay">마감</p>
      <Link to={`/support/${props.el.id}`}>
        <div className="imgContainer">
          <img
            src={props.el?.url !== null ? props.el.url.split(',')[0] : ''}
            onError={e => {
              e.currentTarget.src = `/images/logo-icon.png`;
            }}
            alt="titleImg"
          />
        </div>
        <div className="contents">
          <div className="textBox">
            <p className="title">{props.el.title}</p>
            <p className="user">{props.el.user?.name}</p>
          </div>
          <div className="goal">{percent}%</div>
        </div>
        <p className="price">{getPrice(goal)}원</p>
      </Link>
    </Container>
  );
}
