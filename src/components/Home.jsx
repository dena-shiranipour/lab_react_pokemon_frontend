import { Outlet } from "react-router-dom";

const Home = () => {
    return(
        <> 
    
            <section>
                <ul>
                    <li>List 1</li>
                </ul>
                <Outlet />
            </section>
            

        </>
    )
}

export default Home;