function HelloWolrd(){

    // JSX 
    const msg = 'Hello wolrd'

    function somar(a,b) {
        return a + b;
    }
    return(
        <div>
            <h1>{msg}</h1>
            <p> soma:{ somar(2,2) }</p>
        </div>
    )
}

export default HelloWolrd;