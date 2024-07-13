import { useState, useEffect } from "react";
import axios from "axios";

function Fetch() {
    const [data, setData] = useState({});
    const [error, setError] = useState("");
    const [load, setLoad] = useState("*****");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
                setData(response.data);
                setError("");
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>{load}</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <p>{data.title}</p>
        </div>
    );
}

export default Fetch;
