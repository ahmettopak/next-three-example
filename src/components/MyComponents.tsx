function MyComponent() {
    const urlParams = new URLSearchParams(window.location.search);

    const param1 = urlParams.get('param1');
    const param2 = urlParams.get('param2');

    return (
        <div>
            <p>Parametre 1: {param1}</p>
            <p>Parametre 2: {param2}</p>
        </div>
    );
}