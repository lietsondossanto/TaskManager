import React from 'react'
import { Link } from 'react-router-dom'
import { bool } from 'prop-types'
import Cookies from 'universal-cookie'

import {
  Wrapper,
  Container,
  AddIcon,
  Profile,
  BurgerWrapper
} from './styles'

import { AiOutlineArrowRight, AiOutlineArrowDown } from 'react-icons/ai'
import { MdAddToPhotos } from 'react-icons/md'

const Menu = ({ open, showIconAdd }) => {
  const cookies = new Cookies()

  const name = cookies.get('name')
  const photo = cookies.get('photo')

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
                      <Link to="/">About US</Link>
                    </li>
                    <li>
                      <Link to="/">Cases</Link>
                    </li>
                    <li>
                      <Link to="/">Resources</Link>
                    </li>
                  </ul>
                </BurgerWrapper>
              </div>

              <AddIcon showIconAdd={showIconAdd}>
                <Link to="/add">
                  <span><MdAddToPhotos /></span>Add Task
                </Link>
              </AddIcon>
            </div>

            <aside className="right-side">
              <Profile>
                <img src={photo} alt="User pictore" />
                <Link to="/profile">
                  <AiOutlineArrowDown className="arrowDownIcon" />
                </Link>
                <div>
                  <strong>{name}</strong>
                  <Link to="/profile">
                    My account <span><AiOutlineArrowRight /></span>
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
