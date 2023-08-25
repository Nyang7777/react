import { useState } from "react";


function Article(props) {
    return(
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}

function Head(props) {
    return(
        <header>
            {/* e => 이벤트, */}
            <h1><a href="/" onClick={(e)=>{
                // 페이지 리로드를 하지 않게 하자 
                e.preventDefault();

                // Head 컴포넌트에 onChangeMode를 실행한다. 뜻
                props.onChangeMode();
            }}>{props.title}</a></h1>
        </header>
    );
}
function Nav(props) {
    const arr =[];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        arr.push(
           <li key={t.id}>  {t.id} . 
            <a id={t.id} href={"/read/"+t.id} onClick={(e)=>{
                  e.preventDefault();
                  props.onChangeMode(e.target.id);
            }}> {t.title} </a>
            </li>);
    }
    return(
        <nav>
            <ol>
                {arr}
            </ol>
        </nav>
    );
}
function Create(props) {
    return <article>
        <h2>Create</h2>
        <form onSubmit={(e)=>{
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            props.onCreate(title,body);
        }}>
            <p><input type="text" name="title" placeholder="title" /> </p>
            <p><textarea name="body" placeholder="body" /></p>
            <p><input type="submit" value="Create" /></p>
        </form>
    </article>
}

function Update(props){
    // props 내용 변경을 위해 useState를 사용한다
    const[title, setTitle] = useState(props.title);
    const[body,setBody] = useState(props.body);

    return <article>
        <h2>Update</h2>
            {/* Corrected the opening tag to <form> */}
            <form onSubmit = {(e)=>{
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;
                props.onUpdate(title,body);
            }}>
            {/* props는 변경 못함 */}
            {/* <p><input type="text" name="title" value={props.title}/></p>
            <p><textarea name="body" value={props.body}></textarea></p> */}
            <p><input type="text" name="title" value={title} onChange={(e)=>{
                setTitle(e.target.value);
            }}/></p>
            <p><textarea name="body" value={body} onChange={(e)=>{
                setBody(e.target.value);
            }}></textarea></p>
            <p><input type="submit" value="Update"/></p>
        </form>
    </article>
}

export default function Main02() {
    // const top = [
    //     {id:1, title:"HTML", body : "Hypertext Markup Language"},
    //     {id:2, title:"CSS", body : "Cascading Style Sheets"},
    //     {id:3, title:"JS", body : "JavaScript"},
    // ];
    const [top, setTop] = useState([
        {id:1, title:"HTML", body:"Hypertext Markup Language"},
        {id:2, title:"CSS",body:"Cascading Style Sheets"},
        {id:3, title:"JS",body:"JavaScript"}
    ])

    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);
    let content = null;

    // 수정하기 (READ에서만)
    let contextcontroller = null;

    if(mode === 'WELCOME'){
     content = <Article title="Welcome" body="Hello, WEB" />;
    }else if(mode === 'READ'){
       let title, body = null         
       for (let i = 0; i < top.length; i++) {
        // id를 조작하기 위해서 useState를 사용하자 
          if(top[i].id === Number(id)){
            title = top[i].title ;
            body = top[i].body;
          }        
       } 
       content = <Article title={title} body={body} />;

       // 모드가 READ일 때만 수정 가능하게 한다
       // 수정 하려면 아이디 필요함
       contextcontroller = <>
        <li><a href={"/update/"+id} onClick={(e)=>{
            e.preventDefault();
            setMode('UPDATE');
        }}>Update</a></li>
        <li><input type="button" value="Delete" onClick={()=>{
            // 선택한 객체를 뺀 나머지를 담아서 다시 보여준다
            const newTops = [];
            for (let i = 0; i < top.length; i++) {
                if(top[i].id !==Number(id)){
                    newTops.push(top[i]);
                }
            }
            setTop(newTops);
            
        }}/></li>
       </>

    }else if(mode === 'CREATE'){
        content = <Create onCreate={(_title, _body)=>{
            const newTop = {id:nextId, title:_title, body:_body};
            // top 배열을 복사 해서 newTops를 만든다.
            const newTops = [...top]
            // newTops에 파라미터로 넘어온 값을 배열로 만든 newTop 추가 
            newTops.push(newTop);
            setTop(newTops);
            setMode('READ')
            setId(nextId)
            setNextId(nextId+1)
        }} /> 

    }else if(mode === "UPDATE"){
        let title, body = null;
        for (let i = 0; i < top.length; i++) {
            if(top[i].id === Number(id)){
                title = top[i].title;
                body = top[i].body;
            }
        }
        content = <Update title={title} body={body} onUpdate = {(_title, _body)=>{
            // 원래 내용 복사
            const newTops = [...top];
            // 변경할 내용
            const updateTop = {id:Number(id), title:_title, body:_body};
            for (let i = 0; i < newTops.length; i++) {
                if(newTops[i].id === Number(id)){
                    // 새로운 내용이 기존 내용을 덮어쓴다
                    newTops[i] = updateTop;
                    break;
                }
            }
            setTop(newTops);
            setMode("READ");
        }}></Update>
    }

    return(
        <div style={{marginLeft:"100px"}}>
            {/* 컴포넌트, props */}
           <Head title="WEB" onChangeMode={()=>{
            //  alert("Head");
            setMode("WELCOME");
           }} />
           <Nav topics={top}  onChangeMode={(id)=>{
             //  alert(id);
             setMode("READ");
             setId(id);
           }}/>
           {/* <Article title="Welcome" body="Hello, WEB" /> */}
           {content}
           <p>
            <a href="/create" onClick={(e)=>{
                e.preventDefault();
                setMode('CREATE');
            }}>Create</a>
           </p>
           <p>
            {/* 수정삭제 */}
            {contextcontroller}
           </p>
        </div>
    );
}