import React from "react";
import {createHtmlMarkup, findIndexUser} from "../../Redux/user-reducers";
import CardProfile from "./CardProfile";
import {Link} from "react-router-dom";
import {ListOfFollow} from "../../Redux/follow-Reducer";

function Users(props) {
    const {e, checkTermCondition, apple} = props;
    const name = `${e.info.name} ${e.info.subname}`;
    const link = e.info.link;
    const ref = e.info.ref;
    return (
        <div className={`block blockS `}>
            <div className=" w-full px-4 py-3">
                <div>
                    {props.checkTermCondition.disabledLink ? (
                        <div className="flex w-full h-full ">
                            <CardProfile
                                refLink={ref}
                                profileImage={e.info.profileImage}
                                name={name}
                                link={link}
                                notCard={checkTermCondition.notCard}
                                button={checkTermCondition.button}
                                verify={apple}
                                check={e}
                            />
                        </div>
                    ) : (
                        <Link to={"/" + ref}>
                            <div className="flex w-full h-full ">
                                <CardProfile
                                    refLink={ref}
                                    notCard={checkTermCondition.notCard}
                                    profileImage={e.info.profileImage}
                                    name={name}
                                    link={link}
                                    button={checkTermCondition.button}
                                    verify={apple}
                                    check={e}
                                />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

const SimpleCardUser = (props) => {
    const {e} = props
    const name = `${e.info.name} ${e.info.subname}`;
    const ref = '/' + e.info.ref;
    return (
        <div className={`flex items-center w-full`} style={{height: "53px"}}>

            <div className=" w-full px-4">
                <div className="flex w-full h-full ">
                    <div className=" flex justify-between ">
                        <div className="p-0.5 mr-3">
                            <Link to={ref}>
                                <div className="h-8 w-8">
                                    <img
                                        src={
                                            e.info.profileImage
                                                ? e.info.profileImage
                                                : "https://i.pinimg.com/736x/3f/6d/26/3f6d26bdb59adce4b73f0b7e3061540e.jpg"
                                        }
                                        alt=""
                                        className="followImg" style={{width: "32px", height: "32px"}}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="flex w-full flex-col justify-center ">
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-center lightFont font-bold">
                                <div>
                                    <div className="">
                                        <div className="">
                      <span className="TrendsT capitalize  Before">
                        {name}
                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center messageHover rounded-full"
                                 style={{minHeight: "36px", minWidth: "36px", marginBottom: "calc(-4px)"}}>
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 fill-current text-white">
                                    <g>
                                        <path
                                            d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const UserComponent = (props) => {
    const {e, checkTermCondition} = props;

    const title = e.title;
    const verify = () => {
        if (title) {
            if (checkTermCondition.title) {
                return (
                    <div className="pt-1">
                        <div className="TrendsInfo">{createHtmlMarkup(title)}</div>
                    </div>
                );
            }
        }
    };
    const apple = verify();
    return (
        <>
            {checkTermCondition.simpleCard ? <SimpleCardUser e={e} checkTermCondition={checkTermCondition}/> :
                <Users e={e} checkTermCondition={checkTermCondition} apple={apple}/>}

        </>
    );
};


const Proverka = (props) => {
    const {objects, checkTermCondition, verify, list} = props;
    const [itemsToRender, setItemsToRender] = React.useState([]);
    const currentListOfFollow = findIndexUser && ListOfFollow.find((e) => e.id === findIndexUser.id);
    React.useEffect(() => {
        const updatedItemsToRender = getRandomObjects(objects, checkTermCondition, verify, list, currentListOfFollow);
        setItemsToRender(updatedItemsToRender);
    }, [findIndexUser, objects, checkTermCondition]); // useEffect будет вызываться каждый раз, когда изменится currentListOfFollow
    return (
        <>
            {itemsToRender}
        </>
    )
}
const getRandomObjects = (objects, checkTermCondition, verify, list, currentListOfFollow) => {

    const filteredObjects = objects.filter(
        (obj) =>
            (!obj.isAuthenticated || obj.isAuthenticated === false) &&
            obj.id !== checkTermCondition.condition &&
            (!obj.follower || obj.follower === false) &&
            (checkTermCondition.disabledLink || checkTermCondition.notCard || !currentListOfFollow.count.listOfFollowing.includes(obj.id))
    );
    const filteredListOfFollowing = objects.filter(
        (obj) =>
            // (!obj.isAuthenticated || obj.isAuthenticated === false) &&
            obj.id !== checkTermCondition.condition &&
            list.listOfFollow &&
            list.listOfFollow.count.listOfFollowing.includes(obj.id)
    );
    const filteredListOfFollowers = objects.filter(
        (obj) =>
            (!obj.isAuthenticated || obj.isAuthenticated === false) &&
            obj.id !== checkTermCondition.condition &&
            list.listOfFollow &&
            list.listOfFollow.count.listOfFollowers.includes(obj.id)
    );

    const shuffledObjects = filteredObjects.sort(() => Math.random() - 0.5);

    let itemsToRender;
    if (verify.verifyNoRandom === "Yes") {
        if (verify.message) {
            itemsToRender = filteredObjects.map((e) =>
                verify.message === e.id ? (
                    <UserComponent
                        key={e.id}
                        e={e}
                        checkTermCondition={checkTermCondition}
                    />
                ) : null
            );
        } else if (list.listOfFollow) {
            if (list.listOf === "Following")
                itemsToRender = filteredListOfFollowing.map((e) => (
                    <UserComponent
                        key={e.id}
                        e={e}
                        listFollowing
                        checkTermCondition={checkTermCondition}
                    />
                ));
            else {
                itemsToRender = filteredListOfFollowers.map((e) => (
                    <UserComponent
                        key={e.id}
                        e={e}
                        listFollowers
                        checkTermCondition={checkTermCondition}
                    />
                ));
            }
        } else {
            itemsToRender = objects.map((e) => {
                if (e.id === verify.id) {
                    return (
                        <UserComponent
                            key={e.id}
                            e={e}
                            checkTermCondition={checkTermCondition}
                        />
                    );
                } else return null;
            });
        }
    } else if (verify.verifyNoRandom === "No") {
        itemsToRender = filteredObjects.map((e) => (
            <UserComponent key={e.id} e={e} checkTermCondition={checkTermCondition}/>
        ));
    } else {
        itemsToRender = shuffledObjects
            .slice(0, checkTermCondition.term ? checkTermCondition.term : 3)
            .map((e) => (
                <UserComponent
                    key={e.id}
                    e={e}
                    checkTermCondition={checkTermCondition}
                />
            ));
    }

    return itemsToRender;
};

class TrendsClass extends React.Component {
    render() {
        const {
            check,
            condition,
            title,
            button,
            verifyNoRandom,
            id,
            user,
            message,
            listOfFollow,
            listOf,
            disabledLink,
            notCard,
            simpleCard,
        } = this.props;

        const checkTermCondition = {
            condition: condition,
            title: title,
            button: button,
            disabledLink: disabledLink,
            notCard: notCard,
            simpleCard: simpleCard,
        };

        const verify = {
            verifyNoRandom: verifyNoRandom,
            id: id,
            info: user,
            message: message,
        };
        const list = {
            listOfFollow: listOfFollow,
            listOf: listOf,
        };

        return <Proverka objects={check} checkTermCondition={checkTermCondition} verify={verify} list={list}/>;
    }
}

export default TrendsClass;
