import { Link } from "react-router-dom";

export default function EmptyPage(){
    return(
        <div>
            <h2>실패</h2>
            <Link to="/">돌아가기</Link>
        </div>
    );
}