import CompB from './CompB';

function CompA()
{
    let hero = "Rajini";

return <div>
    <h1>Component A</h1>
    <CompB one={"GM"} two={hero} />
    </div>

}

export default CompA;