import { useEffect, useState } from "react"

// Essa função useFetch apenas gerencia o estado de loading, data e error de uma requisição
// Além disso, ela executa a função que é passada como parâmetro, no caso fetchFunction
const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);


    // A função fetchData é utilizada para fazer a requisição para a API
    const fetchData = async() => {
        try{
            setLoading(true);
            setError(null); // Aqui o erro é setado como nulo para que ele não seja exibido caso a requisição seja bem sucedida.
            
            const result = await fetchFunction();

            setData(result);
        } catch (err){
            // @ts-ignore
            setError(err instanceof Error ? err : new Error('Ocorreu um erro'));
        } finally {
            // O finally é usado após o try e o catch, ele é executado independente se a requisição foi bem sucedida ou não.
            // Aqui ele é utilizado para setar o loading como falso, indicando que a requisição terminou.
            setLoading(false);
        }
    }

    // A função reset é utilizada para resetar os valores de data, loading e error
    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    }

    // O useEffect é utilizado quando você quer fazer algo no começõ da renderização do componente
    // Aqui queremos ver se autoFetch está ligado e se estiver, chamar a função fetchData
    useEffect(() => {
        if(autoFetch){
            fetchData();
        }
    }, []);

    return { data, loading, error, refetch: fetchData, reset };
}
export default useFetch;