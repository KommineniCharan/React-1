import FCB from "./FCB";

function FCA(){

    let EmpId = 101;
    let EmpName = "Cherry";

    return <div>
        <h1>FCA</h1>
        <FCB eid={EmpId} ename={EmpName} />

    </div>

}

export default FCA;