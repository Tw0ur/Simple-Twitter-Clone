import './App.css';
import React, {useState} from 'react';
import Main from './Basics/Main/Main';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import TrendsFollowContainer from './Basics/Trends/TrendsFollow';
import {findIndexUser} from './Redux/user-reducers';
import Login from './Basics/Main/Login';
import SvgTwitter from './Basics/Main/svgTwitter';

function App(props) {
    const [firstTimeVisitor, setFirstTimeVisitor] = React.useState(true);
    const [Loading, setLoading] = React.useState(true);
    const navigate = useNavigate()
    React.useEffect(() => {
        // Проверяем, посещал ли пользователь сайт ранее, используя localStorage
        const visitedBefore = localStorage.getItem('visitedBefore');
        if (!findIndexUser) {
            setLoading(false)
            navigate('')
        }
        if (visitedBefore && findIndexUser) {
            setLoading(false)
            setFirstTimeVisitor(false);
        } else {
            // Если пользователь посещает сайт впервые, сохраняем эту информацию
            localStorage.setItem('visitedBefore', 'true');
        }
    }, [navigate, findIndexUser]);
    const components = [
        {
            name: "Home",
            link: "/home",
        },
        {
            name: "Messages",
            link: "/messages/*",
        },
        {
            name: "Explore",
            link: "/explore",
        },
        {
            name: "I",
            link: "/i/*",
        },
        {
            name: "PrototypeJsx",
            link: "/prototype"
        },
        {
            name: "ProfileJsx",
            link: `/profile/:userId?`
        },
        {
            name: "Input",
            link: '/input'
        }
    ];

    const componentRoutes = components.map((component) => (
        <Route
            key={component.name}
            path={component.link}
            element={
                <Main
                    store={props.store}
                    verifyComponent={component.name}
                />
            }
        />
    ));

    const redirectTo = "/home";
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const handleReload = () => {
        localStorage.setItem('shouldRedirect', 'true');
        setShouldRedirect(true);
    };
    const RouteT = (<><Routes>
        <Route
            path="/"
            element={
                firstTimeVisitor ? (
                    <Login/>
                ) : (
                    <Navigate to={redirectTo} replace/>
                )
            }
        />


        {componentRoutes}

    </Routes>
        <TrendsFollowContainer profile store={props.store}/>
        <div className="posts">
        </div>
    </>)

  return (
      <div className="h-full flex w-full ">
          {/* {(document.location.pathname === "/" || document.title === "Twitter") ? <></> : } */}
          {Loading ? <div className="h-screen w-screen flex justify-center items-center"><SvgTwitter width={'100px'}
                                                                                                     color="rgb(231, 233, 234,0.1)"/>
          </div> : RouteT}

      </div>
  );
}

export default App;
