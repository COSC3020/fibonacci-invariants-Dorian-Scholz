function fib(n) 
{
    
    const fib_solns = [0];
    if (n >= 1) fib_solns[1] = 1;

    
    for (let i = 2; i <= n; i++)
    {
        fib_solns[i] = fib_solns[i - 1] + fib_solns[i - 2];
    }

    return fib_solns;
}
