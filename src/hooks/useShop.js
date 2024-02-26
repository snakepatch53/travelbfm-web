import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getCategories } from "../services/categories";
// import { getProductsWithCategoryAndBusiness } from "../services/products";
import { InfoContext } from "../context/info";
import { getOpenBusiness } from "../utils/utils";

export default function useShop() {
    const { categories: _categories, products: _products } = useContext(InfoContext);
    const { business_id } = useParams();
    const [products, setProducts] = useState(null);
    const [productFilter, setProductFilter] = useState(null);
    const [categories, setCategories] = useState(null);
    const [categorySelected, setCategorySelected] = useState(0);
    useEffect(() => {
        if (!business_id) {
            setProducts(_products?.filter((item) => getOpenBusiness(item.category?.business)));
            setCategories(_categories?.filter((item) => getOpenBusiness(item?.business)));
            return;
        }
        setProducts(_products?.filter((item) => item.category?.business_id == business_id));
        setCategories(_categories?.filter((item) => item.business_id == business_id));
        // if (!business_id) {
        // getProductsWithCategoryAndBusiness().then((data) => setProducts(data));
        // getCategories().then((data) => setCategories(data));
        // } else {
        // getProductsWithCategoryAndBusiness().then((data) => {
        //     setProducts(data?.filter((item) => item.category?.business_id == business_id));
        // });
        // getCategories().then((data) => {
        //     setCategories(data?.filter((item) => item.business_id == business_id));
        // });
        // }
    }, [business_id, _products, _categories]);

    useEffect(() => {
        if (categorySelected == 0) {
            setProductFilter(products);
        } else {
            setProductFilter(products.filter((item) => item.category_id == categorySelected));
        }
    }, [categorySelected, products]);
    const handleSearch = (e) => {
        const value = e.target.value;
        if (value == "") {
            setProductFilter(products);
        } else {
            setProductFilter(
                products.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
            );
        }
    };

    const [categoriesIsOpen, setCategoriesIsOpen] = useState(false);

    const togleCategories = () => {
        // console.log(window.scrollY);
        document.getElementById("main-content").scrollTo(0, 0);
        setCategoriesIsOpen((prev) => !prev);
    };

    return {
        products,
        productFilter,
        categories,
        categorySelected,
        setCategorySelected,
        handleSearch,
        categoriesIsOpen,
        togleCategories,
    };
}
