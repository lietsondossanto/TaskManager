import React from 'react'
import { Link } from 'react-router-dom'
import { bool } from 'prop-types'
import Cookies from 'universal-cookie'

import {
  Wrapper,
  Container,
  Profile,
  BurgerWrapper
} from './styles'

import { AiOutlineArrowRight } from 'react-icons/ai'
import { MdAddToPhotos } from 'react-icons/md'

const Menu = ({ open, addIcon }) => {
  const cookies = new Cookies()

  const name = cookies.get('name')
  const photo = cookies.get('photo')

  function showAddIcon (addIcon) {
    return addIcon ? 'none' : 'flex'
  }

  const style = {
    display: showAddIcon(addIcon)
  }

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
                <img src={photo} alt="user photo" />
                <div>
                  <strong>{name}</strong>
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
