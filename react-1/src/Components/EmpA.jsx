import EmpB from './EmpB';

function EmpA(){
    let EmpId = 101;
    let EmpName = "Charan";

    return <div>
        <h1>Employee A</h1>
        <EmpB one={"Good Evening"} EId={EmpId} EName = {EmpName} />
    </div>

}

export default EmpA
