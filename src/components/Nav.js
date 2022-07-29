import { NavLink, Outlet } from "react-router-dom";
import React,{useState} from 'react';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import "./Nav.css";

const Nav = () => {
	const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["nav__container"];
  if(isMenu) {
    boxClass.push('responsive__nav__show');
  }else{
    boxClass.push('');
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if(isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  }else {
    boxClassSubMenu.push('');
  }
  return (
		<div className="nav">
			<img src="/logo.png" height={90} width={200} alt="" />
			{/* <h1>Obsidian Advisory</h1> */}
			{isResponsiveclose === true ? (
				<>
					<span
						className="menubar__button"
						style={{ display: 'none' }}
						onClick={toggleClass}
					>
						{' '}
						<FiXCircle />{' '}
					</span>
				</>
			) : (
				<>
					<span
						className="menubar__button"
						style={{ display: 'none' }}
						onClick={toggleClass}
					>
						{' '}
						<FiAlignRight />{' '}
					</span>
				</>
			)}
			<ul className={boxClass.join(' ')}>
				{/* Approach #1 --- Active  */}
				<li>
					<NavLink
						onClick={toggleClass}
						className={({ isActive }) =>
							isActive ? 'active' : ''
						}
						to="/"
					>
						Home
					</NavLink>
				</li>

				{/* Approach #2 --- Active  */}

				<li
					onClick={toggleSubmenu}
					className="sub__menus__arrows"
				>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'active' : ''
						}
						to="/employers"
					>
						Employers <FiChevronDown />{' '}
					</NavLink>
					<ul className={boxClassSubMenu.join(' ')}>
						<li>
							<NavLink
								onClick={toggleClass}
								className={({ isActive }) =>
									isActive ? 'active' : ''
								}
								to="/user"
							>
								HR Consulting
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={toggleClass}
								className={({ isActive }) =>
									isActive ? 'active' : ''
								}
								to="/user/admin"
							>
								Recruitment
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={toggleClass}
								className={({ isActive }) =>
									isActive ? 'active' : ''
								}
								to="/user/admin"
							>
								Training
							</NavLink>
						</li>
					</ul>
				</li>
				<li
					onClick={toggleSubmenu}
					className="sub__menus__arrows"
				>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'active' : ''
						}
						to="/jobs"
					>
						Fashion Jobs <FiChevronDown />{' '}
					</NavLink>
					<ul className={boxClassSubMenu.join(' ')}>
						<li>
							<NavLink
								onClick={toggleClass}
								className={({ isActive }) =>
									isActive ? 'active' : ''
								}
								to="/user"
							>
								Vacancies
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={toggleClass}
								className={({ isActive }) =>
									isActive ? 'active' : ''
								}
								to="/user/admin"
							>
								Internships
							</NavLink>
						</li>
					</ul>
				</li>
				<li
					onClick={toggleSubmenu}
					className="sub__menus__arrows"
				>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'active' : ''
						}
						to="/career"
					>
						Career Development <FiChevronDown />{' '}
					</NavLink>
					<ul className={boxClassSubMenu.join(' ')}>
						<li>
							<NavLink
								onClick={toggleClass}
								className={({ isActive }) =>
									isActive ? 'active' : ''
								}
								to="/user"
							>
								Courses
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={toggleClass}
								className={({ isActive }) =>
									isActive ? 'active' : ''
								}
								to="/user/admin"
							>
								Coaching
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={toggleClass}
								className={({ isActive }) =>
									isActive ? 'active' : ''
								}
								to="/user/admin"
							>
								Podcasts
							</NavLink>
						</li>
					</ul>
				</li>

				<li
					onClick={toggleSubmenu}
					className="sub__menus__arrows"
				>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'active' : ''
						}
						to="/events"
					>
						Events <FiChevronDown />{' '}
					</NavLink>
					<ul className={boxClassSubMenu.join(' ')}>
						<li>
							<NavLink
								onClick={toggleClass}
								className={({ isActive }) =>
									isActive ? 'active' : ''
								}
								to="/user"
							>
								Workshops
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={toggleClass}
								className={({ isActive }) =>
									isActive ? 'active' : ''
								}
								to="/user/admin"
							>
								Webinars
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={toggleClass}
								className={({ isActive }) =>
									isActive ? 'active' : ''
								}
								to="/user/admin"
							>
								Career Fair
							</NavLink>
						</li>
					</ul>
				</li>

				<li>
					<NavLink
						onClick={toggleClass}
						className={({ isActive }) =>
							isActive ? 'active' : ''
						}
						to="/blog"
					>
						{' '}
						Blog{' '}
					</NavLink>
				</li>
				<Outlet />
			</ul>
			{/* <div>
        <a href="/" className="appointBtn">Book an Appointment</a>
      </div> */}
		</div>
	);
};

export default Nav;
