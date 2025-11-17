
import AllExam from "../Component/AllExam/AllExam";
import Body from "../Component/Body/body";
import Done from "../Component/Done/done";
import PageDefault from "../Component/PageDefault/pagedefault";
import RegisterPage from "../Component/RegisterPage/RegisterPage";
import SignIn from "../Component/SignIn/signin";
import Terms from "../Component/Terms/Terms";
import Topic from "../Component/Topics/topics";

const routes = [
    {
        path: "/",
        element: <PageDefault />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
                children: [
                            {
                                path: "terms",
                                element: <Terms />
                            },
                            {
                                path: "policy",
                                element: <Terms />
                            }
                ]
            },
            {
                path: "/signin",
                element: <SignIn />
                        
            },
            {
                path: "/topic",
                element: <Topic />,
                children: [
                    {
                        path: ":id",
                        element: <AllExam />
                    }
                ]
                    },
                    {
                        path: "/done",
                        element: <Done />
                    }
        ]
    },
];
export default routes;