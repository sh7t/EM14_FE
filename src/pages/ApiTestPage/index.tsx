import Layout from "../layout/Layout";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {useEffect} from "react";
import {getAllProducts} from "../../store/slices/productsSlice.ts";
import Loader from "../../components/Loader";
import BookPreview from "../../components/BookPreview";

const ApiTestPage = () => {
    const dispatch = useAppDispatch();
    const {products, isLoading} = useAppSelector(state => state.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);
    // definitely bad but still - just example
    // definitely bad but still - just example
    // definitely bad but still - just example
    return (
        <Layout>
            <main className="main">
                {isLoading && <Loader/>}
                <div className="books-preview">
                    {products.map(product => (
                        <BookPreview
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            variant={"buyable"}
                            authorName={product.price.toString()}
                            coverUrl={product.image}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    );
};

export default ApiTestPage;
