import React from 'react';
import { Link } from 'react-router-dom'
import { bool } from 'prop-types';

import {
  Wrapper,
  Container,
  Profile,
  BurgerWrapper
} from './styles'

import { AiOutlineArrowRight } from 'react-icons/ai'
import { MdAddToPhotos } from 'react-icons/md'

import photo from './../../assets/img/photo.jpg'

const Menu = ({ open, addIcon }) => {

  function showStyled (addIcon) {
    return addIcon ? 'none' : 'flex'
  }

  const style = {
    display: showStyled(addIcon)
  };

  return (
    <>
      <Wrapper>
        <Container>
          <nav>
            <div className="left-side">
              <div className="MenuBurger">
                <BurgerWrapper open={open}>
                  <ul>
                    <li>
                      <Link to="/">
                        <a target="_self">About US</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <a target="_self">Cases</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <a target="_self">Resources</a>
                      </Link>
                    </li>
                  </ul>
                </BurgerWrapper>
              </div>

              <div className="Add" style={style}>
                <Link to="/add">
                  <a target="_self">
                    <span><MdAddToPhotos /></span>Add Task
                  </a>
                </Link>
              </div>
            </div>

            <aside className="right-side">
              <Profile>
                <img src={photo} alt="photo user" />
                <div>
                  <strong>Lietson Dos Santos</strong>
                  <Link to="/profile">
                    <a target="_self">
                      My account <span><AiOutlineArrowRight /></span>
                    </a>
                  </Link>
                </div>
              </Profile>
            </aside>
          </nav>
        </Container>
      </Wrapper>
    </>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
