import { getPrice } from 'commons/utils/utils';
import { ISupportListProps } from 'components/units/support/list/SupportList.types';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from './SupportCard.styles';
// import { ISupportCardProps } from './SupportCard.types';
interface ISupportCardProps {
  el: ISupportListProps;
  // leftday: number;
}
export default function SupportCard(props: ISupportCardProps) {
  // const navigate = useNavigate();

  const goal = Number(props.el.wishamount);
  const price = Number(props.el.currentamount);
  const percent = Math.floor((price / goal) * 100);
  const today = new Date();
  const dDay = new Date(props.el?.dday);
  const leftDay: number = Math.ceil(
    (today.getTime() - dDay.getTime()) / (1000 * 60 * 60 * 24),
  );

  const moveToDetail = () => {
    // navigate(`/support/${props.el.id}`);
    // console.log(`/support/${e.target.id}`);
    // console.log(props.el);
  };

  return (
    <Container id={props.el.id} /* leftDay={leftDay} */>
      <Link to={`/support/${props.el.id}`}>
        <div className="imgContainer">
          <img src={props.el.url} alt="titleImg" />
        </div>
        <div className="contents">
          <div className="textBox">
            <p className="title">{props.el.title}</p>
            <p className="user">{props.el.user?.name}</p>
          </div>
          <div className="goal">{percent}%</div>
        </div>
        <p className="price">{getPrice(goal)}</p>
      </Link>
    </Container>
  );
}
