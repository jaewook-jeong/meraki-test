import ROUTES from 'constants/ROUTES';
import StyledLink from './styled';
import Icons from '@assets/svg';

type Props = {
  currentPath: string;
};

const ButtonsRoutes = {
  [ROUTES.MAIN]: {
    Icon: Icons.MenuHome,
    name: '홈',
  },
  [ROUTES.SCRAP]: {
    Icon: Icons.MenuScrap,
    name: '스크랩',
  },
};

const Buttons = ({ currentPath }: Props) => {
  return (
    <>
      {Object.entries(ButtonsRoutes).map(([key, { name, Icon }]) => {
        return (
          <StyledLink $active={key === currentPath} to={key} key={key}>
            <Icon />
            {name}
          </StyledLink>
        );
      })}
    </>
  );
};

export default Buttons;
