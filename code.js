function fib(n)
    {
    
    const fibArray = [];

    
    function computeFib(k) 
    {
        
        if (k === 0) return 0;
        if (k === 1) return 1;

        if (fibArray[k] !== undefined) return fibArray[k];

        fibArray[k] = computeFib(k - 1) + computeFib(k - 2);
        return fibArray[k];
    }

    for (let i = 0; i <= n; i++)
    {
        fibArray[i] = computeFib(i);
    }

    return fibArray;
}
