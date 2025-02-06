import Navbar from "../components/Shared/Navbar";

const CommonLayout = ({children}) => {
    return (
        <div>
        <Navbar></Navbar>
            
            {children}
        </div>
    );
};

export default CommonLayout;