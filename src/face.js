import { useState } from "react";
import Loader from "./loader";
import './face.css'

 
function Face() {
    const [isLoading, setIsLoading] = useState(true);
 
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
    return (
        <div className="inter">
        
            {/* <div className="hed">
            <h3>Thattark</h3>
            </div> */}
            
            {isLoading ? (
                
                    <Loader />
                
            ) : (
                <section>
                    
                    <div className="fbox">
                    
                    </div>
                    
                </section>
            )}
        </div>
    );
}
 
export default Face;