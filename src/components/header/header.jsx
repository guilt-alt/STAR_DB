import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="https://bongacams.org" rel='noreferrer' target='_blank'>
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="https://pornhub.com" rel='noreferrer' target='_blank'>People</a>
        </li>
        <li>
          <a href="https://youporn.com" rel='noreferrer' target='_blank'>Planets</a>
        </li>
        <li>
          <a href="https://scrolller.com" rel='noreferrer' target='_blank'>Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
